$(document).ready(function() {
	console.info("DOM READY");

	$('.code').children('.inner').height($('.design').children('.inner').height());

	$('.design').scroll(function() {
		console.info("SCROLLING");
		$('.code').scrollTop($(this).scrollTop());
	});

	$('.code').scroll(function() {
		console.info("SCROLLING");
		$('.design').scrollTop($(this).scrollTop());
	});
});