<?php

$guides = json_decode(file_get_contents("guides.json"), true);

$h_guides = $guides["horizontal"];
$v_guides = $guides["vertical"];

function get_guides_html($h_guides, $v_guides) {
	$output = "";

	foreach ($h_guides as $key => $value) {
		$output = $output . get_horizontal_guides_html($value);
	}

	foreach ($v_guides as $key => $value) {
		$output = $output . get_vertical_guides_html($value);
	}

	return $output;
}

function get_horizontal_guides_html($offset_top) {
	return '<div class="guide guide-h" style="top:' . $offset_top . 'px;"></div>';
}

function get_vertical_guides_html($offset_left) {
	return '<div class="guide guide-v" style="left:' . $offset_left . 'px;"></div>';
}

?>