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

	$('#half').click(function(e) {
		e.preventDefault();
		$('.design').css("height", "50%");
		$('.code').css("height", "50%");
		$('.view').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#third').click(function(e) {
		e.preventDefault();
		$('.design').css("height", "34%");
		$('.code').css("height", "66%");
		$('.view').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#quarter').click(function(e) {
		e.preventDefault();
		$('.design').css("height", "25%");
		$('.code').css("height", "75%");
		$('.view').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#design').click(function(e) {
		e.preventDefault();
		$('.design').css("height", "100%");
		$('.code').css("height", "0%");
		$('.view').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#code').click(function(e) {
		e.preventDefault();
		$('.design').css("height", "0%");
		$('.code').css("height", "100%");
		$('.view').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.design').click(function(e) {
		console.info("pageX: " + e.pageX);
		console.info("pageY: " + e.pageY);
		console.info("this offset X: " + $(this).offset().left);
		console.info("this offset Y: " + $(this).offset().top);
		console.info("inner offset X: " + ($(this).find('.inner').offset().left - $(this).offset().left));
		console.info("inner offset Y: " + ($(this).find('.inner').offset().top - $(this).offset().top));
		console.info((e.pageX - $(this).offset().left) + ($(this).offset().left - $(this).find('.inner').offset().left));
		console.info((e.pageY - $(this).offset().top) + ($(this).offset().top - $(this).find('.inner').offset().top));
		$('.guide').css("top", (e.pageY - $(this).offset().top) + ($(this).offset().top - $(this).find('.inner').offset().top));
	});
});