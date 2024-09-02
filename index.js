const EnterMassege = document.getElementById("InputBox");
const SendButton = document.getElementById("SendButton");
const ComeMsg = document.getElementById("Come");
const SendMsg = document.getElementById("OutgoingChat");
const OutPutInfo = document.getElementById("IncomingChat");
const UserInput = document.getElementById("UserInput");
const apiKey = 'sk-proj-TDS9rLPd0HbLxjDjaC7CT3BlbkFJmdFSaY4QvEqf1KXnnIyi';
const Append = document.getElementById("MainContent")
const ResetButton = document.getElementById("ResetButtonOne");



function SendMassage(){
    let UserMassage = EnterMassege.value;
    let cHATbOTmassage = ComeMsg.innerText;
    AppendFunc();
    // console.log(UserMassage);
}

ResetButton.addEventListener("click",()=>{
    OutPutInfo.innerText = "";
})

Work();

function Work(){


SendButton.addEventListener("click",()=>{
  if(EnterMassege === null){
    console.log("Please Enter A Massage")
    alert("PLease Enter some Input");
  }else{
    let InputMsg =document.createElement('span');
    let OutPutMsg = document.createElement('li');
    let m = EnterMassege.value;
    let p = m.toLowerCase();
    // let r = OURchatBotDAta(p);
    // OURchatBotDAta(p).then(response => {
    //     OutPutMsg.innerText = response;
    // })
    let r = generateResponse(p);
    // generateResponse(p).then(response => {
    //     OutPutMsg.innerText = response;
    // })
    // const Res = generateResponse();
  OutPutMsg.innerText = r;
    OutPutInfo.appendChild(InputMsg);
    OutPutInfo.appendChild(OutPutMsg);
    InputMsg.innerText = EnterMassege.value;
  //  UserInput.appendChild(InputMsg);
    EnterMassege.value = "";
    let t = EnterMassege.value;
    // EnterMassege.addEventListener("submit",()=>{
    //     OutPutMsg.innerText = Dataa;   
    // })
    //         function Getdata(Dataa){
}      
})
}

function AppendFunc(){

}

function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      "I'm here to assist you with any questions or concerns you may have. 📩",
      "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
      "What would you like to know? 🤔",
      "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
      "Is there anything specific you'd like to talk about? 💬",
      "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
      "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
      "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }


async function fetchApi() {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const data = {
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: "You Are Not A Good But Yahh You Are Good One"
      },
      {
        role: "user",
        content: "How Are You Our New ChatBot"
      }
    ]
  };
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
 //   messageContent = responseData.choices[0].message.content;
    console.log(responseData);
  } catch (error) {
    console.error(error);
    let p = "You exceeded your current quota, please check your…rm.openai.com/docs/guides/error-cod"

    Getdata(p)
  }
}



 