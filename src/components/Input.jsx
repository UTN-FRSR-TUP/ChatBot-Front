import React from "react";
import { MDBTextArea } from "mdb-react-ui-kit";

export const Input = () => {
	return (
		<MDBTextArea
			className="form-outline align-self-end"
			label="Escribe tu consulta aquí..."
			id="textAreaExample"
			rows={2}
		/>
	);
};
