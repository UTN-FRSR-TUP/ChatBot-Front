import { useState } from "react";
import Chatbot from "./Chatbot";

export const InitialButton = ({ botImg, botName, colorPrimario, colorSecundario, welcomeMessage, companyName, consultaChatBot }) => {
    // Declara el estado del botón de chatbot, que define si se muestra o no
    const [showChat, setShowChat] = useState(false);
    // Define el ancho de la imagen del chatbot con un ternario
    const widthImg = showChat ? "4rem" : "6rem";

    // Declara el estado de la lista de mensajes, con un mensaje de bienvenida. Diferencia entre text y fromUser.
    // Se declara aquí para que el chatbot no se borre cada vez que se cierre.
    const [listMessage, setListMessage] = useState([
        { text: welcomeMessage, fromUser: false },
    ]);

    // Función para manejar el envío de mensajes
    const handleSendMessage = (message) => {
        setListMessage([...listMessage, { text: message, fromUser: true }]);
        consultaChatBot(message).then((response) => {
            setListMessage([...listMessage, { text: response, fromUser: false }]);
        });
    };

    return (
        <div className="position-fixed h-100" style={{ bottom: "0", right: "0" }}>
            <div
                id="main-button"
                className="position-absolute bottom-0 end-0 mx-4 mb-4 d-flex justify-content-end"
                style={{ display: showChat && window.innerWidth <= 350 ? "none" : "block" }}
            >
                {showChat && (
                    <Chatbot
                        botImg={botImg}
                        botName={botName}
                        colorPrimario={colorPrimario}
                        colorSecundario={colorSecundario}
                        sendMessage={handleSendMessage}
                        widthImg={widthImg}
                        listMessage={listMessage}
                        setListMessage={setListMessage}
                        welcomeMessage={welcomeMessage}
                        companyName={companyName}
                        consultaChatBot={consultaChatBot}
                        setShowChat={setShowChat}
                    />
                )}
                <img
                    className="d-md-block"
                    onClick={() => setShowChat(!showChat)}
                    src={botImg}
                    alt="chatbot"
                    style={{ width: widthImg, height: "100%", animation: "wiggle 2s infinite" }}
                />
            </div>
        </div>
    );
};
