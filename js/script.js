
new Swiper('.slider-page__slider', {
	navigation: {
		nextEl: '.slider-page__arrow--right',
		prevEl: '.slider-page__arrow--left',
	},

	autoHeight: true,
	spaceBetween: 30,

	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 500,
	slidesPerView: 1,

});
let input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "ua",
});
