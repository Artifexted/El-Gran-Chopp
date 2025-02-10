import PhotoList from "./PhotoList";
import Wrapper from "./Wrapper";

const Gallery = () => {
	return (
		<>
			<h2 className="text-center text-destacable">Fotos</h2>

			<Wrapper>
				<PhotoList />
			</Wrapper>
		</>
	);
};

export default Gallery;
