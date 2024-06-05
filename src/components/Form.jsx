import { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import Data from "../utils/company-config.json";
import { InitialButton } from "./InitialButton";
import { consultaChatBot } from "../utils/api-connect";

export const Form = () => {
	/* Mensaje de bienvenida, el mensaje de bienvenida se toma del archivo json importado más arriba */
	const welcomeMessage = Data["bot-data"]["welcome-message"];

	/* Presentación del Chat, se setea un estado para la presentación del chat */
	const [chatPresentation, setChatPresentation] = useState("");
	// useEffect para que se ejecute solo una vez, al tener dependencia vacía, setea la presentación
	useEffect(() => {
		const fetchChatBotPresentation = async () => {
			try {
				const respuesta = await consultaChatBot("¿quién eres?");
				setChatPresentation(respuesta);
			} catch (error) {
				console.error("Error consultando al chatbot:", error);
			}
		};
		fetchChatBotPresentation();
	}, []);

	/* Nombre Bot, más declaración de estado */
	const [nombreBot, setNombreBot] = useState(Data["bot-data"]["name"]);

	// Función para manejar el cambio de nombre del bot
	const handleNombreBotChange = (event) => {
		setNombreBot(event.target.value);
	};

	/* Color Primario */
	// Colores para el color primario el estado define si se muestra la selección o no
	const [dropdownOpen0, setDropdownOpen0] = useState(false);
	// Estado para el color primario, con el color que se toma del archivo json como estado inicial
	const [colorPrimario, setColorPrimario] = useState(
		Data["bussiness-data"]["primary-color"]
	);
	// Función para manejar el cambio de color
	const toggleDropdown0 = () => setDropdownOpen0((prevState) => !prevState);

	// Función para manejar el cambio de color
	const handleChangeColor0 = (color) => {
		// Se setea el color primario con el color seleccionado
		setColorPrimario(color.hex);
	};

	/* Color Secundario */
	const coloresClaros = [
		"#fcd0cd",
		"#f9c7d8",
		"#ebc3f2",
		"#d8ccef",
		"#ced3ee",
		"#c7e5fc",
		"#beeafe",
		"#b4f7ff",
		"#a5fff7",
		"#d2ebd3",
		"#e2f0d2",
		"#f2f6cd",
		"#ffface",
		"#ffefc1",
		"#ffe5bf",
		"#ffd5c8",
		"#e1d3cd",
		"#607d8b",
	];
	// Estado para el color secundario, con el color que se toma del archivo json como estado inicial
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [colorSecundario, setColorSecundario] = useState(
		Data["bussiness-data"]["secondary-color"]
	);
	// Función para manejar el cambio de color
	const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
	// Función para manejar el cambio de color secundario
	const handleChangeColor = (color) => {
		// Se setea el color secundario con el color seleccionado
		setColorSecundario(color.hex);
	};

	/* Selector de Imágenes */
	// Estado para la imagen del bot, con la imagen que se toma del archivo json como estado inicial
	const [imagenBot, setImagenBot] = useState(Data["bot-data"]["bot-img"]);
	// Función para manejar el cambio de imagen del bot
	const handleImagenBotClick = (url) => {
		// Se setea la imagen del bot con la imagen seleccionada
		setImagenBot(url);
	};

	// Array de imágenes para el selector de imágenes
	const imagenes = [
		{ url: Data["bot-data"]["bot-img"], nombre: "Imagen 1" },
		{ url: "http://localhost:5173/CB_TRIAL/public/img/opt2.png", nombre: "Imagen 2" },
		{ url: "http://localhost:5173/CB_TRIAL/public/img/opt3.png", nombre: "Imagen 3" },
		{ url: "http://localhost:5173/CB_TRIAL/public/img/opt4.png", nombre: "Imagen 4" },
		{ url: "http://localhost:5173/CB_TRIAL/public/img/opt5.png", nombre: "Imagen 5" },
		{ url: "http://localhost:5173/CB_TRIAL/public/img/opt6.png", nombre: "Imagen 6" },
	];

	// Renderizado del componente, las clases son de bootstrap y estilos propios
	return (
		<div className="landing position-relative d-flex flex-column align-items-start justify-content-evenly ">
			<div className="d-flex flex-column align-items-start mx-4">
				<div className="d-flex gap-2">
					<h1 className="mb-0" style={{ color: colorPrimario }}>
						CHATBOT <span className="mx-2">{nombreBot}</span>
						<img
							id="titleImg"
							className=""
							src={imagenBot}
							alt="chatbot"
							style={{
								width: "4rem",
								height: "100%",
								animation: "wiggle 2s infinite",
							}}
						/>
					</h1>
				</div>
				<p className="tw-lighter fst-italic fs-5 mx-2">
					Desarrollado por el Equipo UTN-MMXXIII
				</p>
				<h5 className="mt-2 mx-4"> Detalles del ChatBot </h5>
				<p className="w-75 mx-4" style={{ textAlign: "justify" }}>
					Mi nombre es{" "}
					<span className="fw-bold" style={{ color: colorPrimario }}>
						{nombreBot}
					</span>
					. {chatPresentation}
				</p>
				<h5 className="my-4 mx-4"> Personalización del ChatBot </h5>
			</div>
			<form action="submit" method="post">
				<div className="container d-flex flex-column align-items-start mx-4">
					<fieldset className="">
						<legend style={{ color: colorPrimario }}>Nombre y colores</legend>
						<div className="row w-50 mx-4 d-flex align-items-end w-75">
							{/* Nombre */}
							<div className="col-md-6">
								<div className="form-group d-flex flex-column align-items-start">
									<label htmlFor="name" className="mb-2">
										Nombre del Robot
									</label>
									<input
										type="text"
										className="form-control text-center"
										id="name"
										placeholder={nombreBot}
										onChange={handleNombreBotChange}
										style={{
											borderRadius: "2em",
											fontSize: "15px",
											lineHeight: "1.5",
											color: colorPrimario,
											display: "block",
											width: "100%",
											background: colorSecundario,
											height: "50px",
											fontWeight: "bold",
										}}
									/>
								</div>
							</div>
							{/* Color Primario */}
							<div className="col-md-3">
								<div className="form-group d-flex flex-column align-items-center">
									<label htmlFor="colorP" className="mb-2">
										Color Primario
									</label>
									<Dropdown
										isOpen={dropdownOpen0}
										toggle={toggleDropdown0}
										className="mb-2"
									>
										<DropdownToggle
											caret
											style={{
												backgroundColor: colorPrimario,
												borderRadius: "50%",
												width: "20px",
												height: "45px",
											}}
										></DropdownToggle>
										<DropdownMenu>
											<DropdownItem header>
												Elegir color
											</DropdownItem>
											<DropdownItem>
												<CirclePicker onChange={handleChangeColor0} />
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
							{/* Color Secundario */}
							<div className="col-md-3">
								<div className="form-group d-flex flex-column align-items-center">
									<label htmlFor="colorS" className="mb-2">
										Color Secundario
									</label>
									<Dropdown
										isOpen={dropdownOpen}
										toggle={toggleDropdown}
										className="mb-2"
									>
										<DropdownToggle
											caret
											style={{
												backgroundColor: colorSecundario,
												borderRadius: "50%",
												width: "20px",
												height: "45px",
											}}
										></DropdownToggle>
										<DropdownMenu>
											<DropdownItem header>
												Elegir color
											</DropdownItem>
											<DropdownItem>
												<CirclePicker
													onChange={handleChangeColor}
													colors={coloresClaros}
												/>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend style={{ color: colorPrimario }}>Imagen</legend>
						{/* Selector de Imágenes */}
						<div
							className="row gap-3 d-flex justify-content-start align-items-start mx-4"
							style={{
								marginBottom: "30px",
								width: "100%",
								zIndex: "0",
							}}
						>
							{/* Se mapea el array de imágenes para renderizar las opciones, sensibles a la función onClick */}
							{imagenes.map((imagen, index) => (
								<div
									className="col-md-3 col-sm-2 d-flex justify-content-start"
									key={index}
								>
									<img
										src={imagen.url}
										alt={imagen.nombre}
										className={
											imagen.url === imagenBot
												? "selected"
												: ""
										}
										onClick={() =>
											handleImagenBotClick(imagen.url)
										}
										style={{
											width: "50px",
											height: "auto",
										}}
									/>
								</div>
							))}
						</div>
					</fieldset>
				</div>
			</form>
			<InitialButton
				botImg={imagenBot}
				botName={nombreBot}
				colorPrimario={colorPrimario}
				colorSecundario={colorSecundario}
				welcomeMessage={welcomeMessage}
				companyName={Data["bussiness-data"]["name"]}
				consultaChatBot={consultaChatBot}
			/>
		</div>
	);
};
