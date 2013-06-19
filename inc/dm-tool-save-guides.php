<?php
	$json = $_POST['json'];

	if (json_decode($json) != null) { /* sanity check */
		$file = fopen('../guides.json','w+');
		fwrite($file, $json);
		fclose($file);
	} else {
		// TODO: Handle error 
	}
?>