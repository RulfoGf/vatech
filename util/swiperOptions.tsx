import { Autoplay, Navigation, Pagination } from "swiper/modules"

interface SwiperConfig {
	modules: any[] // Explicit Swiper modules
	spaceBetween: number
	slidesPerView: number | "auto"
	slidesPerGroup: number
	loop: boolean
	speed?: number
	centeredSlides?: boolean
	roundLengths?: boolean // Added for roundLengths
	initialSlide?: number // Added for initialSlide
	paginationClickable?: boolean
	slideToClickedSlide?: boolean
	watchOverflow?: boolean
	navigation?: {
		nextEl: string
		prevEl: string
	}
	autoplay?: {
		enabled?: boolean
		delay: number
		waitForTransition?: boolean
		disableOnInteraction?: boolean
		stopOnLastSlide?: boolean
		reverseDirection?: boolean
	}
	pagination?: {
		el: string
		clickable: boolean
	}
	breakpoints?: {
		[key: number]: {
			slidesPerView: number | "auto"
			slidesPerGroup?: number
			spaceBetween?: number
		}
	}
}


export const sliderGroup3: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 400000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-1',
		clickable: true,
		// renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (menu[index]) + '</span>';
		// },
	},
	navigation: {
		nextEl: '.swiper-button-next-style-1',
		prevEl: '.swiper-button-prev-style-1',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}
export const sliderGroup4: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-2',
		clickable: true,
		// renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (menu[index]) + '</span>';
		// },
	},
	navigation: {
		nextEl: '.swiper-button-next-style-6',
		prevEl: '.swiper-button-prev-style-6',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}
export const sliderGroup7: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 7,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 400000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 7,
		},
		992: {
			slidesPerView: 6,
		},
		768: {
			slidesPerView: 5,
		},
		576: {
			slidesPerView: 4,
		},
		476: {
			slidesPerView: 3,
		},
		376: {
			slidesPerView: 3,
		},
		0: {
			slidesPerView: 2,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-2',
		clickable: true,
		// renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (menu[index]) + '</span>';
		// },
	},
	navigation: {
		nextEl: '.swiper-button-next-style-6',
		prevEl: '.swiper-button-prev-style-6',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}
export const sliderGroup2: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 1000000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		676: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-2',
		clickable: true,
		// renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (menu[index]) + '</span>';
		// },
	},
	navigation: {
		nextEl: '.swiper-button-next-style-6',
		prevEl: '.swiper-button-prev-style-6',
	}
}
export const swiperGroupAuto: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: "auto",
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: "auto",
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next-style-2',
		prevEl: '.swiper-button-prev-style-2',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left + 15
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}
export const sliderGroup1: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 40000,
	},
	navigation: {
		nextEl: '.swiper-button-next-style-1',
		prevEl: '.swiper-button-prev-style-1',
	},
	pagination: {
		el: '.swiper-pagination-style-1',
		clickable: true,
	},
}
export const swiperGroupSlideText: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	spaceBetween: 40,
	slidesPerView: "auto",
	slidesPerGroup: 1,
	loop: true,
	speed: 50000,
	centeredSlides: true,
	// allowTouchMove: false,
	// effect: "slide",
	navigation: {
		nextEl: ".swiper-button-next-animate",
		prevEl: ".swiper-button-prev-animate",
		// clickable: false
	},
	// autoplay: {
	// 	enabled: 1,
	// 	delay: 1,
	// 	waitForTransition: 1,
	// 	disableOnInteraction: 0,
	// 	stopOnLastSlide: 1,
	// 	reverseDirection: 1
	// },
	breakpoints: {
		1199: {
			slidesPerView: "auto"
		},
		600: {
			slidesPerView: "auto"
		},
		575: {
			slidesPerView: 1
		},
		350: {
			slidesPerView: 1
		}
	}
}
export const swiperCenterSlide: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	spaceBetween: 60,
	slidesPerView: 3,
	slidesPerGroup: 1,
	centeredSlides: true,
	roundLengths: false,
	initialSlide: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next-center",
		prevEl: ".swiper-button-prev-center"
	},
	breakpoints: {
		1199: {
			slidesPerView: 3
		},
		600: {
			slidesPerView: 2
		},
		575: {
			slidesPerView: 1
		},
		350: {
			slidesPerView: 1
		}
	}
}
export const sliderGroup3Tab: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 400000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-tab',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next-style-tab',
		prevEl: '.swiper-button-prev-style-tab',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}
export const sliderGroup4Tab: SwiperConfig = {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination-style-tab',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next-style-tab',
		prevEl: '.swiper-button-prev-style-tab',
	},
	// on: {
	// 	afterInit: function () {
	// 		// set padding left slide
	// 		var leftPadding = 0
	// 		var swipperRoot = $('.swipper-root')
	// 		if (swipperRoot.length > 0) {
	// 			leftPadding = swipperRoot.offset().left
	// 		}
	// 		if ($('.box-swiper-padding').length > 0) {
	// 			$('.box-swiper-padding').css('padding-left', leftPadding + 'px')
	// 		}
	// 	},
	// },
}