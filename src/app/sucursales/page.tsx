import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* eslint-disable @next/next/no-img-element */
export default function Sucursales() {
	return (
		<>
			<h1 className="text-center font-black text-destacable mb-4 text-2xl">
				Sucursales
			</h1>

			<div className="mx-auto px-4 lg:px-0 flex justify-center flex-wrap">
				<section className="mb-8 transition-width duration-200 lg:w-96 lg:mx-8 lg:hover:scale-110 group rounded-md lg:hover:bg-[#1c1c1c] lg:hover:shadow-lg lg:hover:shadow-black/35 pb-6 text-center">
					<div className="relative">
						<img
							src="../sucursales/suc_pellegrini-min.jpg"
							alt="El Gran Chopp Av. Pellegrini 1590, Rosario"
							className="w-full h-40 object-cover brightness-[.65] saturate-[1.15] lg:rounded-md group-hover:brightness-[.8]"
						/>

						<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-destacable/70 rounded-lg">
							<h2 className="text-black font-black">Pellegrini</h2>
						</div>
					</div>

					<p className="mx-4 mt-2 lg:text-center">
						El tradicional bar en la esquina de Av. Pellegrini 1590. Ideal para
						ir a comer en familia, amigos o en pareja. Con una amplia carta de
						bebidas y platos para todos los gustos.
					</p>

					<div className="flex space-x-2 justify-center my-4">
						<a href="tel:+5493416880560" target="_blank">
							<div className="bg-destacable p-2 rounded-lg text-black w-fit flex">
								<FontAwesomeIcon icon={faPhone} className="mr-1 w-4" />
								3416880560
							</div>
						</a>
						<a href="https://wa.me/5493416880560" target="_blank">
							<div className="bg-destacable p-2 rounded-lg text-black w-fit flex">
								<FontAwesomeIcon icon={faWhatsapp} className="mr-1 w-4" />
								3416880560
							</div>
						</a>
					</div>

					<a
						href="https://maps.app.goo.gl/Yeo1Gjke4QeJLhMH7"
						target="_blank"
						className="text-destacable"
					>
						<div className="flex justify-center">
							<FontAwesomeIcon icon={faLocationDot} className="mr-1 w-4" />
							Av. Pellegrini 1590, Rosario
						</div>
					</a>
				</section>

				<section className="mb-8 transition-width duration-200 lg:w-96 lg:mx-8 lg:hover:scale-110 group rounded-md lg:hover:bg-[#1c1c1c] lg:hover:shadow-lg lg:hover:shadow-black/35 pb-6 text-center">
					<div className="relative">
						<img
							src="../sucursales/suc_laprida-min.jpg"
							alt="El Gran Chopp Laprida 601, Rosario"
							className="w-full h-40 object-cover brightness-[.65] saturate-[1.15] lg:rounded-md group-hover:brightness-[.8]"
						/>

						<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-destacable/70 rounded-lg">
							<h2 className="text-black font-black">Laprida</h2>
						</div>
					</div>

					<p className="mx-4 mt-2 lg:text-center">
						Sucursal ubicada en Laprida 601, el centro de Rosario. En esta
						sucursal podrás pedir para llevar y disfrutar la delicia de El Gran
						Chopp a donde sea que vayas.
					</p>

					<div className="flex space-x-2 justify-center my-4">
						<a href="tel:+5493415947777" target="_blank">
							<div className="bg-destacable p-2 rounded-lg text-black w-fit flex">
								<FontAwesomeIcon icon={faPhone} className="mr-1 w-4" />
								3415947777
							</div>
						</a>
						<a href="https://wa.me/5493415947777" target="_blank">
							<div className="bg-destacable p-2 rounded-lg text-black w-fit flex">
								<FontAwesomeIcon icon={faWhatsapp} className="mr-1 w-4" />
								3415947777
							</div>
						</a>
					</div>

					<a
						href="https://maps.app.goo.gl/yTWUDykaF2axsMg28"
						target="_blank"
						className="text-destacable"
					>
						<div className="flex justify-center">
							<FontAwesomeIcon icon={faLocationDot} className="mr-1 w-4" />
							Laprida 601, Rosario
						</div>
					</a>
				</section>
			</div>
		</>
	);
}
