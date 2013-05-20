/**
 * Setup Design Mirror view tool
 */

DMToolView = function () {

	function init() {
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
	}

	return {
		init: init
	};
}();