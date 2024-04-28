import React from "react";
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


export default function Chatbot() {
	return (
		<>
		
			<MDBContainer className="py-4 ">
				<MDBRow className="d-flex justify-content-end">
					<MDBCol md="8" lg="6" xl="4">
						<MDBCard id="chat1" style={{ borderRadius: "15px" }} >
							<Header />
							<Body />
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			
		</>
	);
}
