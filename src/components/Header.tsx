"use client";
import Link from "next/link";

export default function Header() {
	return (
		<header className="pt-4 flex flex-col items-center lg:mb-4">
			<img src="/new/logo.png" alt="Logo Chopp" width={116} height={116} />
			{/* <img src="/logo.png" alt="Logo Chopp" width={116} height={116} /> */}

			<nav className="flex space-x-2 sm:space-x-6 py-4 font-bold mx-2">
				<Link
					href="#"
					className="transition delay-3 rounded-full px-1 cursor-not-allowed"
					aria-disabled="true"
					onClick={(e) => e.preventDefault()}
				>
					INICIO
				</Link>
				<div className="relative group">
					<Link
						href="#"
						className="transition delay-3 rounded-full px-1 opacity-60 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100"
					>
						CARTA
					</Link>
					<div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48 z-10">
						<Link
							href="./carta-salon.pdf"
							className="block px-4 py-2 text-black hover:bg-gray-100"
						>
							SALÓN
						</Link>
						<Link
							href="./carta-delivery.pdf"
							className="block px-4 py-2 text-black hover:bg-gray-100"
						>
							DELIVERY
						</Link>
					</div>
				</div>
				<Link
					href="./sucursales"
					className="transition delay-3 rounded-full px-1 opacity-60 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100"
				>
					SUCURSALES
				</Link>
			</nav>
		</header>
	);
}
