export default function Home() {
	return (
		<div className="lg:flex lg:justify-evenly lg:flex-wrap">
			<section className="mb-6 lg:w-96 mx-8">
				<div className="relative">
					<img
						src="./friends-drinking-min.jpg"
						alt="Clientes disfrutando sus cervezas en El Gran Chopp"
						className="w-full h-40 object-cover brightness-[.65] saturate-[1.35]"
					/>

					<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-destacable/70 rounded-lg">
						<h2 className="text-black font-black">El Gran Chopp</h2>
					</div>
				</div>

				<p className="mx-4 mt-2 lg:text-center">
					El Gran Chopp es una experiencia única que combina buen sabor, buen
					ambiente y diversión para todos. Desde su variada oferta gastronómica
					hasta un espacio pensado para los más pequeños, con un kinder, cine y
					áreas de juegos, El Gran Chopp se convierte en un destino ideal para
					familias.
				</p>
			</section>

			<section className="mb-6 lg:w-96 mx-8">
				<div className="relative">
					<img
						src="./concert.png"
						alt="Clientes disfrutando un show en Pellegrini Concert"
						className="w-full h-40 object-cover brightness-[.65] saturate-[1.15]"
					/>

					<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-destacable/70 rounded-lg">
						<h2 className="text-black font-black">Pellegrini Concert</h2>
					</div>
				</div>

				<p className="mx-4 mt-2 lg:text-center">
					Viví la magia de los shows en vivo en nuestro primer piso, un lugar
					pensado para hacer de cada evento una experiencia única. Música en
					vivo, luces espectaculares y un ambiente inigualable que te hará
					sentir parte de la energía del momento. ¡No te lo podés perder!
				</p>
			</section>

			<section className="mb-6 lg:w-96 mx-8">
				<div className="relative">
					<img
						src="./cine-kinder-min.png"
						alt="Sector kinder para los niños que asistan a El Gran Chopp"
						className="w-full h-40 object-cover brightness-[.65] saturate-[1.15]"
					/>

					<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-destacable/70 rounded-lg">
						<h2 className="text-black font-black">Kinder</h2>
					</div>
				</div>

				<p className="mx-4 mt-2 lg:text-center">
					¡El lugar ideal para que los chicos se diviertan mientras vos comés
					tranquilo! Cine, juegos didácticos y los clásicos juegos de arcade,
					todo en un mismo espacio. ¡Veni a disfrutar con tu familia de cada
					espacio de esta maravillosa experiencia!
				</p>
			</section>
		</div>
	);
}
