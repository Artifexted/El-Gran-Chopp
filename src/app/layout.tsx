import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "El Gran Chopp",
	description:
		"Bienvenidos a El Gran Chopp. El mejor lugar, para vivir la mejor experiencia.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es">
			<body className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-grow">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
