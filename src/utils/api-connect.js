async function consultaChatBot(message) {
    fetch("https://chatbot-back-o95g.onrender.com/chat/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Estado:", data.status);
        console.log("Respuesta:", data.respuesta.answer);
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud:", error);
    });
}

export { consultaChatBot }; 

