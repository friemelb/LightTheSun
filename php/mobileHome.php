<?php
//build html
	$html = <<<HTML
	<div class='lts-mobile'>		
			<ul class='lts-mobile-menu'>
				<li class='lts-bandName'>Light The Sun</li>
				<li>Gigs</li>
				<li>Music</li>
				<li>Social</li>
			</ul>
		
		<div class='lts-mobile-body'>
			<div class='lts-mobile-bio-cont'>
				<div class='lts-mobile-bio-cont-header'>
					About
				</div>
				<div class='lts-mobile-bio-cont-body'>
				From the heart of Texas, Austin’s own Light the Sun is living proof that genuine homegrown tunes are being cultivated in the 'Live Music Capital of the World'.  Only by trying to fit them into a mold will it become obvious that there is none for the Sun - they create their own.  Light the Sun will blur the lines of traditional genres, captivating eyes and ears along the way.  Their energy and dedication are second to none in their live shows, while demonstrating technical mastery and innovative production in the studio.
				</div>
				<div class='lts-mobile-bio-cont-header'>
					Album
				</div>
				<div class='lts-mobile-bio-cont-body'>
				Having unveiled their self-released debut EP – Ignite – Light the Sun is set on conquering the indie / rock scene by actively gigging in Austin and surrounding areas.  By uniting their own musical pasts and influences with a fire to share their sound, vocalist Chris Sabanos, drummer Cody Overstreet, lead guitarist Kyle Stroman and bassist Matt Sowin are writing the chorus to inspire a generation.  What sets the foundation for their approach?  An undeniable passion to share the music they love with a populous yearning for real rock music, real lyrics, and real passion.
				</div>
			</div>
		</div>
		<div class='lts-mobile-footer'>Powered by: Muddy Water Software</div>
	</div>
HTML;

	echo($html);
?>