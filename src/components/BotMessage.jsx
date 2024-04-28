import React, { useState } from "react";
import Data from "../utils/company-config.json";

export const BotMessage = () => {
	const [companyData, setCompanyData] = useState(Data);
	return (
		<>
			<div className="d-flex flex-row justify-content-start mb-4">
				<img
					src={companyData["bot-data"]["bot-img"]}
					alt="avatar 1"
					style={{ width: "3rem", height: "100%" }}
				/>
				<div
					className="p-3 ms-3"
					style={{
						borderRadius: "15px",
						backgroundColor: companyData["bussiness-data"]["secondary-color"],
						
					}}
				>
					<p className="small mb-0">
						Hello and thank you for visiting MDBootstrap. Please
						click the video below.
					</p>
				</div>
			</div>
		</>
	);
};
