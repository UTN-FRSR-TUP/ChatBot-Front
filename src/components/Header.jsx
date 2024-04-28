import React, {useState} from "react";
import { MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";
import Data from "../utils/company-config.json"; 

export const Header = () => {
	const [companyData, setCompanyData] = useState(Data);
	return (
		<MDBCardHeader
			className="d-flex justify-content-center align-items-center p-3  text-white border-bottom-0"
			style={{
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
				backgroundColor: companyData["bussiness-data"]["primary-color"],
			}}
		>
			{/* <MDBIcon fas icon="angle-left" /> */}
			<p className="mb-0 fw-bold text-center">ChatBot</p>
			{/* <MDBIcon fas icon="times" /> */}
		</MDBCardHeader>
	);
};
