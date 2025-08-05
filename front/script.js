const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");
const chatbox = document.querySelector(".chatbox");
const p = document.querySelector("p");



function create_message(type){
  const message = document.createElement("li")
  const message_text = document.createElement("p")
  if(type == "incoming"){
    message.classList.add("chat-outgoing")
    message_text.innerHTML = chatInput.value
    chatInput.value=""
  } if(type == "outgoing"){
    message.classList.add("chat-incoming")
    eel.message_py(chatbox.lastElementChild.lastElementChild.innerHTML)(function(number){message_text.innerHTML = number})
  } if(type == "first-outgoing"){
    message.classList.add("chat-incoming")
    message_text.innerHTML = "Привет как я могу тебе помочь?"
    //eel.first_message_py()(function(number){message_text.innerHTML = number})
  }
  chatbox.appendChild(message)
  message.appendChild(message_text)
  message.classList.add("chat")
}
sendChatBtn.onclick=function(){create_message("incoming"), create_message("outgoing"), chatbox.scrollTop = chatbox.scrollHeight;}
create_message("first-outgoing")