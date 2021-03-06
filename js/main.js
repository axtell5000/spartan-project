$(document).ready(function() {
	// Click event on hamburger icon and closing it
	$('.nav-icon').click(function () {  
		$('.full-nav').addClass('open');
	});

	$('.nav-close').click(function () {  
		$('.full-nav').removeClass('open');
	});

	// Calculating when to sticky nav
	$(window).scroll(function() {
		const toTop = $(window).scrollTop();
		if (toTop > 100) {
			$('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
		}
	});

	// For bxslider
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		minSlides: 1,
		maxSlides: 1,
		speed: 1200
	});	

});