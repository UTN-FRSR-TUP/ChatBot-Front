import { useEffect, useRef } from "react";
import { MDBCardBody } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";


export const Body = ({
	botImg,
	primaryColor,
	secondaryColor,
	listMessage,
	setListMessage,
	consultaChatBot
}) => {
	//Se definen los colores primario y secundario
	const colors = primaryColor + " " + secondaryColor;
	//se define el scroll de los mensajes
	const messagesEndRef = useRef(null);

	//se define el useEffect para que el chatbot responda
	useEffect(() => {
		//se define la funcion para que el chatbot responda
		const fetchChatBotResponse = async () => {
			//se define la lista de mensajes al reves, dejando el ultimo mensaje primero
			const reversedListMessage = [...listMessage].reverse();
			//se evalua si el mensaje es del usuario
			if (reversedListMessage[0].fromUser) {
				try {
					//se consulta al chatbot con el mensaje del usuario
					const respuesta = await consultaChatBot(
						reversedListMessage[0].text
					);
					//se agrega la respuesta del chatbot a la lista de mensajes
					setListMessage((prevListMessage) => [
						...prevListMessage,
						{ text: respuesta, fromUser: false },
					]);
					
				} catch (error) {//se captura el error
					console.error("Error consultando al chatbot:", error);
				}
			}
		};
		//se ejecuta la funcion para que el chatbot responda
		fetchChatBotResponse();
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
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
				{listMessage?.map((message, index) => {
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