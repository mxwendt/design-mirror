<?php 
	include("inc/dm-tool-guides.php");
	include("inc/dm-tool-save-guides.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Design Mirror</title>

	<meta name="description" content="">
	<meta name="author" content="Maximilian Wendt">
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/dm-tool-view.css">
	<link rel="stylesheet" href="css/dm-tool-guides.css">
	<link rel="stylesheet" href="css/dm.css">

</head>
<body>
	<div class="tools">
		<div class="view">
			View:
			<a href="#" id="split" class="is-active">split</a>
			<a href="#" id="design">design only</a>
			<a href="#" id="code">code only</a>
		</div>
		<div class="guides">
			Guides:
			<a href="#" class="button" id="v">vertical</a>
			<a href="#" class="button" id="h">horizontal</a>
			<a href="#" class="button" id="save">Save</a>
			<a href="#" class="button" id="clear">Clear</a>
		</div>
	</div>
	
	<div class="frame">
		<div class="design">		
			<div class="inner">
				<div class="guides-wrapper">
					<!--?php echo get_guides_html($h_guides, $v_guides) ?-->
				</div>
				<!-- Place the design here -->
				<img class="design-image" src="do-lectures.png" alt="">
			</div>
		</div>
		<div class="resizer"></div>
		<div class="code">
			<div class="inner">
				<div class="guides-wrapper">
					<!--?php echo get_guides_html($h_guides, $v_guides) ?-->
				</div>
				<!-- Link to the template here -->
				<iframe id="template" src="template.html"></iframe>
			</div>
		</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="js/dm-tool-view.js"></script>
	<script src="js/dm-tool-guides.js"></script>
	<script src="js/dm.js"></script>

</body>
</html>