<?php
/**
 * Custom Plugin Template
 * File: template.php
 *
 */
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Load Editor</title>
<?php wp_head(); ?>
</head>

<body>
<? wp_editor('Ecample content', 'id',  array('textarea_rows' => 3)); ?>

<div id="add"><a onclick="load_new_editor('editor', 1);" href="javascript:void(0);">Click here</a> to add an editor</div>
<div id="editor_container">
<!-- Editors will load here -->
</div>

<script>
<?
echo 'ajaxurl = "'.admin_url('admin-ajax.php').'";';
?>
</script>
<?php wp_footer(); ?>
</body>
</html>
