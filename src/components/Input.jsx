import React, { useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import {consultaChatBot} from "../utils/api-connect.js"

export const Input = ({ setListMessage}) => {
	
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			const message = e.target.value;
			setListMessage((prevListMessage) => [
				...prevListMessage,
				{ text: message, fromUser: true },
			]);
			e.target.value = "";
			consultaChatBot("hola")
			

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
