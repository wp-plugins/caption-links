<?php
/*
Plugin Name: Caption Linker
Plugin URI: http://weissmike.com/caption-linker
Description: Add "Insert Link" button to the WordPress caption field in the media window.
Version: 1.0
Author: Mike Weiss
Author URI: http://weissmike.com
License: GPL2
*/
/*  Copyright 2013  Mike Weiss  (email : mike@weissmike.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class caption_linker {
    public function __construct()  
    {
        add_action( 'admin_enqueue_scripts', array($this, 'caption_linker_enqueue') );
    }

    public function caption_linker_enqueue($hook)  
    {
        wp_enqueue_script( 'caption_linker', plugins_url( 'caption-linker.js', __FILE__ ), array('jquery') );
        wp_enqueue_style( 'caption_linker', plugins_url( 'caption-linker.css', __FILE__ ) );
        wp_enqueue_style( 'dashicons' );
    }
}

$linker = new caption_linker();

































