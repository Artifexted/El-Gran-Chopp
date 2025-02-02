/* eslint-disable @next/next/no-img-element */
import { InstaPost } from "@/interfaces/InstagramPosts";
import Link from "next/link";

async function fetchInstagramPosts(): Promise<InstaPost[]> {
	const { INSTA_USER_ID, INSTA_API_TOKEN } = process.env;

	try {
		const res = await fetch(
			`https://graph.instagram.com/${INSTA_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTA_API_TOKEN}&limit=3`
		);

		if (!res.ok) {
			console.error(
				"Error obteniendo las publicaciones de Instagram:",
				res.statusText
			);
			return [];
		}

		const data = await res.json();
		return data.data || [];
	} catch (error) {
		console.error("Error obteniendo las publicaciones de Instagram:", error);
		return [];
	}
}

export default async function InstaPosts() {
	const posts = await fetchInstagramPosts();

	if (!posts.length)
		return (
			<p className="text-center text-gray-300">
				No hay publicaciones disponibles en este momento.
			</p>
		);

	return (
		<div className="bg-[#18191b] my-8 w-full">
			<h2 className="text-center text-xl font-semibold text-gray-200">
				¡Visita nuestro Instagram!
			</h2>
			<p className="text-center text-destacable mb-4"><Link href="https://instagram.com/elgranchopp">@elgranchopp</Link></p>

			<div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
				{posts.map((post) => (
					<Link href={post.permalink} key={post.id} target="_blank" className="transition duration-1 hover:scale-105">
						<div className="bg-[#202124] rounded-lg shadow-md overflow-hidden max-w-52 lg:max-w-60 mx-auto lg:mx-4">
							{/* Contenedor cuadrado */}

							<div className="relative w-full pb-[120%]">
								{post.media_type === "IMAGE" ||
								post.media_type === "CAROUSEL_ALBUM" ? (
									<img
										src={post.media_url}
										alt={post.caption || "Publicación de Instagram"}
										className="absolute top-0 left-0 w-full h-full object-cover"
									/>
								) : post.media_type === "VIDEO" ? (
									<video
										controls
										className="absolute top-0 left-0 w-full h-full object-cover"
									>
										<source src={post.media_url} type="video/mp4" />
									</video>
								) : null}
							</div>
							<div className="p-4">
								<p className="text-gray-300 text-sm truncate mb-3">
									{post.caption}
								</p>
								{/* <Link
								href={post.permalink}
								target="_blank"
								className="text-highlight text-sm font-semibold hover:underline bg-destacable text-black py-1 px-2 rounded-full"
							>
								Ver en Instagram
							</Link> */}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
