$(document).on('click', '.displayLegalNotice', function(e) {
	e.preventDefault();
	console.log('clicks');
	$('.legal-notice').show(function() {
		window.location.hash = '#legal-notice-anchor';
	});
});