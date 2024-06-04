<?php

namespace WeTechPro\Inc\Frontend;

class Frontend {

    private $plugin_name;
    private $version;
    private $plugin_text_domain;

    public function __construct($plugin_name, $version, $plugin_text_domain) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->plugin_text_domain = $plugin_text_domain;

        add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
     
    }

    public function enqueue_styles() {
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/wetechpro-frontend.css', [], $this->version, 'all');
    }

    public function enqueue_scripts() {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/wetechpro-frontend.js', ['jquery'], $this->version, false);
    }

    
}