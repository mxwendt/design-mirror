$(document).ready(function() {
	console.info("DOM READY");

	/**
	 * Setup Design Mirror
	 */

	var imageH = $('.design-image').height();

	$('.design').children('.inner').height(imageH);
	$('.code').children('.inner').height(imageH);

	$('.design').scroll(function() {
		// console.info("SCROLLING");
		$('.code').scrollTop($(this).scrollTop());
	});

	$('.code').scroll(function() {
		// console.info("SCROLLING");
		$('.design').scrollTop($(this).scrollTop());
	});

	DMToolView.init();
	DMToolGuides.init();
});