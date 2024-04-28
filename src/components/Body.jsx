import React from "react";
import { MDBCardBody, MDBTextArea } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";

export const Body = () => {
	return (
		<MDBCardBody>
			<BotMessage />
			<UserMessage />
			<BotMessage />
			<UserMessage />

			<Input />
		</MDBCardBody>
	);
};
