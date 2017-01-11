$(document).on('click', 'a[class=navigation]', function(e) {
	e.preventDefault();
	
	var location = $(this).data('location');

	$('html,body').animate({ scrollTop: $("#"+location).offset().top}, 'slow');
	
});