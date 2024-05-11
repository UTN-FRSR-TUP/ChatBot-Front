import React, { useState } from "react";
import  Chatbot  from "./Chatbot";

 export const InitialButton = ({botImg, botName, colorPrimario, colorSecundario}) => {
	
	const [showChat, setShowChat] = useState(false);
	const widthImg = showChat ? "4rem" : "6rem";
	
	const [message, setMessage] = useState("");
	const handleSendMessage = (message) => {
        setMessage(message);
        consultaChatBot({ message }); 
    };
	
	return (
		<>
			<div className="position fixed h-100">
				

				<div
					id="main-button"
					className="position-absolute bottom-0 end-0 mx-4 mb-4 d-flex justify-content-end "
				>
					{showChat && <Chatbot botImg={botImg} botName={botName} colorPrimario={colorPrimario} colorSecundario={colorSecundario} sendMessage={handleSendMessage}  widthImg={widthImg}/>}
					
					<img
						className=""
						onClick={() => setShowChat(showChat ? false : true)}
						src={botImg}
						alt="chatbot"
						style={{ width: widthImg, height: "100%", animation: "wiggle 2s infinite"}}
					/>
				</div>
			</div>
		</>
	);
};
