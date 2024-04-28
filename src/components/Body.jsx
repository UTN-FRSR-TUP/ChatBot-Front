import React from "react";
import { MDBCardBody, MDBTextArea } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";

export const Body = () => {
	return (
		<MDBCardBody>
			<ul className="ps-0 pe-2" id="messages" style={{height:"16rem", overflowY:"scroll"}}>
				<li className="">
					<BotMessage />
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="">
					<BotMessage />
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="list-group-item">
					<BotMessage />
				</li>
			</ul>
			<Input />
		</MDBCardBody>
	);
};
