$(document).ready(function() {
	var speed = 500;
	var autoswitch = true;
	var autoswitch_speed = 1500;

	$('.main_image').first().addClass('active');

	$('.main_image').hide();
	$('.active').show();
	

	if(autoswitch == true) {
		setInterval(function() {
			nextSlide();
		}, autoswitch_speed);
	};
	

	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':last-child')) {
				$('.main_image').first().addClass('active');

			} else {
				$('.oldActive').next().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.main_image').fadeOut(speed);
			$('.active').fadeIn(speed);
	}


	var action = "click";
	var speed2 = "500";

	$('li.q').on(action ,function(){
		$(this).next()
			.slideToggle(speed2)
				.siblings('li.a')
					.slideUp();		
	});


});