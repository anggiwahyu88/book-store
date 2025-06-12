<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TransactionController extends Controller
{
    function koleksi()
    {
        $transactions= Transaction::with('book.publisher')->where('member_id',  Auth::guard('member')->user()->id)->get();
        return Inertia::render('Koleksi',[
            'transactions'=>$transactions
        ]);
    }
    function getSnapToken(Request $request)
    {
        $id_book =  $request->id_book;
        $book = Book::find($id_book, 'price')->first();
        \Midtrans\Config::$serverKey = config('mitrands.serverKey');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => (int) $book->price,
                'id_book' => $id_book,
                'id_member' => Auth::guard('member')->user()->id,
            )
        );
        $snapToken = \Midtrans\Snap::getSnapToken($params);
        return response()->json([
            'token' => $snapToken,
        ]);
    }
    function transactionSuccses(Request $request)
    {
        $id_book =  $request->id_book;
        $order_id =  $request->order_id;
        Transaction::create([
            "member_id" => Auth::guard('member')->user()->id,
            "book_id" => $id_book,
            "id" => $order_id,
        ]);
        return response()->json([
            'succses' => true,
        ]);
    }
}
