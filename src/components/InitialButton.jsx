import React, { useState } from "react";
import Data from "../utils/company-config.json";
import  Chatbot  from "./Chatbot";

 export const InitialButton = () => {
	const [companyData, setCompanyData] = useState(Data);
	const [showChat, setShowChat] = useState(false);
	const widthImg = showChat ? "6%" : "8%";
	const botImg =/*  companyData["bot-data"]["bot-img"] */ 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' ;
	const [message, setMessage] = useState("");
	const handleSendMessage = (message) => {
        setMessage(message);
        consultaChatBot({ message }); // Llama a la función consultaChatBot con el mensaje
    };
	
	return (
		<>
			<div className="position fixed h-100">
				

				<div
					id="main-button"
					className="position-absolute bottom-0 end-0 mx-4 mb-4 d-flex justify-content-end "
				>
					{showChat && <Chatbot botImg={botImg} sendMessage={handleSendMessage} />}
					
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
