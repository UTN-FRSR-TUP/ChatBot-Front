import React, { useState, useEffect } from "react";
import { MDBCardBody, MDBTextArea } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";


export const Body = ({
	botImg,
	botName,
	companyName,
	welcomeMessage,
	primaryColor,
	secondaryColor,
}) => {
	const colors = primaryColor + " " + secondaryColor;

	const [listMessage, setListMessage] = useState([]);


	
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
				<BotMessage
					botImg={botImg}
					botName={botName}
					companyName={companyName}
					secondaryColor={secondaryColor}
					botMessage={welcomeMessage}
				/>
				{listMessage.map((message, index) => {
					if (message.fromUser) {
						return (
							<li key={index} className="">
								<UserMessage userMessage={message.text} />
							</li>
						);
					} else {
						return (
							<li key={index} className="">
								<BotMessage
									botImg={botImg}
									botName={botName}
									companyName={companyName}
									welcomeMessage={welcomeMessage}
									secondaryColor={secondaryColor}
									botMessage={message.Message}
								/>
							</li>
						);
					}
				})}
			</ul>

			<Input setListMessage={setListMessage} />
		</MDBCardBody>
	);
};
