import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-2 flex flex-col space-x-4 mx-4 md:flex-row md:justify-between cursor-default">
			<p className="my-2 text-center">
				Copyright © <span className="text-destacable">El Gran Chopp</span> {new Date().getFullYear()}. 
                Todos los derechos reservados.
			</p>
			<p className="my-2 text-center">
				Sitio web hecho por 
				<span className="ml-1">
					<Link
						href="https://www.linkedin.com/in/artifexted/"
						className="text-destacable"
					>
						Artifexted
					</Link>
				</span>
			</p>
		</footer>
	);
}
