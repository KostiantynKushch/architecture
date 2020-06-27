; (function () {
	"use strict";
	const header = document.querySelector('.ba-header');

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 300) {
			header.classList.add('scrolls');
		} else if (window.scrollY == 0) {
			if (header.classList.contains('scrolls')) {
				header.classList.remove('scrolls');
			}

		}
	});


	const heroSlider = $('.ba-hero__slider');

	heroSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		dots: true,
		appendDots: '.ba-slick-dots',
		arrows: false,
		speed: 500,
		// fade: true,
		cssEase: 'linear'
	});

	const newsSlider = $('.ba-news__slider');

	newsSlider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.ba-news__prev',
		nextArrow: '.ba-news__next',
		appendDots: '.ba-news__slick-dots',
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});
})();


