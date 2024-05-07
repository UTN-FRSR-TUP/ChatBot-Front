import React,{useState} from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardHeader,
	MDBCardBody,
	MDBIcon,
	MDBTextArea,
} from "mdb-react-ui-kit";
import { Header } from "./Header";
import { Body } from "./Body";
import Data from "../utils/company-config.json"; 

export default function Chatbot({botImg, sendMessage}) {
	const [companyData, setCompanyData] = useState(Data);
	const botName = companyData["bot-data"]["name"];
	const companyName = companyData["bussiness-data"]["name"];
	const welcomeMessage = companyData["bot-data"]["welcome-message"];
	const primaryColor = companyData["bussiness-data"]["primary-color"];
	const secondaryColor = companyData["bussiness-data"]["secondary-color"];
	return (
		<>
		
			<MDBContainer id="main-container" className="">
				<MDBRow className="d-flex justify-content-end">
					<MDBCol md="8" lg="6" xl="4">
						<MDBCard id="chat1" style={{ borderRadius: "15px" }} >
							<Header botName={botName} primaryColor={primaryColor}/>
							<Body botImg={botImg} botName={botName} companyName={companyName} welcomeMessage={welcomeMessage} primaryColor={primaryColor} secondaryColor={secondaryColor} sendMessage={sendMessage}/>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			
		</>
	);
}
