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