<?php

namespace WeTechPro\Inc\Admin;



class Admin {

    private $plugin_name;
    private $version;
    private $plugin_text_domain;

    public function __construct($plugin_name, $version, $plugin_text_domain) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->plugin_text_domain = $plugin_text_domain;

        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('admin_menu', [$this, 'mcp_add_admin_menu']);
        add_action( 'admin_head', array( $this, 'add_admin_menu_css' ) );
        add_action('wp_ajax_create_category_request', [$this , 'myplugin_handle_create_category_request']);
        add_action('wp_ajax_nopriv_create_category_request', [$this , 'myplugin_handle_create_category_request']);
    }

    public function enqueue_styles() {
        wp_enqueue_style("wetechpro-admin-css", PLUGIN_URL . 'assets/css/admin.php.css', [], $this->version, 'all');
        wp_enqueue_style("wetechpro-admin-build-css", PLUGIN_URL . 'build/admin.css', [], $this->version, 'all');
    }

    public function enqueue_scripts() {
        wp_enqueue_script($this->plugin_name, PLUGIN_URL . 'assets/js/admin.js', ['jquery'], $this->version, false);
        wp_enqueue_script('wetech-main-js', PLUGIN_URL . 'build/js/main.js', ['wp-element'], $this->version, false);
        wp_enqueue_script('wetech-build-admin-js', PLUGIN_URL . 'build/js/admin.js', ['wp-element'], $this->version, false);
        wp_localize_script('wetech-main-js', 'wetechpro_main', [
            'nonce' => wp_create_nonce('wp_rest'),
            'siteUrl' => get_site_url(),
        ]);
        wp_localize_script('wetech-build-admin-js', 'wetechpro', [
            'nonce' => wp_create_nonce('wp_ajax_admin'),
            'top_lavel_menu' => $this->get_toplevel_menu_title(),
            'all_menu_list' => $this->get_admin_menu_list(),
            'route_path'            => wp_parse_url( admin_url(), PHP_URL_PATH ),
            "ajax_url"           => admin_url('admin-ajax.php'),
        ]);
    }

    public function mcp_add_admin_menu() {


        
        $page_title= $this->get_toplevel_menu_title();
        add_menu_page(
            $page_title,   
            $page_title,       
            'manage_options',      
            'wetechpro',    
            [$this ,'mcp_render_admin_page'], 
            PLUGIN_URL. 'assets/images/wetechpro.svg',
            6                      
        );

        foreach ( $this->get_admin_menu_list() as $item_key => $item ) {
			add_submenu_page( $item['parent_slug'], $item['title'], $item['title'], $item['capability'], $item_key, [ $this, 'mcp_render_admin_page' ] );
		}
    }

        
        public  function get_admin_menu_list() {
            $menu                         = [];
            $menu[ 'wetechpro' ] = [
                'parent_slug' => 'wetechpro',
                'title'      => __( 'Dashboard', 'wetechpro' ),
                'capability' => 'manage_options',
            ];
            $menu[ 'wetechpro'. '-menu-manager'  ] = [
                'parent_slug' => 'wetechpro',
                'title'      => __( 'Menu Manager', 'wetechpro' ),
                'capability' => 'manage_options',
            ];
            $menu[ 'wetechpro'. '-courses' ]         = [
                'parent_slug' => 'wetechpro',
                'title'      => __( 'Courses', 'wetechpro' ),
                'capability' => 'manage_options',
                'sub_items' => [
                    [
                        'slug'       => '',
                        'title'      => __( 'All Courses', 'wetechpro' ),
                    ],
                    [
                        'slug'       => 'category',
                        'title'      => __( 'Category', 'wetechpro' ),
                    ],
                    [
                        'slug'       => 'tags',
                        'title'      => __( 'Tags', 'wetechpro' ),
                    ]
                ]
            ];
            $menu[ 'wetechpro' . '-lessons' ]         = [
                'parent_slug' => 'wetechpro',
                'title'      => __( 'Lessons', 'wetechpro' ),
                'capability' => 'manage_options',
            ];
         
           return $menu ;
           
    }

    public function get_toplevel_menu_title() {
		return apply_filters( 'wetechpro/admin/toplevel_menu_title', __( 'WeTechPRO', 'wetechpro' ) );
	}

    public function mcp_render_admin_page() {
        echo '<div id="mcp-admin-app"></div>';
    }

    function add_admin_menu_css() {
		echo '<style>
        #adminmenu .toplevel_page_wetechpro .wp-menu-image img {
            width: 27px !important;
            height: 27px !important;
            text-align: center !important;
            transform: translateX(3px) translateY(-3px) !important;
        }
		</style>';
	}	

    public function myplugin_handle_create_category_request(){
        check_ajax_referer('wp_ajax_admin', 'nonce');

        $category_name = isset($_POST['categoryName']) ?  sanitize_text_field($_POST['categoryName']) : " ";
        $result = wp_insert_term($category_name, 'product_cat');
   
        if ($result) {
            wp_send_json_success(array('status' => true, 'category_name' => $category_name));
        }else{
            wp_send_json_success(array('status' => false));
        }
    }
}