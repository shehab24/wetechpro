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
        add_action('wp_ajax_get_all_product_category', [$this , 'myplugin_handle_get_all_product_category']);
        add_action('wp_ajax_nopriv_get_all_product_category', [$this , 'myplugin_handle_get_all_product_category']);
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

    public function myplugin_handle_create_category_request() {
        check_ajax_referer('wp_ajax_admin', 'nonce');
    
        $category_name = isset($_POST['categoryName']) ? sanitize_text_field($_POST['categoryName']) : "";
        $categoryDesc = isset($_POST['categoryDesc']) ? sanitize_text_field($_POST['categoryDesc']) : "";
    
        // Handle file upload
        $attachment_id = '';
        if (isset($_FILES['categoryImage']) && !empty($_FILES['categoryImage']['name'])) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/media.php');
            require_once(ABSPATH . 'wp-admin/includes/image.php');
    
            $file = $_FILES['categoryImage'];
            $upload_overrides = array('test_form' => false);
    
            $movefile = wp_handle_upload($file, $upload_overrides);
            if ($movefile && !isset($movefile['error'])) {
                // The file is uploaded successfully, now insert it into the media library
                $attachment = array(
                    'post_mime_type' => $movefile['type'],
                    'post_title'     => sanitize_file_name($movefile['file']),
                    'post_content'   => '',
                    'post_status'    => 'inherit'
                );
    
                $attachment_id = wp_insert_attachment($attachment, $movefile['file']);
                if (!is_wp_error($attachment_id)) {
                    require_once(ABSPATH . 'wp-admin/includes/image.php');
                    $attachment_data = wp_generate_attachment_metadata($attachment_id, $movefile['file']);
                    wp_update_attachment_metadata($attachment_id, $attachment_data);
                }
            }
        }
    
        // Insert the product category
        $result = wp_insert_term($category_name, 'product_cat', array(
            'description' => $categoryDesc,
        ));
    
        if (!is_wp_error($result)) {
            $term_id = $result['term_id'];

            add_term_meta($term_id, 'category_term_meta', "wetechpro");
    
            // Add the uploaded image to the category
            if ($attachment_id) {
                update_term_meta($term_id, 'thumbnail_id', $attachment_id);
            }

           
            wp_send_json_success(array('status' => true));
        } else {
            wp_send_json_success(array('status' => false));
        }

        
    }

    public function myplugin_handle_get_all_product_category(){
        check_ajax_referer('wp_ajax_admin', 'nonce');
        $args = array(
            'taxonomy'     => 'product_cat',
            'orderby'      => 'name',
            'show_count'   => 0,
            'pad_counts'   => 0,
            'hierarchical' => 1,
            'title_li'     => '',
            'hide_empty'   => 0,
            'meta_query'   => array(
                array(
                    'key'       => 'category_term_meta',
                    'compare'   => 'wetechpro',
                ),
            ),
        );
        
        $product_categories = get_terms( $args );
        
        $category_data = array();
        
        foreach( $product_categories as $cat ) {
            $cat_id = $cat->term_id;
            $cat_name = $cat->name;
            $cat_link = get_term_link( $cat_id, 'product_cat' );
            $cat_image_id = get_term_meta( $cat_id, 'thumbnail_id', true );
            $cat_image_src = wp_get_attachment_url( $cat_image_id );
            
            // Add category data to array
            $category_data[] = array(
                'id' => $cat_id,
                'name' => $cat_name,
                'link' => $cat_link,
                'image_src' => $cat_image_src,
            );
        }

        wp_send_json_success(array('status' => true, 'product_categories' => $category_data));

    }
    
}