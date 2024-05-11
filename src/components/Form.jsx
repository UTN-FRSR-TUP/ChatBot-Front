import React, { useState } from "react";
import { CirclePicker } from "react-color";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import Data from "../utils/company-config.json";
import { InitialButton } from "./InitialButton";

export const Form = () => {
	const welcomeMessage = Data["bot-data"]["welcome-message"];

	/* Nombre Bot */
	const [nombreBot, setNombreBot] = useState(Data["bot-data"]["name"]);
	const handleNombreBotChange = (event) => {
		setNombreBot(event.target.value);
	};

	/* Color Primario */
	const [dropdownOpen0, setDropdownOpen0] = useState(false);
	const [colorPrimario, setColorPrimario] = useState(
		Data["bussiness-data"]["primary-color"]
	);

	const toggleDropdown0 = () => setDropdownOpen0((prevState) => !prevState);

	const handleChangeColor0 = (color) => {
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
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [colorSecundario, setColorSecundario] = useState(
		Data["bussiness-data"]["secondary-color"]
	);

	const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

	const handleChangeColor = (color) => {
		setColorSecundario(color.hex);
	};

	/* Selector de Imagenes */
	const [imagenBot, setImagenBot] = useState(Data["bot-data"]["bot-img"]);

	const handleImagenBotClick = (url) => {
		setImagenBot(url);
	};

	const imagenes = [
		{ url: Data["bot-data"]["bot-img"], nombre: "Imagen 1" },
		{ url: "img/opt2.png", nombre: "Imagen 2" },
		{ url: "img/opt3.png", nombre: "Imagen 3" },
		{ url: "img/opt4.png", nombre: "Imagen 4" },
		{ url: "img/opt5.png", nombre: "Imagen 5" },
		{ url: "img/opt6.png", nombre: "Imagen 6" },
	];

	return (
		<div className="landing position-relative d-flex flex-column align-items-center justify-content-evenly">
			<div>
				{" "}
				<h1 className="text-center " style={{ color: colorPrimario }}>
					CHATBOT
				</h1>
				<h2 className="text-center ">
					Desarrollado por Equipo UTN-MMXXIII
				</h2>
			</div>
			<form action="submit" method="post">
				<div className="container d-flex flex-column align-items-center">
					<div className="row w-50">
						<div className="col-md-12">
							<div className="form-group d-flex flex-column align-items-center">
								<label
									htmlFor="name"
									style={{ textAlign: "center" }}
								>
									Nombre del Robot
								</label>
								<input
									type="text"
									className="form-control text-center"
									id="name"
									placeholder="Nombre ChatBot"
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
					</div>
					{/* Color Primario */}
					<div
						className="row"
						style={{
							marginTop: "20px",
							marginBottom: "30px",
							width: "100%",
						}}
					>
						<div className="col-md-6">
							<div className="form-group d-flex flex-column align-items-center">
								<label htmlFor="colorP">Color Primario</label>
								<Dropdown
									isOpen={dropdownOpen0}
									toggle={toggleDropdown0}
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
											<CirclePicker
												onChange={handleChangeColor0}
											/>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>

						{/* Color Secundario */}
						<div className="col-md-6">
							<div className="form-group d-flex flex-column align-items-center">
								<label htmlFor="colorS">Color Secundario</label>
								<Dropdown
									isOpen={dropdownOpen}
									toggle={toggleDropdown}
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

					{/* Selector de Imagenes */}

					<div
						className="row gap-3 d-flex justify-content-center align-items-center "
						style={{
							marginBottom: "30px",
							width: "100%",
							zIndex: "2",
						}}
					>
						<label htmlFor="imagen" style={{ textAlign: "center" }}>
							Imagen del Robot
						</label>
						{imagenes.map((imagen, index) => (
							<div
								className="col-md-3 d-flex justify-content-center"
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
									style={{ width: "50px", height: "auto" }}
								/>
							</div>
						))}
					</div>
				</div>
			</form>
			<InitialButton
				botImg={imagenBot}
				botName={nombreBot}
				colorPrimario={colorPrimario}
				colorSecundario={colorSecundario}
				welcomeMessage={welcomeMessage}
				companyName={Data["bussiness-data"]["name"]}
			/>
		</div>
	);
};
