
$(document).ready(function () {

	// Sticky Navigation bar when reaching the 'about' section
	$('.js--about-section').waypoint(function (direction) {
		if (direction === "down") {
			$('nav').addClass('js-sticky-nav');
		} else {
			$('nav').removeClass('js-sticky-nav');
		}
	});

	// Smooth scroll from CTA in header to the contact form
	$('.js--scroll-to-contact').click(function () {
		$('html, body').animate({ scrollTop: $('.js--contact').offset().top }, 1000)
	});

	// Smooth scroll for top navigation links
	$('#mainTopNav a').on('click', function (e) {
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({ scrollTop: $(hash).offset().top }, 1000, function () {
				window.location.hash = hash;
			});
		}
	});

	// UI animation activated on scroll reveal
		// 01
		$('.js--about-section').waypoint(function (direction) {
			$('.js--about-box').addClass('animate__animated animate__fadeIn');
		},
			{ offset: '70%' }
		);

		// 02
		$('.js--services-section').waypoint(function (direction) {
			$('.js--service-box').addClass('animate__animated animate__zoomIn');
		},
			{ offset: '70%' }
		);

		// 03
		$('.js--packages-section').waypoint(function (direction) {
			$('.js--enterprise').addClass('animate__animated animate__pulse');
		});


});
