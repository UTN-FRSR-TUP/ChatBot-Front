import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Chatbot from "./components/Chatbot";
import { InitialButton } from "./components/InitialButton";
import { CloseButton } from "./components/CloseButton";

function App() {
	const [showChat, setShowChat] = useState(false);
	return (
		<>
			{showChat && <Chatbot />}{" "}
			{showChat && <CloseButton setShowChat={setShowChat} />}
			{!showChat && <InitialButton setShowChat={setShowChat} showChat={showChat} />}
		</>
	);
}

export default App;
