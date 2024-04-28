import React,{useState} from "react";
import Data from "../utils/company-config.json";

export const InitialButton = ({setShowChat}) => {
	const [companyData, setCompanyData] = useState(Data);
	return (
		<>
    			<div className="position-fixed bottom-0 end-0 m-4">
				<img className="" onClick={()=>setShowChat(true)} src={companyData["bot-data"]["bot-img"]} alt="chatbot" style={{ width: "4rem", height: "100%" }}/>
			</div>
		</>
	);
};
