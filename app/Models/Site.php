<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    // Explicitly define the primary key if it is not 'id'
    protected $primaryKey = 'site_id';

    // If your primary key is not an auto-incrementing integer, set the following:
    public $incrementing = false;
    protected $keyType = 'string';

    // Allow mass assignment for all fields
    protected $fillable = [
        'site_id', 'site_name', 'site_parent', 'site_picture', 'site_type_id', 'site_location_maps', 'site_address', 'site_port_capacity'
    ];
}
