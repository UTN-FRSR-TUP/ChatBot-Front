import React, { useState } from "react";
import { MDBCardBody, MDBTextArea } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";
import Data from "../utils/company-config.json";

export const Body = ({
	botImg,
	botName,
	companyName,
	welcomeMessage,
	primaryColor,
	secondaryColor,
}) => {
	const colors = primaryColor + " " + secondaryColor;
	const [botMessage, setBotMessage] = useState(welcomeMessage);
	return (
		<MDBCardBody
			id="card-body"
			style={{ scrollbarWidth: "thin", scrollbarColor: colors }}
		>
			<ul
				className="ps-0 pe-2"
				id="messages"
				style={{ height: "calc(75vh - 11rem)", overflowY: "scroll" }}
			>
				<li className="">
				<BotMessage
						botImg={botImg}
						botName={botName}
						companyName={companyName}
						welcomeMessage={welcomeMessage}
						secondaryColor={secondaryColor}
						botMessage={botMessage}
					/>
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="">
				<BotMessage
						botImg={botImg}
						botName={botName}
						companyName={companyName}
						welcomeMessage={welcomeMessage}
						secondaryColor={secondaryColor}
						botMessage={botMessage}
					/>
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="">
				<BotMessage
						botImg={botImg}
						botName={botName}
						companyName={companyName}
						welcomeMessage={welcomeMessage}
						secondaryColor={secondaryColor}
						botMessage={botMessage}
					/>
				</li>
			</ul>
			<Input />
		</MDBCardBody>
	);
};
