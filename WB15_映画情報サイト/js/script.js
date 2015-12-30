$(document).ready(function() {
  

	// Discography
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





	// POPUP
	$(document).ready(function() {
	  	var link = '.thumbnail',
	      	modal = $('#modal'),
	      	overlay = $('#overlay');
	      
	  	$('#overlay, .modal-close').on('click', closeBox);

		function openBox() {
		    if( $(modal).css('display') === 'block' ) {
		      	console.log('already opened');
		      	closeBox();
		    }
		    $(modal).add($(overlay)).fadeIn(300);
		}

		function closeBox() {
		    $(modal).add($(overlay)).fadeOut(300);
		    $('.modal_content').empty();
		}
		  
		function setSize() {
		    var w = $(modal).width(),
		        h = $(modal).height();
		    console.log('w: '+ w + ' h: '+ h)
		    $(modal).css({'marginTop': '-' + h/2 + 'px', 'marginLeft': '-' + w/2 + 'px'});
		}

		$(window).on('resize', setSize );
		  
		$(link).on('click', function(e) {
		    e.preventDefault();
		    var content = $(this).siblings('.content').clone();
		        
		    openBox();
		    $('.modal_content').append( content );
		    setSize();
		    
		    setTimeout( function() {
		      setSize();
		    }, 20);
		});

	});



	
});