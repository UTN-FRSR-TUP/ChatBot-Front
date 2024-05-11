import React, { useState } from "react";
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

export default function Chatbot({
	botName,
	colorPrimario,
	colorSecundario,
	botImg,
	sendMessage,
	widthImg,
	listMessage, setListMessage
}) {
	const [companyData, setCompanyData] = useState(Data);
	/* const botName = botName; */
	const companyName = companyData["bussiness-data"]["name"];
	const welcomeMessage = companyData["bot-data"]["welcome-message"];
	const primaryColor = colorPrimario;
	const secondaryColor = colorSecundario;
	return (
		<>
			<MDBContainer
				id="main-container"
				className=""
				style={{ position: "absolute", right: widthImg, bottom: '100%', width: '22rem', zIndex: '1000'}}
			>
				<MDBRow className="d-flex justify-content-end">
					<MDBCol md="8" lg="6" xl="4" style={{width:'100%'}}>
						<MDBCard id="chat1" style={{ borderRadius: "15px" }}>
							<Header
								botName={botName}
								primaryColor={primaryColor}
							/>
							<Body
								botImg={botImg}
								botName={botName}
								companyName={companyName}
								welcomeMessage={welcomeMessage}
								primaryColor={primaryColor}
								secondaryColor={secondaryColor}
								sendMessage={sendMessage}
								widthImg={widthImg}
								listMessage={listMessage}
								setListMessage={setListMessage}
							/>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}
