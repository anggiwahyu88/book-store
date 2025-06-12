<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Publisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Login');
    }

    public function loginAction(Request $request)
    {

        if ($request->isPublisher) {
            if (Publisher::where('email', $request->email)->exists()) {
                if (Auth::guard('publisher')->attempt($request->only('email', 'password'))) {
                    $request->session()->regenerate();
                    return redirect()->intended('/');
                }
            }
        } else {
            if (Member::where('email', $request->email)->exists()) {
            if (Auth::guard('member')->attempt($request->only('email', 'password'))) {
                $request->session()->regenerate();
                return redirect()->intended('/');
            }
            }
        }

        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ]);
    }
    public function register()
    {
        return Inertia::render('Register');
    }

    public function registerAction(Request $request)
    {

        if ($request->isPublisher) {
            $publisher = Publisher::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'address'    => $request->address,
                'phone'    => $request->phone,
                'website'    => $request->website,
                'password' => Hash::make($request->password),
            ]);

            Auth::guard('publisher')->login($publisher);
        } else {
            $member = Member::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'address'    => $request->address,
                'password' => Hash::make($request->password),
            ]);

            Auth::guard('member')->login($member);
        }

        return redirect()->intended('/');
    }
    function logout(Request $request)
    {
        $credensial = $request->isPublisher ? "publisher" : "member";
        Auth::guard($credensial)->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
