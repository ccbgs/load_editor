// JavaScript Document

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
        
		
		//tinyMCE.execCommand('mceAddEditor', true, fullId);

		//tinyMCE.init(tinyMCEPreInit.mceInit[fullId]);
	   
	});
}