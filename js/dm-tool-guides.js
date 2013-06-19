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

		$saveButton.click(saveGuidesToFile);
	}

	function importGuides() {
		// TODO: Reflect JSON in object
		$.getJSON("guides.json", function(data) {
			guides = data;
			addJSONGuides(guides);
		});
	}

	function saveGuidesToFile() {
		$.post("inc/dm-tool-save-guides.php", {
			json: JSON.stringify(guides)
		}).fail(function() {
			console.log("failed to save json file");
		});
	}

	/**
	 * Add guides saved inside the guides.json file
	 */
	function addJSONGuides(json) {
		$(json.vertical).each(function(i, elem) {
			var $guide = $('<div>').addClass('guide guide-v');
			$guide.css('left', elem);
			$guideWrappers.append($guide);
		});
		$(json.horizontal).each(function(i, elem) {
			var $guide = $('<div>').addClass('guide guide-h');
			$guide.css('top', elem);
			$guideWrappers.append($guide);
		});
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
		$(this).mousemove(updatePreviewGuide);
		$(this).click(addGuide);
	}

	function offAddingPreviewGuide() {
		$(this).unbind('click').unbind('mousemove');
		if ($previewGuides.length) {
			$previewGuides.remove();
			console.log("guides removed");
		} else {
			console.info("No Preview Guides to remove");
		}
	}

	function addGuide(e) {
		e.preventDefault();
		var $newGuide = $previewGuides.first().clone().removeClass('guide-preview');
		$guideWrappers.append($newGuide);
		console.log($newGuide);
		if ($newGuide.hasClass('guide-v')) {
			console.log($newGuide.css('left'));
			guides.vertical.push($newGuide.css('left'));
			console.log(JSON.stringify(guides));
		} else if ($newGuide.hasClass('guide-h')) {
			console.log($newGuide.css('top'));
			guides.horizontal.push($newGuide.css('top'));
			console.log(JSON.stringify(guides));
		}
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