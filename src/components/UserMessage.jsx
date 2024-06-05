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
		</div>
	);
};
