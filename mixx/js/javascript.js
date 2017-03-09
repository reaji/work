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
// 		$( '#navbackground' ).css( "opacity", "1" );
// });

$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#navbackground').css( "opacity", "1" );
        } else {
            $('#navbackground').css( "opacity", "0" );
        }
    });


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
