$(document).ready(function() {
	console.info("DOM READY");
	$('.design').scroll(function() {
		console.info("SCROLLING");
		$('.code').scrollTop($(this).scrollTop());
	});

	$('.code').scroll(function() {
		console.info("SCROLLING");
		$('.design').scrollTop($(this).scrollTop());
	});
});