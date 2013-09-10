<?php
//build html
	$html = <<<HTML
	<div class='lts-contact'>
		<a>We would love to hear from you!  Drop us a note with booking requests, questions, or comments.</a><br> 
		<a>Name</a><br><input type="text" class="contactName"><br>
		<a>Email</a><br><input type="text" class="contactEmail"><br>
		<a>Subject</a><br><input type="text" class="contactSubject"><br>
		<a>Note</a><br><textarea class="contactNote"></textarea><br>
		<button onclick="sendMail(); return false" class='button'>Send</button>	
	</div>
HTML;

	echo($html);
?>
