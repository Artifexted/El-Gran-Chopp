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
					className="object-cover object-center h-36 lg:h-full w-full max-w-none"
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
	{
		name: "https://http2.mlstatic.com/D_NQ_998128-MLA81581052107_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_654677-MLA81581630859_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_654436-MLA81362111193_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_747324-MLA81312030704_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_698717-MLA81312613804_122024-OO.webp",
	},
	{
		name: "https://http2.mlstatic.com/D_NQ_682023-MLA81581631861_122024-OO.webp",
	},
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
		<div className="swiper-container overflow-hidden relative h-full lg:w-[70%] mx-auto mb-4 lg:mb-8">
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
