import React, { useState } from "react";
import Data from "../utils/company-config.json";
import  Chatbot  from "./Chatbot";

export const InitialButton = () => {
	const [companyData, setCompanyData] = useState(Data);
	const [showChat, setShowChat] = useState(false);
	const widthImg = showChat ? "6%" : "8%";
	return (
		<>
			<div className="position fixed h-100">
				

				<div
					id="main-button"
					className="position-absolute bottom-0 end-0 mx-4 mb-4 d-flex justify-content-end "
				>
					{showChat && <Chatbot />}
					
					<img
						className=""
						onClick={() => setShowChat(showChat ? false : true)}
						src={companyData["bot-data"]["bot-img"]}
						alt="chatbot"
						style={{ width: widthImg, height: "100%" }}
					/>
				</div>
			</div>
		</>
	);
};
