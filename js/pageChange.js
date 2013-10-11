var isMobile = false; 
//tests to see if the user is mobile or not
if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 || (window.innerWidth <= 800 && window.innerHeight <= 600)
){
	 isMobile = true;
};

if(isMobile){
	$('.lts').html('<div>here</div>');
	$.ajax({
		  type: "POST",
		  url: "php/mobileHome.php"
		}).done(function( msg ) {
		  $('.lts').html(msg);

		  $('.lts-mobile-menu li').click(function (event) {	
				//change selected tab
			    var selected = $(".lts-mobile-menu").find('.lts-mobile-activeTab').get(0);
			    $(selected).removeClass('lts-mobile-activeTab');
			    $(this).addClass('lts-mobile-activeTab');
				
				switch($(this).text().toLowerCase()){
					case 'light the sun':
						$.ajax({
						  type: "POST",
						  url: "php/bio.php"
						}).done(function( msg ) {
						  $('.lts-mobile-body').html(msg);
						});
					break;
					case 'gigs':
						$.ajax({
						  type: "POST",
						  url: "php/gigs.php"
						}).done(function( msg ) {
						  $('.lts-mobile-body').html(msg);
						});
					break;
					case 'music':
						$.ajax({
						  type: "POST",
						  url: "php/music.php"
						}).done(function( msg ) {
						  $('.lts-mobile-body').html(msg);
						});
					break;
					case 'social':
						$.ajax({
						  type: "POST",
						  url: "php/social.php"
						}).done(function( msg ) {
						  $('.lts-mobile-body').html(msg);
						});
					break;
					default:
						$.ajax({
						  type: "POST",
						  url: "php/broken.php"
						}).done(function( msg ) {
						  $('.lts-mobile-body').html(msg);
						});	
				}
				
			});
		});
}



$('.lts-header ul li').click(function (event) {	
	//change selected tab
    var selected = $(".lts-header ul").find('.activeTab').get(0);
    $(selected).removeClass('activeTab');
    $(this).addClass('activeTab');
	
	switch($(this).text().toLowerCase()){
		case 'light the sun':
		$.ajax({
		  type: "POST",
		  url: "php/home.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		case 'gigs':
		$.ajax({
		  type: "POST",
		  url: "php/gigs.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		case 'music':
		$.ajax({
		  type: "POST",
		  url: "php/music.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		case 'gallery':
		$.ajax({
		  type: "POST",
		  url: "php/galary.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		case 'contact':
		$.ajax({
		  type: "POST",
		  url: "php/contact.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		case 'bio':
		$.ajax({
		  type: "POST",
		  url: "php/bio.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});
		break;
		default:
		$.ajax({
		  type: "POST",
		  url: "php/broken.php"
		}).done(function( msg ) {
		  $('.lts-body').html(msg);
		});	
	}
	
});

function sendMail() {
	var msg = 'Name: '+$('.contactName').val();
	msg += ';Email: '+$('.contactEmail').val();
	msg += ';Note: '+$('.contactNote').val();
	
    var link = "mailto:lightthesunmusic@gmail.com"
			+ "?cc="
             + "&subject=" + escape($('.contactSubject').val())
             + "&body=" + escape(msg);
    window.location.href = link;
}