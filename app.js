const chatHistory = document.getElementById('chat-history');
const inputText = document.getElementById('input-text');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const message = inputText.value.trim();

 
  if (isQuestion(message)) {
    addMessageToHistory(message, true);
    inputText.value = '';

    
    const responseMessage = getResponseMessage(message);

    addMessageToHistory(responseMessage, false);
  } else {
    inputText.value = '';
  }
});

function addMessageToHistory(message, isUser) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  messageContainer.classList.add(isUser ? 'user' : 'bot');

  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.innerText = message;

  messageContainer.appendChild(messageBubble);
  chatHistory.appendChild(messageContainer);
}

function getResponseMessage(message) {
  const keywords = {
    "hola": "¡Hola! ¿En qué puedo ayudarte mucho gusto soy jose luis desarrollador web?",
    "experiencia": "Por supuesto, tengo 2 años de experiencia",
    "framework": "Por supuesto, tengo conocimiento en angular, react , vue j,s.",
    "habilidades": " Claro tengo habilidades en diferentes framework , preprocesadores , y bases de datos  .",
    "vives": " colombia ciudad bogota.",
    "ingles": " Por supuesto mi nivel de ingles es  B1."
  };

  message = message.toLowerCase();

  for (const [key, value] of Object.entries(keywords)) {
    if (message.includes(key)) {
      return value;
    }
  }

  return "Lo siento, no entiendo lo que estás diciendo si quiere contactame por mi numero de whatsapp 3125382663.";
}

function isQuestion(message) {
  // Verifica si el último carácter del mensaje es un signo de interrogación
  return message.endsWith('');
}

// Agrega 4 mensajes iniciales al cargar la página
const initialMessages = [
  { message: "¡Hola! ¿En qué puedo ayudarte?", isUser: false }
];

for (const message of initialMessages) {
  addMessageToHistory(message.message, message.isUser);
}
