import React, {useState} from "react";
import { MDBCardBody, MDBTextArea } from "mdb-react-ui-kit";
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { Input } from "./Input";
import Data from "../utils/company-config.json";


export const Body = () => {
	const [companyData, setCompanyData] = useState(Data);
	const colors = companyData["bussiness-data"]["primary-color"]+" "+companyData["bussiness-data"]["secondary-color"];
	return (
		<MDBCardBody id="card-body" style={{scrollbarWidth: "thin",
		scrollbarColor:  colors,}}>
			<ul className="ps-0 pe-2" id="messages" style={{height:"calc(75vh - 11rem)", overflowY:"scroll"}}>
				<li className="">
					<BotMessage />
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="">
					<BotMessage />
				</li>
				<li className="">
					<UserMessage />
				</li>
				<li className="list-group-item">
					<BotMessage />
				</li>
			</ul>
			<Input />
		</MDBCardBody>
	);
};
