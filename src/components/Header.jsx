import React, { useState } from "react";
import { MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ botName, primaryColor, setShowChat }) => {
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
			<div className="d-flex align-items-center">
				<p className="mb-0 fw-bold text-center">ChatBot {botName} </p>{" "}
				<FontAwesomeIcon
					icon={faCircleXmark}
					className="mx-2 d-none"
					id="close"
					onClick={() => setShowChat(false)}
				/>
			</div>
			{/* <MDBIcon fas icon="times" /> */}
		</MDBCardHeader>
	);
};
