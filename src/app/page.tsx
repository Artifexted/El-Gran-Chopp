import About from "@/components/About";
import InstaPosts from "@/components/InstaPosts";
import SwiperComponent from "@/components/SwiperComponent";

export default function Home() {
	return (
		<>
			<h1 className="text-center font-black text-destacable mb-2 lg:mb-4 text-2xl">
				El Gran Chopp
			</h1>

			<SwiperComponent />

			<About />

			<InstaPosts />
		</>
	);
}
