$(document).ready(function(){
	$('#active_owl_carousel').owlCarousel({
		margin:40,
		dotsContainer:'.carousel_dots',
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$('.js-star-rating').makeStars();
	
});