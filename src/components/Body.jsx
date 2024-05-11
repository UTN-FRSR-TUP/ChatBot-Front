import  { useState, useEffect } from "react";
import { MDBCardBody } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";
import { consultaChatBot } from "../utils/api-connect"


export const Body = ({
	botImg,
	botName,
	companyName,
	welcomeMessage,
	primaryColor,
	secondaryColor,
	widthImg
}) => {
	const colors = primaryColor + " " + secondaryColor;

	const [listMessage, setListMessage] = useState([{ text: welcomeMessage, fromUser: false }]);

	useEffect(() => {
		const fetchChatBotResponse = async () => {
			const reversedListMessage = [...listMessage].reverse();
			if (reversedListMessage[0].fromUser) {
				try {
					// Usar async/await para esperar la respuesta de consultaChatBot
					const respuesta = await new Promise((resolve, reject) => {
						consultaChatBot(reversedListMessage[0].text)
							.then(respuesta => resolve(respuesta))
							.catch(error => reject(error));
					});
		
					// Actualizar el estado solo después de que la respuesta esté disponible
					setListMessage(prevListMessage => [
						...prevListMessage,
						{ text: respuesta, fromUser: false },
					]);
				} catch (error) {
					console.error('Error consultando al chatbot:', error);
				}
			}
		};
		
		fetchChatBotResponse();
	}, [listMessage]);





	return (
		<MDBCardBody
			id="card-body"
			style={{ scrollbarWidth: "thin", scrollbarColor: colors, zIndex: "10", }}
		>

			<ul
				className="ps-0 pe-2"
				id="messages"
				style={{ height: "calc(75vh - 11rem)", overflowY: "scroll" }}
			>
				{/* <BotMessage
					botImg={botImg}
					botName={botName}
					companyName={companyName}
					secondaryColor={secondaryColor}
					botMessage={welcomeMessage}
				/> */}
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