/**
 * Setup Design Mirror guides tool
 */

DMToolGuides = function () {

	function init() {
		// $('.design').click(function(e) {
		//	console.info("pageX: " + e.pageX);
		//	console.info("pageY: " + e.pageY);
		//	console.info("this offset X: " + $(this).offset().left);
		//	console.info("this offset Y: " + $(this).offset().top);
		//	console.info("inner offset X: " + ($(this).find('.inner').offset().left - $(this).offset().left));
		//	console.info("inner offset Y: " + ($(this).find('.inner').offset().top - $(this).offset().top));
		//	console.info((e.pageX - $(this).offset().left) + ($(this).offset().left - $(this).find('.inner').offset().left));
		//	console.info((e.pageY - $(this).offset().top) + ($(this).offset().top - $(this).find('.inner').offset().top));
		//	$('.guide').css("top", (e.pageY - $(this).offset().top) + ($(this).offset().top - $(this).find('.inner').offset().top));
		// });
	}

	return {
		init: init
	};
}();