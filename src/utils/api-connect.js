
//Dirección de la API
const apiUrl = 'https://chat-ia-python-env.onrender.com/chat/';

//Función para hacer la consulta a la API
async function consultaChatBot(message) {
    //Se hace la solicitud a la API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: message }),
        });
        //Si la respuesta no es correcta, se lanza un error
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        //Se convierte la respuesta a un objeto JSON
        const data = await response.json();
        //Se retorna la respuesta del chatbot
        return data.respuesta.answer;
    //Si hay un error en la solicitud, se lanza una excepción    
    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
        throw error; // Re-lanza el error para que el llamador pueda manejarlo
    }
}
//Se exporta la función
export { consultaChatBot };