<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with('publisher')->get();

        return Inertia::render('Home', [
            'books' => $books
        ]);
    }
    public function upload()
    {
        return Inertia::render('BookUpload');
    }
    public function show()
    {
        $books = Book::with('publisher')->where('publisher_id', Auth::guard('publisher')->user()->id)->get();
        return Inertia::render('Book', [
            'books' => $books
        ]);
    }
    public function create(Request $request)
    {
        $request->merge([
            'publisher_id' => Auth::guard('publisher')->user()->id,
            'published_date' => Carbon::today()
        ]);
        Book::create($request->all());
        return redirect('/book');
    }
    public function delete(Request $request)
    {
        $count = Transaction::where('book_id', $request->id)->count();
        if ($count > 0) {
            return back()->withErrors([
                'book' => 'Tidak dapat dihapus, Sudah ada yang membeli',
            ]);
        }
        $book = Book::findOrFail($request->id);

        $book->delete();
        return redirect('/book');
    }
    public function update(Request $request, $id)
    {
        $book = Book::where('id', $id)->first();
        return Inertia::render('BookUpdate', [
            "book" => $book
        ]);
    }
    public function updateAction(Request $request, $id)
    {
        $book = Book::where('id', $id)->first();
        $book->update($request->all());
        return redirect('/book');
 
    }
}
