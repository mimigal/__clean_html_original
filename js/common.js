$(document).ready(function() {
	$(".section_header").animated("fadeInUp", "fadeOutDown");	

	$(".popup").magnificPopup({type:"image"});

	$('.owl-carousel').owlCarousel();

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_mnu ul a").mPageScroll2id();
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");	
	$(".animation1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation2").animated("flipInX", "flipOutX");
	$(".animation3").animated("fadeInRight", "fadeOutRight");
});

	
