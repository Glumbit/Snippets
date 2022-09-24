const images = document.querySelectorAll('._load');

const options = {
	root: null,
	rootMargin: '0px',
	thereshold: 0.1
}

function handleImg(myImg, observer) {
	myImg.forEach(myImgSingle => {

		if (myImgSingle.intersectionRatio > 0) {
			loadImage(myImgSingle.target);
		}
		else {
			unload(myImgSingle.target);
		}
	})
}

function loadImage(image) {
	image.src = image.getAttribute('data');
	image.style.transform = null;
	if (image.closest('.about__img')) {
		image.closest('.about__img').style.transform = null;
	}
	if (image.className == "aside__item _left _load") {
		image.style.transform = "translate(50%, 0) rotate(90deg)";
	}
	if (image.className == "aside__item _right _load") {
		image.style.transform = "translate(-50%, 0) rotate(90deg)";
	}
}

function unload(image) {
	if (image.closest('.about__img')) {
		image.closest('.about__img').style.transform = "translate(0, 100%)";
		document.querySelector('.about__text').style.transform = "translate(0, 100%)";
	}
	if (image.className == "aside__item _left _load") {
		image.style.transform = "translate(-25%, 50%) rotate(0)";
	}
	if (image.className == "aside__item _right _load") {
		image.style.transform = "translate(-25%, 50%) rotate(0)";
	}
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
	observer.observe(img);
})