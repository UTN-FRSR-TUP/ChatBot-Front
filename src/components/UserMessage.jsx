import React from "react";

export const UserMessage = ({userMessage}) => {
	return (
		<div className="d-flex flex-row justify-content-end mb-4">
			<div
				className="p-3 border"
				style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
			>
				<p className="small mb-0">
					{userMessage}
				</p>
			</div>
			{/* <img
				src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
				alt="avatar 1"
				style={{ width: "45px", height: "100%" }}
			/> */}
		</div>
	);
};
