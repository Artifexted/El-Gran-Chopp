import PhotoList from "./PhotoList";
import Wrapper from "./Wrapper";

const Gallery = () => {
	return (
		<>
			<h1 className="text-center font-black text-destacable mb-4 text-2xl">
				Fotos
			</h1>

			<Wrapper>
				<PhotoList />
			</Wrapper>
		</>
	);
};

export default Gallery;
