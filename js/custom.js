(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinyslier = function() {

		

		var el = document.querySelectorAll('.wide-slider-testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if ( destinationSlider.length > 0 ) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: "#destination-controls",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			})
		}
	}
	tinyslier();


	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();

	})();

$( document ).ready(function() {
    jQuery(".banner-slider").slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplaySpeed: 1000,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		slidesToShow: 1,
		accessibility: false,
	});

	$('[data-fancybox]').fancybox({
		// Options will go here
		buttons : [
		  'close'
		],
		wheel : false,
		transitionEffect: "slide",
		 // thumbs          : false,
		// hash            : false,
		loop            : true,
		// keyboard        : true,
		toolbar         : false,
		// animationEffect : false,
		// arrows          : true,
		clickContent    : false
	});

	jQuery(".client-slider").slick({
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: true,
		autoplay: true,
		slidesToScroll: 1,
		accessibility: false,
		mobileFirst:true,
		variableWidth: true,
		cssEase: 'linear',
		autoplaySpeed: 0,
		speed: 2500,
		pauseOnHover: true,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 5,
			  centerPadding: '100px',
			}
		  },
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  centerPadding: '30px',
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  centerPadding: '30px',
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  centerPadding: '10px',
			}
		  },
		  {
			breakpoint: 250,
			settings: {
			  slidesToShow: 1,
			  centerPadding: '0px',
			}
		  }
  
		]
	});

	var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    jQuery('ul li a').each(function() {
      if (this.href === path) {
        jQuery(this).parent().addClass('active');
      }
    });
});