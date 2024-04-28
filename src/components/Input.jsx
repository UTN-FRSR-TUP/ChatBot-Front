import React from "react";
import { MDBTextArea } from "mdb-react-ui-kit";

export const Input = () => {
	return (
		<MDBTextArea
			className="form-outline"
			label="Type your message"
			id="textAreaExample"
			rows={4}
		/>
	);
};
