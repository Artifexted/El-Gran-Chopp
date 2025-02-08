/* eslint-disable @next/next/no-img-element */
"use client";
import "./Swiper.styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export const SwiperCard = ({ image }: { image: IImage }) => {
	return (
		<div className="swiper-slide h-full">
			<div className="overlay"></div>
			<div className="h-full">
				<img
					className="object-cover object-center h-44 lg:h-full w-full max-w-none"
					src={image.name}
					alt="imagen"
				/>
			</div>
		</div>
	);
};

interface IImage {
	name: string;
}

export const images: IImage[] = [
	{ name: "/new/destacado/promo1-min.jpg" },
	{ name: "/new/destacado/promo2-min.jpg" },
	{ name: "/new/destacado/promo3-min.jpg" },
	{ name: "/new/destacado/promo4-min.jpg" },
	{ name: "/new/destacado/promo5-min.jpg" },
	{ name: "/new/destacado/promo6-min.jpg" },
];

const SwiperComponent = () => {
	useEffect(() => {
		const swiper = new Swiper(".swiper-container", {
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			modules: [Pagination, Navigation, Autoplay],
		});
		return () => swiper.destroy();
	}, []);

	return (
		<div className="swiper-container overflow-hidden relative h-full mx-auto mb-4 lg:mb-8">
			<div className="swiper-wrapper h-full">
				{images.map((imagen, id) => (
					<SwiperCard key={id} image={imagen} />
				))}
			</div>

			<div className="swiper-button-next"></div>
			<div className="swiper-button-prev"></div>

			<div className="swiper-pagination"></div>
		</div>
	);
};

export default SwiperComponent;
