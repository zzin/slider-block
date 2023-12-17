/**
 * Swiper dependencies
 *
 * @see https://swiperjs.com/get-started
 */
import { Swiper } from 'swiper'
import {
	Autoplay,
	Keyboard,
	Navigation,
	Pagination,
	EffectFade,
} from 'swiper/modules'

/**
 * Initialize the slider.
 *
 * @param {Element} container HTMLElement.
 * @param {Object}  options   Slider parameters.
 *
 * @return {Object} Returns initialized slider instance.
 *
 * @see https://swiperjs.com/swiper-api#parameters
 */
export function SwiperInit(container, options = {}) {
	const parameters = {
		autoplay: options?.autoplay ?? true,
		centeredSlides: options?.centerSlides ?? false,
		loop: options?.loop ?? false,
		createElements: true,
		grabCursor: options?.grabCursor ?? true,
		initialSlide: 0,
		keyboard: false,
		modules: [Autoplay, Keyboard, Navigation, Pagination, EffectFade],
		navigation: options?.navigation ?? false,
		pagination: options?.pagination ?? false,
		simulateTouch: options?.simulateTouch ?? true,
	}
	if (options?.autoplay === true && options?.delay) {
		parameters.autoplay = {
			delay: options?.delay,
		}
	}
	if (options?.effect === 'fade') {
		parameters.effect = 'fade'
	}

	return new Swiper(container, parameters)
}
