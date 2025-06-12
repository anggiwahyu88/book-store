<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Publisher extends Authenticatable
{
    use HasFactory;
        public $timestamps = false;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
        'website',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

}
