
export const BotMessage = ({ botImg, secondaryColor, botMessage }) => {
	return (
		<>
			<div className="d-flex flex-row justify-content-start mb-4">
				<img
					src={botImg}
					alt="avatar 1"
					style={{ width: "3rem", height: "100%" }}
				/>
				<div
					className="p-3 ms-3"
					style={{
						borderRadius: "15px",
						backgroundColor: secondaryColor,

					}}
				>
					<p className="small mb-0">
						{botMessage}
					</p>
				</div>
			</div>
		</>
	);
};
