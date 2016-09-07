$(document).ready(function(){


	$('.video').click(function(){
		$('#facebookarchive').fadeOut('fast');
		$('#facebookarchivevideo').fadeIn('slow');
	});

	$('.turnoff').click(function(){
		$('#facebookarchive').fadeIn('slow');
		$('#facebookarchivevideo').fadeOut('fast');
		
	});

// 	$( window ).scroll(function() {
// 		if( scroll = false ){
// 		$( '#navbackground' ).css( "display", "none" );
// 	}else{
// 	$( '#navbackground' ).css( "box-shadow", "0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 4px 0 rgba(0, 0, 0, 0.15" );
// 	}
// });


$(window).scroll(_.debounce(function(){
    $('#navbackground').css("box-shadow", "rgba(0,0,0,0.16) 0 2px 4px");
}, 150, { 'leading': true, 'trailing': false }));

$(window).scroll(_.debounce(function(){
    $('#navbackground').css("box-shadow", "none");
}, 150));

// 	$( window ).end( "scroll" ,function() {
//   $( '#navbackground' ).css( "display", "none" );
// });
});
