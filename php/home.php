<?php
//build html
	$html = <<<HTML
			<div class='lts-news'> 
<a class="twitter-timeline" href="https://twitter.com/lightthesunatx" data-widget-id="368880002185441280">Tweets by @lightthesunatx</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
 			</div>
	
HTML;

	echo($html);
?>
