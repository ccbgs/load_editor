
function load_new_editor(id, number){
	// remove click to add
	jQuery('#add').remove();
	
	var fullId = id + number;
	
	var data = {
		'action': 'load_editor_new_editor',
		'number': number,
		'id': id
	};
	
	jQuery.post(ajaxurl, data, function(response) {
		
		//add new editor
		jQuery('#editor_container').append(response);
        
		// use wordpress settings
		tinymce.init({
                        selector: fullId,
                
                        theme:"modern",
                		skin:"lightgray",
                		language:"en",
                		formats:{
                			alignleft: [
                				{selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: {textAlign:'left'}},
                				{selector: 'img,table,dl.wp-caption', classes: 'alignleft'}
                			],
                			aligncenter: [
                				{selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: {textAlign:'center'}},
                				{selector: 'img,table,dl.wp-caption', classes: 'aligncenter'}
                			],
                			alignright: [
                				{selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: {textAlign:'right'}},
                				{selector: 'img,table,dl.wp-caption', classes: 'alignright'}
                			],
                			strikethrough: {inline: 'del'}
                		},
                		relative_urls:false,
                		remove_script_host:false,
                		convert_urls:false,
                		browser_spellcheck:true,
                		fix_list_elements:true,
                		entities:"38,amp,60,lt,62,gt",
                		entity_encoding:"raw",
                		keep_styles:false,
                		paste_webkit_styles:"font-weight font-style color",
                		preview_styles:"font-family font-size font-weight font-style text-decoration text-transform",
                		wpeditimage_disable_captions:false,
                		wpeditimage_html5_captions:true,
                		plugins:"charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview",
                		selector:"#" + fullId,
                		resize:"vertical",
                		menubar:false,
                		wpautop:true,
                		indent:false,
                		toolbar1:"bold,italic,strikethrough,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,unlink,wp_more,spellchecker,fullscreen,wp_adv",toolbar2:"formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help",
                		toolbar3:"",
                		toolbar4:"",
                		tabfocus_elements:":prev,:next",
                		body_class:"id post-type-post post-status-publish post-format-standard",
                	});

		
	        // this is needed for the editor to initiate
        	tinyMCE.execCommand('mceAddEditor', false, fullId);
        	
        	//enable quick tags
	        if ( typeof(QTags) == 'function' ) {
                	QTags( {'id': fullId } );
                	QTags._buttonsInit();
                    	//remember last tab selected
                    	switchEditors.switchto( jQuery( '#wp-' + fullId + '-wrap' ).find( '.wp-switch-editor.switch-' + ( getUserSetting( 'editor' ) == 'html' ? 'html' : 'tmce' ) )[0] );
                }   
	});
}
