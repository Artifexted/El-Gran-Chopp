/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface IPost {
	id: string;
	caption?: string;
	media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	media_url: string;
	permalink: string;
}

async function fetchInstagramPosts() {
	//const { NEXT_PUBLIC_INSTA_USER_ID, NEXT_PUBLIC_INSTA_API_TOKEN } = process.env;

	try {
		const res = await fetch(
			`https://graph.instagram.com/9027014267379166/media?fields=id,caption,media_type,media_url,permalink&access_token=IGAAIPzrNulxxBZAE9tWVFoa21ObzlYekFFR2NjNWtiVUw5bkJocWJzd3dvNEdwMkdQaDAtT3dDRmMtYUxOV1hWMmRDUUo5RW54NG16Q3RDSEEwYjhRT0FzYTVuTVBqLUlxQlFncy1oVUFuOUtpcENaU3RSa2tlR2hMcnItY3lqNAZDZD&limit=3`
		);

		if (!res.ok) throw new Error("Error al obtener los posts");

		const data = await res.json();
		return data.data || [];
	} catch (error) {
		console.error(error);
		return [];
	}
}

export default function InstaPosts() {
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		fetchInstagramPosts().then(setPosts);
	}, []);

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
			<p className="text-center text-destacable mb-4">
				<Link href="https://instagram.com/elgranchopp">@elgranchopp</Link>
			</p>

			<div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
				{posts.map((post) => (
					<Link href={post.permalink} key={post.id} target="_blank">
						<div className="bg-[#202124] rounded-lg shadow-md overflow-hidden max-w-52 lg:max-w-60">
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
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
