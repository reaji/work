$(document).ready(function(){


	$('.video').click(function(){
		$('#facebookarchive').fadeOut('fast');
		$('#facebookarchivevideo').fadeIn('slow');
	});

	$('.turnoff').click(function(){
		$('#facebookarchive').fadeIn('slow');
		$('#facebookarchivevideo').fadeOut('fast');
	});
	

});