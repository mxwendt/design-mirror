/**
 * Setup Design Mirror view tool
 */

DMToolView = function () {

	var $buttons,
		$resizer,
		$design,
		$code;

	function init() {
		$resizer = $('.resizer');
		$buttons = $('#split, #design, #code');
		$design = $('.design');
		$code = $('.code');

		$buttons.click(function(e) {
			e.preventDefault();
			switch (e.target.id) {
				case "split": setContainerHeights("50%", "50%", true); break;
				case "design": setContainerHeights("100%", "0%"); break;
				case "code": setContainerHeights("0%", "100%"); break;
				default: setContainerHeights("50%", "50%"); break;
			}
			$('.view').find('.is-active').removeClass('is-active');
			$(this).addClass('is-active');
		});
	}

	function setContainerHeights(designHeight, codeHeight, showDivider) {
		$design.css("height", designHeight);
		$code.css("height", codeHeight);
		if (showDivider) {
			$resizer.css("top", designHeight).show();
		} else {
			$resizer.hide();
		}
	}

	return {
		init: init
	};
}();