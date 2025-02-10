/* eslint-disable @next/next/no-img-element */
import { ImagesConfig } from "./photos.config";

const PhotoList = () => {
	return ImagesConfig.map((photo, index) => (
		<img key={index} src={`../fotos/${photo}`} alt={`Imagen de ${photo}`} className="photoChopp mb-4" />
	));
};

export default PhotoList;
