<?php

namespace WeTechPro;

class Main {
    public static function init() {
        $plugin_name = PLUGIN_NAME;
        $version = PLUGIN_VERSION;
        $plugin_text_domain = PLUGIN_TEXT_DOMAIN;

        // Initialize the admin class
        if (is_admin()) {
            new Inc\Admin\Admin($plugin_name, $version, $plugin_text_domain);
        }

        // Initialize the frontend class
        if (!is_admin()) {
            new Inc\Frontend\Frontend($plugin_name, $version, $plugin_text_domain);
        }
    }
}