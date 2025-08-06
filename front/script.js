const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");
const chatbox = document.querySelector(".chatbox");
const p = document.querySelector("p");


function create_incoming_message(){
  if (chatInput.value == ""){return 0}
  const message = document.createElement("li")
  const message_text = document.createElement("p")
  message.classList.add("chat-outgoing")
  message_text.innerHTML = chatInput.value
  chatInput.value=""
  chatbox.appendChild(message)
  message.appendChild(message_text)
  message.classList.add("chat")
  return 1
}

function create_outgoing_message(){
  eel.message_py(chatbox.lastElementChild.lastElementChild.innerHTML)(function(number){
    if (number == ""){return 0}
    const message = document.createElement("li")
    const message_text = document.createElement("p")
    message.classList.add("chat-incoming")
    chatbox.appendChild(message)
    message.appendChild(message_text)
    message.classList.add("chat")
    message_text.innerHTML = number
  })
}

function create_first_incoming_message(){
  eel.first_message_py()(function(number){
    if (number == ""){return 0}
    const message = document.createElement("li")
    const message_text = document.createElement("p")
    message.classList.add("chat-incoming")
    chatbox.appendChild(message)
    message.appendChild(message_text)
    message.classList.add("chat")
    message_text.innerHTML = number
  })
}

sendChatBtn.onclick=function(){
  create_incoming_message()?create_outgoing_message():0; chatbox.scrollTop = chatbox.scrollHeight;
}

create_first_incoming_message()