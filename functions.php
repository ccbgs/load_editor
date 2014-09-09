<?
// load custom editor template 
function load_editor_template( $template )
{
    $template = plugin_dir_path( __FILE__ ) . 'template.php';

    return $template;
}

add_filter( 'template_include', 'load_editor_template' );

// load javascript 
function load_editor_scripts() {
    wp_enqueue_script( 'load_editor', plugins_url() . '/load_editor/js/load_editor.js', array(), '', true );
    wp_enqueue_script( 'jquery');
}

add_action( 'wp_enqueue_scripts', 'load_editor_scripts' );

// create new editor
function load_editor_new_editor() {
    $id      = $_POST['id'];
    $number  = $_POST['number'];
    $next    = $number + 1;
    $full_id = $id.$number;

    echo "<h1>Editor $number</h1>";

    $content = '<p>This is example content.</p>';
    wp_editor($content, $full_id, array('textarea_rows' => 3));

    // create "add new" text
    echo "<div class='add'><a onclick=\"load_new_editor('editor', $next);\" href='javascript:void(0);'>Click here</a> to add another editor</div>";

    die();
}

add_action( 'wp_ajax_load_editor_new_editor', 'load_editor_new_editor' );
