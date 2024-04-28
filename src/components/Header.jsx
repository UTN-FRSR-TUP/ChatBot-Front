import React from "react";

import { MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";

export const Header = () => {
	return (
		<MDBCardHeader
			className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
			style={{
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
			}}
		>
			<MDBIcon fas icon="angle-left" />
			<p className="mb-0 fw-bold">Live chat</p>
			<MDBIcon fas icon="times" />
		</MDBCardHeader>
	);
};
