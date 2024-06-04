<?php
/*
Plugin Name: WeTechPro
Description: This is a test plugin for testing
Version: 1.0.0
Author: Shehab mahamud
Author URI: https://codeblend.net
Plugin URI: https://codeblend.net/wetechpro
Text doamain : wetechpro
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Define plugin constants
define('PLUGIN_NAME', 'wetechpro');
define('PLUGIN_VERSION', '1.0.0');
define('PLUGIN_TEXT_DOMAIN', 'wetechpro');
define('PLUGIN_PATH', plugin_dir_path(__FILE__));
define('PLUGIN_URL', plugin_dir_url(__FILE__));

// Autoload dependencies
require_once __DIR__ . '/vendor/autoload.php';
include_once(ABSPATH . 'wp-admin/includes/plugin.php');

use WeTechPro\Main;

function run_plugin() {
    if(is_plugin_active('woocommerce/woocommerce.php')){
        Main::init();
    }else{
        add_action('admin_notices', "show_woocommerce_notice");
    }
    
}
run_plugin();


function show_woocommerce_notice() {

            ?>
            <div class="notice notice-error">
            <p> WooCommerce is not active. Please activate WooCommerce to use WetechPro plugin</p>
            </div>
            <?php
}