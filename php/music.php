<?php
//build html
	$html = <<<HTML
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F9051307"></iframe>
		
		<div class='lts-music'>
			<div>You can purchase the album at: </div>
			<div>
				<ul class='lts-menu-buy'>
					<li><a href='http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-music&field-keywords=light+the+sun+ignite' target="_blank"><div class='amazon-icon'></div></a></li>
					<li><a href='https://play.google.com/store/search?q=light+the+sun+ignite' target="_blank"><div class='googleplay-icon'></div></a></li>
					<li><a href='https://itunes.apple.com/us/album/ignite-ep/id672055928' target="_blank"><div class='itunes-icon'></div></a></li>
				</ul>
			</div>
			<div style='clear: both;'>The album can also be found on: </div>
			<div>
				<ul class='lts-menu-buy' style='clear: both;'>
					<li><a href='https://play.spotify.com/album/5ASGjTlaDMwL27GMoUYOJx' target="_blank"><div class='spotify-icon'></div></a></li>
				</ul>
			</div>
		<div>
 	
HTML;

	echo($html);
?>
