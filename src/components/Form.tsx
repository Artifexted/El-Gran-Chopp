"use client";
import { Errores } from "@/interfaces/Errores";
import { FormEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
	const [nombre, setNombre] = useState<string>("");
	const [mensaje, setMensaje] = useState<string>("");
	const [contacto, setContacto] = useState<string>("");
	const [errores, setErrores] = useState<Errores>({});
	const [enviado, setEnviado] = useState<boolean>(false);

	const form = useRef<HTMLFormElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setErrores({});

		const newErrores: Errores = {};
		if (!nombre) newErrores.nombre = "El nombre es obligatorio.";
		if (!contacto) newErrores.contacto = "El contacto es obligatorio.";
		if (!mensaje) newErrores.mensaje = "El mensaje es obligatorio.";

		if (Object.keys(newErrores).length > 0) {
			setErrores(newErrores);
			return;
		}

		if (!form.current) return;
        
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				form.current,
				{ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
			)
			.then(
				(response) => {
					console.log("Correo enviado con éxito:", response);
					setEnviado(true);
					setNombre("");
					setContacto("");
					setMensaje("");
					setErrores({});
				},
				(error) => {
					console.error("Error al enviar el correo:", error);
				}
			);
	};

	return (
		<div className="text-center">
			<h2 id="formulario" className="text-2xl font-bold text-destacable">
				Denuncias & Quejas
			</h2>

			<div className="text-white p-2 rounded-lg w-fit flex hover:scale-105 transition duration-200 mx-auto">
				<a href="https://wa.me/5493416880560" target="_blank">
					<FontAwesomeIcon icon={faWhatsapp} className="mr-1 w-4" />
					3416880560
				</a>
			</div>

			{enviado && (
				<div className="mt-4 text-destacable">
					¡Tu mensaje ha sido enviado correctamente!
				</div>
			)}

			<form onSubmit={handleSubmit} className="mt-4 space-y-4" ref={form}>
				<div className="w-3/4 mx-auto lg:w-1/2 flex flex-col">
					<label className="lg:text-left" htmlFor="nombre">
						Nombre <span className="text-red-500">*</span>
					</label>
					<input
						id="nombre"
						name="nombre"
						type="text"
						placeholder="Nombre Apellido..."
						className="rounded-md text-black p-1"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						required
					/>
					{errores.nombre && (
						<span className="text-red-500 text-sm">{errores.nombre}</span>
					)}
				</div>

				<div className="w-3/4 mx-auto lg:w-1/2 flex flex-col">
					<label className="lg:text-left" htmlFor="contacto">
						Contacto <span className="text-red-500">*</span>
					</label>
					<input
						id="contacto"
						name="contacto"
						type="text"
						placeholder="Numero de telefono o email..."
						className="rounded-md text-black p-1"
						value={contacto}
						onChange={(e) => setContacto(e.target.value)}
						required
					/>
					{errores.contacto && (
						<span className="text-red-500 text-sm">{errores.contacto}</span>
					)}
				</div>

				<div className="w-3/4 mx-auto lg:w-1/2 flex flex-col">
					<label className="lg:text-left" htmlFor="mensaje">
						Mensaje <span className="text-red-500">*</span>
					</label>
					<textarea
						id="mensaje"
						name="mensaje"
						placeholder="Escribe tu mensaje..."
						className="rounded-md text-black p-1"
						maxLength={255}
						rows={3}
						value={mensaje}
						onChange={(e) => setMensaje(e.target.value)}
						required
					/>
					{errores.mensaje && (
						<span className="text-red-500 text-sm">{errores.mensaje}</span>
					)}
				</div>

				<button
					type="submit"
					className="bg-destacable p-2 rounded-lg text-black mt-4 hover:scale-110 transition duration-300"
				>
					Enviar mensaje
				</button>
			</form>
		</div>
	);
};

export default Contact;
