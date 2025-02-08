import About from "@/components/About";
import InstaPosts from "@/components/InstaPosts";
import SwiperComponent from "@/components/SwiperComponent";

export default function Home() {
	return (
		<>
			<SwiperComponent />

			<About />

			<InstaPosts />
		</>
	);
}
