import React, {useState} from "react";
import { MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";


export const Header = ({botName, primaryColor}) => {

	return (
		<MDBCardHeader
			className="d-flex justify-content-center align-items-center p-3  text-white border-bottom-0"
			style={{
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
				backgroundColor: primaryColor,
			}}
		>
			{/* <MDBIcon fas icon="angle-left" /> */}
			<p className="mb-0 fw-bold text-center">ChatBot {botName} </p>
			{/* <MDBIcon fas icon="times" /> */}
		</MDBCardHeader>
	);
};
