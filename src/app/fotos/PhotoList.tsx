/* eslint-disable @next/next/no-img-element */
import { ImagesConfig } from "./photos.config";

const PhotoList = () => {
	return ImagesConfig.map((photo, index) => (
		<img key={index} src={`../fotos/${photo}`} alt={`Imagen de ${photo}`} className="w-full h-auto object-cover photoChopp mb-4 max-h-[500px]" />
	));
};

export default PhotoList;
