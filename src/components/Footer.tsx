import FbIcon from "@/svg/FbIcon";
import InstaIcon from "@/svg/InstaIcon";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-2 flex flex-col mx-4 md:flex-row md:justify-between cursor-default">
			<p className="my-2 text-center max-lg:mx-auto lg:w-[25%] lg:text-left">
				Copyright © <span className="text-destacable">El Gran Chopp</span> {new Date().getFullYear()}. 
                Todos los derechos reservados.
			</p>
			<div className="flex space-x-2 max-lg:mx-auto lg:w-[50%] lg:justify-center">
				<Link href="https://www.instagram.com/elgranchopp" target="_blank" className="hover:scale-110">
					<InstaIcon width={32} height={32} />
				</Link>
				<Link href="https://www.facebook.com/ElGranChopp" target="_blank" className="hover:scale-110">
					<FbIcon width={32} height={32} />
				</Link>
			</div>
			<p className="my-2 text-center max-lg:mx-auto lg:w-[25%] lg:text-right">
				Sitio web hecho por 
				<span className="ml-1">
					<Link
						href="https://www.agustinluceroweb.com/"
						className="text-destacable"
						target="_blank"
					>
						Artifexted
					</Link>
				</span>
			</p>
		</footer>
	);
}
