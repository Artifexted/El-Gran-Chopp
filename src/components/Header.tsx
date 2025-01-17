/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
	const [currentPath, setCurrentPath] = useState<string>("");

	useEffect(() => {
		const path = window.location.pathname
			.replace("/new", "")
			.replace(/\/$/, "");
		setCurrentPath(path);
	}, []);

	const isActive = (path: string) => {
		console.log(currentPath + " | " + path);
		console.log(currentPath === path);
		return currentPath === path;
	};

	return (
		<header className="pt-4 flex flex-col items-center lg:mb-4">
			<img src="/new/logo.png" alt="Logo Chopp" width={116} height={116} />

			<nav className="flex space-x-2 sm:space-x-6 py-4 font-bold mx-2">
				<Link
					id="inicio-link"
					href="/"
					className={`transition delay-3 rounded-full px-1 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100 ${
						isActive("/") ? "cursor-not-allowed opacity-60" : ""
					}`}
				>
					INICIO
				</Link>

				<div className="relative group">
					<Link
						href="#"
						className="transition delay-3 rounded-full px-1 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100"
					>
						CARTA
					</Link>
					<div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48 z-10">
						<Link
							href="/carta-salon.pdf"
							className="block px-4 py-2 text-black hover:bg-gray-100"
							target="_blank"
						>
							SALÓN
						</Link>
						<Link
							href="/carta-delivery.pdf"
							className="block px-4 py-2 text-black hover:bg-gray-100"
							target="_blank"
						>
							DELIVERY
						</Link>
					</div>
				</div>

				<Link
					id="sucursales-link"
					href="/sucursales"
					className={`transition delay-3 rounded-full px-1 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100 ${
						isActive("/sucursales") ? "cursor-not-allowed opacity-60" : ""
					}`}
				>
					SUCURSALES
				</Link>
			</nav>
		</header>
	);
}
