//===========================================//
//========  CHS CODECAMP GLOBAL JS  =========//
//===========================================//

// ===================
// slide functionality
// ===================

$.deck('.slide');


// ============================
// updates video on link clicks
// ============================

var url = window.location.href;


// =================================
// updates assignment on link clicks
// =================================

if ( url.indexOf('day') > -1 ) {

	$('.assignment').click(function(){
		
		$('.active_assignment_link').removeClass('active_assignment_link');
		$(this).addClass('active_assignment_link');
		link_index = $(this).data('index');

		$('.assignment_text').each(function(){
			var content_index = $(this).data('index');
			if(content_index == link_index) {
				$('.active_assignment').removeClass('active_assignment');
				$(this).addClass('active_assignment');
			}
		});

	});

}