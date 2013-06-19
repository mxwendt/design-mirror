$(document).ready(function() {
	console.info("DOM READY");

	/**
	 * Setup Design Mirror
	 */

	var imageW = $('.design-image').width();
	var imageH = $('.design-image').height();

	$('.design').children('.inner').width(imageW).height(imageH);
	$('.code').children('.inner').width(imageW).height(imageH);

	$('#template').attr({
		'width': imageW,
		'height': imageH
	});

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