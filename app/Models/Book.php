<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'title',
        'publisher_id',
        'published_date',
        'description',
        'thumbnail',
        'link_access',
        'price',
    ];

    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }
}
