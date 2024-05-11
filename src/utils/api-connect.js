
const apiUrl = 'https://chat-ia-python-env.onrender.com/chat/';


async function consultaChatBot(message) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: message }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        /* console.log("Estado:", data.status);
        console.log("Respuesta:", data.respuesta.answer); */
        return data.respuesta.answer;
    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
        throw error; // Re-lanza el error para que el llamador pueda manejarlo
    }
}

export { consultaChatBot };