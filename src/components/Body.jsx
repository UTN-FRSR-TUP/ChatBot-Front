import { useState, useEffect, useRef } from "react";
import { MDBCardBody } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";
import { consultaChatBot } from "../utils/api-connect";

export const Body = ({
	botImg,
	botName,
	companyName,
	welcomeMessage,
	primaryColor,
	secondaryColor,
	widthImg,
}) => {
	const colors = primaryColor + " " + secondaryColor;

	const [listMessage, setListMessage] = useState([
		{ text: welcomeMessage, fromUser: false },
	]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		const fetchChatBotResponse = async () => {
			const reversedListMessage = [...listMessage].reverse();
			if (reversedListMessage[0].fromUser) {
				try {
					const respuesta = await consultaChatBot(
						reversedListMessage[0].text
					);
					setListMessage((prevListMessage) => [
						...prevListMessage,
						{ text: respuesta, fromUser: false },
					]);
				} catch (error) {
					console.error("Error consultando al chatbot:", error);
				}
			}
		};

		fetchChatBotResponse();
	}, [listMessage]);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [listMessage]);

	return (
		<MDBCardBody
			id="card-body"
			style={{
				scrollbarWidth: "thin",
				scrollbarColor: colors,
				zIndex: "10",
			}}
		>
			<ul
				className="ps-0 pe-2"
				id="messages"
				style={{ height: "calc(75vh - 11rem)", overflowY: "scroll" }}
			>
				{listMessage.map((message, index) => {
					if (message.fromUser) {
						return (
							<li key={index}>
								<UserMessage userMessage={message.text} />
							</li>
						);
					} else {
						return (
							<li key={index}>
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
				<div ref={messagesEndRef} />
			</ul>
			<Input setListMessage={setListMessage} />
		</MDBCardBody>
	);
};
