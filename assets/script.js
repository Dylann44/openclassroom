const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

arrowLeft.addEventListener('click', () => changeSlide(-1));
arrowRight.addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
	currentSlideIndex += direction;

	if (currentSlideIndex < 0) {
		currentSlideIndex = 3;
	} else if (currentSlideIndex > 3) {
		currentSlideIndex = 0;
	}

	const { image, tagLine } = slides[currentSlideIndex];
	updateBannerContent(image, tagLine);
	updateDots();
}

function updateBannerContent(image, tagLine) {
	document.querySelector('.banner-img').src = `./assets/images/slideshow/${image}`;
	document.querySelector('#banner p').innerHTML = tagLine;
}
function updateDots() {
	dotsContainer.innerHTML = '';

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.className = 'dot';

		if (i == currentSlideIndex) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	}
}
updateDots();