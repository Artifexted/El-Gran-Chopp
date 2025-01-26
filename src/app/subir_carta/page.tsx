"use client";
import React, { useState } from "react";
import axios from "axios";

const Home = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [salonFile, setSalonFile] = useState<File | null>(null);
	const [deliveryFile, setDeliveryFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	const handleLogin = () => {
		if (
			username === process.env.NEXT_PUBLIC_CHOPP_USERNAME &&
			password === process.env.NEXT_PUBLIC_CHOPP_PASSWORD
		) {
			setIsAuthenticated(true);
		} else {
			console.log(password);
			console.log(process.env.NEXT_PUBLIC_CHOPP_PASSWORD);

			alert("Usuario o contraseña incorrectos");
		}
	};

	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "salon" | "delivery"
	) => {
		const file = e.target.files?.[0];
		if (file && file.type === "application/pdf") {
			if (type === "salon") setSalonFile(file);
			if (type === "delivery") setDeliveryFile(file);
		} else {
			alert("Solo se permiten archivos PDF.");
		}
	};

	const handleSubmit = async () => {
		if (!salonFile && !deliveryFile) {
			alert("Debes seleccionar al menos un archivo.");
			return;
		}

		setIsUploading(true);

		try {
			if (salonFile) {
				await uploadToCloudinary(salonFile, "carta-salon");
			}
			if (deliveryFile) {
				await uploadToCloudinary(deliveryFile, "carta-delivery");
			}
			alert("Archivos actualizados exitosamente.");
		} catch (error) {
			console.error("Error al subir archivos:", error);
			alert("Hubo un error al subir los archivos.");
		} finally {
			setIsUploading(false);
		}
	};

	const uploadToCloudinary = async (file: File, publicId: string) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("resource_type", "raw");
		formData.append("upload_preset", "Carta GChopp");
		formData.append("public_id", publicId);
		formData.append("folder", "gchopp_carta");

		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
			formData
		);

		if (response.status !== 200) {
			throw new Error("Error al subir el archivo a Cloudinary");
		}
	};

	if (!isAuthenticated) {
		return (
			<div>
				<h1 className="text-xl font-bold text-center">Inicia sesión</h1>
				<form className="flex flex-col items-center justify-center">
					<input
						type="text"
						placeholder="Usuario"
						className="border rounded p-2 m-2 text-black"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Contraseña"
						className="border rounded p-2 m-2 text-black"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-destacable text-black px-4 py-2 rounded"
						onClick={handleLogin}
					>
						Ingresar
					</button>
				</form>
			</div>
		);
	}

	return (
		<div className="p-8 text-center">
			<h1 className="text-2xl font-bold">Subir Archivos PDF</h1>
			<div className="my-4">
				<label className="block mb-2">Carta Salón</label>
				<input
					type="file"
					accept="application/pdf"
					onChange={(e) => handleFileChange(e, "salon")}
				/>
			</div>
			<div className="my-4">
				<label className="block mb-2">Carta Delivery</label>
				<input
					type="file"
					accept="application/pdf"
					onChange={(e) => handleFileChange(e, "delivery")}
				/>
			</div>
			<button
				className="bg-green-500 text-white px-4 py-2 rounded"
				onClick={handleSubmit}
				disabled={isUploading}
			>
				{isUploading ? "Subiendo..." : "Actualizar Archivos"}
			</button>
		</div>
	);
};

export default Home;
