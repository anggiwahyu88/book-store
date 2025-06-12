<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// Ganti Model dengan Authenticatable
use Illuminate\Foundation\Auth\User as Authenticatable;

class Member extends Authenticatable
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'email',
        'address',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

}
