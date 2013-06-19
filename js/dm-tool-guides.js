/**
 * Setup Design Mirror guides tool
 */

DMToolGuides = function () {

	var guides = {},
		mode = "off",
		$design,
		$hButton,
		$vButton,
		$saveButton,
		$clearButton,
		$guideWrappers, // design and code guide wrappers
		$previewGuide,
		$previewGuides; // design and code preview guide

	function init() {
		$design = $('.design');
		$hButton = $('#h');
		$vButton = $('#v');
		$saveButton = $('#save');
		$clearButton = $('#clear');
		$guideWrappers = $('.guides-wrapper');

		importGuides();
		manageStates();
	}

	function importGuides() {
		// TODO: Reflect JSON in object
	}

	function addGuides(json) {
		// TODO: Add preview guides from JSON
	}

	function manageStates() {
		$hButton.click(function() {
			if (mode === "h") {
				mode = "off";
				$(this).removeClass('is-active');
				$design.unbind('mouseenter').unbind('mouseleave');
			} else {
				if (mode === "v") {
					$vButton.removeClass('is-active');
					$design.unbind('mouseenter').unbind('mouseleave');
				}
				mode = "h";
				$(this).addClass('is-active');
				$design.hover(onAddingPreviewGuide, offAddingPreviewGuide);
			}
		});
		$vButton.click(function() {
			if (mode === "v") {
				mode = "off";
				$(this).removeClass('is-active');
				$design.unbind('mouseenter').unbind('mouseleave');
			} else {
				if (mode === "h") {
					$hButton.removeClass('is-active');
					$design.unbind('mouseenter').unbind('mouseleave');
				}
				mode = "v";
				$(this).addClass('is-active');
				$design.hover(onAddingPreviewGuide, offAddingPreviewGuide);
			}
		});
	}

	function onAddingPreviewGuide() {
		$previewGuide = $('<div>');
		if (mode === "h") {
			$previewGuide.addClass('guide guide-h guide-preview');
		} else if (mode === "v") {
			$previewGuide.addClass('guide guide-v guide-preview');
		}
		$guideWrappers.append($previewGuide);
		$previewGuides = $('.guide-preview');
		$(this).click(addPreviewGuide);
		$(this).mousemove(updatePreviewGuide);
	}

	function offAddingPreviewGuide() {
		$(this).unbind('click').unbind('mousemove');
		if ($previewGuides.length) {
			$previewGuides.remove();
		} else {
			console.info("No Preview Guides to remove");
		}
	}

	function addPreviewGuide(e) {
		e.preventDefault();
		var $newGuide = $previewGuides.first().removeClass('guide-preview');
		$guideWrappers.append($newGuide);
	}

	function updatePreviewGuide(e) {
		if (mode === "h") {
			$previewGuides.css('top', e.pageY);
		} else if (mode === "v") {
			var offsetX = $('.tools').width();
			$previewGuides.css('left', e.pageX - offsetX);
		}
	}

	return {
		init: init
	};
}();