import { MDBTextArea } from "mdb-react-ui-kit";

export const Input = ({ setListMessage }) => {
	// Función que se ejecuta cuando se presiona una tecla
	const handleKeyDown = (e) => {
		// Se evalua que la tecla presionada es Enter y no se presionó Shift
		if (e.key === "Enter" && !e.shiftKey) {
			// Se evita que se envíe el formulario
			e.preventDefault();
			// Se obtiene el mensaje escrito por el usuario
			const message = e.target.value;
			// Se agrega el mensaje a la lista de mensajes
			setListMessage((prevListMessage) => [
				...prevListMessage,
				{ text: message, fromUser: true },
			]);
			// Se limpia el input
			e.target.value = "";
		}
	};

	return (
		<MDBTextArea
			className="form-outline align-self-end"
			label="Escribe tu consulta aquí..."
			id="textAreaExample"
			rows={2}
			onKeyDown={handleKeyDown}
		/>
	);
};