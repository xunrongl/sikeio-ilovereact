window.onload = function() {
	animateLogo();
	animateRobot();
	updateSliderControl();
	addSmoothScrolling();
}

window.onscroll = function() {
	updateSliderControl();
}

function animateLogo() {
	TweenMax.fromTo(".react-logo", 2, {
		//from
		css: {
			//use css3 transform
			y: "-30px"
		}
	}, {
		//to
		css: {
			y: "30px"
		},

		//repeat forever
		repeat: -1,

		//restart animation option
		yoyo: true,

		//easing type
		ease: Power2.easeInOut
	})

}

function animateRobot() {
	var t = new TimelineMax({
		yoyo: true,
		repeat: -1
	});
	t.to("#android-robot", 1, {rotation: "-50deg"})
}

function updateSliderControl() {
	//get all the slider link
	var links = document.querySelectorAll("#slider-control a");

	for(var i = 0; i < links.length; i++) {
		var link = links[i];

		var section = document.querySelector(link.getAttribute("href"));
		var sectionTop = section.offsetTop;
		var sectionBottom = sectionTop + section.clientHeight;

		//check if window.scrollY in this part or not
		if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			link.className = "active";
		} else {
			link.className = "";
		}
	}
}

function scrollToElement(element) {
	var topOfElement = element.offsetTop;

	TweenMax.to(window, 1, {
		scrollTo: {
			y: topOfElement,
		},

		ease: Power2.easeInOut
	});
}

function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a");

	for(var i = 0; i < links.length; i++) {
		var link = links[i];

		link.addEventListener("click", function(event) {
			
			event.preventDefault();
			var href = this.getAttribute("href");
			var section = document.querySelector(href);
			scrollToElement(section);
			
		})
	}
}