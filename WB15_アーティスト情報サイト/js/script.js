$(document).ready(function() {
   

	// Sticky Nav
	$('.js-section-main').waypoint(function(direction) {
		if(direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  		offset: '60px;'
	});

	// Scroll on button
	$('.js-scroll-to-biog').click(function(){
		$('html,body').animate({scrollTop: $('.js-section-biog').offset().top},1000);
	});

	$('.js-scroll-to-start').click(function(){
		$('html,body').animate({scrollTop: $('.js-section-main').offset().top},1000);
	});

	// Navigation scroll
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		        	$('html,body').animate({
		        	scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
	    	}
	  	});
	});


	// Discs
	$('.section-discography .discnav a').on('click', function(){
		// Current class assigniment
		$('.section-discography .discnav li.current').removeClass('current');
		$(this).parent().addClass('current');

		// Set heading text
		$('.section-discography h3#heading').text($(this).text());

		// Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');

		// Remove hidden class if 'all-projects' is selected
		if(category == 'all-discography'){
			$('.section-discography .container ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('.section-discography .container ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop link behaviour
		return false;
	});

	// Mouseenter Overlay Effect
	$('.section-discography .container ul#gallery li').on('mouseenter',function(){
		// Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if(desc == null){
			desc = 'Click To Enlarge';
		}

		if(title == null){
			title = '';
		}

		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		// Fade in overlay
		overlay.fadeIn(800);
	});

	// Mouseleave Overlay Effect
	$('.section-discography .container ul#gallery li').on('mouseleave',function(){
		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});

});