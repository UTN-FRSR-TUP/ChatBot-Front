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

	const fetchBotMessages = async () => {
		const url =
			"https://ajith-messages.p.rapidapi.com/getMsgs?category=love";
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"cc06f50221msh65d145a9a64ad89p106752jsnf0d3ce69069f",
				"X-RapidAPI-Host": "ajith-messages.p.rapidapi.com",
			},
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			// Extraer el mensaje de la respuesta
			const botMessage = data.Message;
			
			return botMessage;
		} catch (error) {
			console.error(error);
			return [];
		}
	};
	const addbotmessage=() => {
			fetchBotMessages().then((result) => {
				const messagesArray = result;
				setListMessage((prevListMessage) => [
					...prevListMessage,
					{ text: messagesArray, fromUser: false },
				]);
			});
	};

	useEffect(() => {
		if (listMessage.length > 0 && listMessage[listMessage.length - 1].fromUser) {
			addbotmessage();
		}
	}, [listMessage]);

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
									botMessage={message.text}
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
