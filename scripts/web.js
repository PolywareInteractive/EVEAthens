$(document).on('click', '.displayLegalNotice', function(e) {
	e.preventDefault();
	console.log('clicks');
	$('.legal-notice').slideDown('slow', function() {
		window.location.hash = '#legal-notice-anchor';
	});
});