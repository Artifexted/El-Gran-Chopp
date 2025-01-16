"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="pt-4 flex flex-col items-center lg:mb-4">
            <img src="./logo.png" alt="Logo Chopp" width={116} height={116} />

            <nav className="flex space-x-2 sm:space-x-6 py-4 font-bold mx-2">
                <Link href="#" className="transition delay-3 rounded-full px-1 cursor-not-allowed" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                    INICIO
                </Link>
                <Link href="./carta-salon.pdf" className="transition delay-3 rounded-full px-1 opacity-60 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100">
                    CARTA
                </Link>
                <Link href="https://receptivoselgranchopp.com.ar" className="transition delay-3 rounded-full px-1 opacity-60 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100">
                    RECEPTIVOS
                </Link>
                <Link href="./carta-delivery.pdf" className="transition delay-3 rounded-full px-1 opacity-60 hover:scale-110 hover:bg-destacable hover:text-black hover:opacity-100">
                    DELIVERY
                </Link>
            </nav>
        </header>
    );
}
