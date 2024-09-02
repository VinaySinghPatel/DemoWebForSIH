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
      "Right to Information Act, 2005: Allows citizens to request information from public authorities, promoting transparency and accountability in government.",
      "Consumer Protection Act, 2019: Protects the rights of consumers by providing a mechanism for addressing grievances related to goods and services.",
      "Information Technology Act, 2000: Governs cyber activities, addressing issues like cybercrime, digital signatures, and electronic commerce.",
      "Indian Penal Code (IPC), 1860: The primary criminal code in India, covering various offenses including theft, assault, and murder.",
      "Goods and Services Tax (GST) Act, 2017: Overhauled India's tax system by introducing a single tax on the supply of goods and services across India.",
      "Prevention of Corruption Act, 1988: Addresses corruption in public offices, laying down strict penalties for corrupt practices.",
      "Indian Contract Act, 1872: Governs contracts in India, outlining the formation, performance, and enforcement of contracts.",
      "Environmental Protection Act, 1986: Provides the framework for the protection and improvement of the environment in India.",
      "Motor Vehicles Act, 1988: Regulates all aspects of road transport vehicles, including licensing, registration, and traffic regulations.",
      "Indian Evidence Act, 1872: Provides rules and guidelines for the admissibility of evidence in courts of law.",
      "Juvenile Justice (Care and Protection of Children) Act, 2015: Deals with the care, protection, and rehabilitation of children in conflict with the law.",
      "Hindu Marriage Act, 1955: Governs the marriage and divorce of Hindus in India, providing legal grounds and procedures for both.",
      "Code of Criminal Procedure (CrPC), 1973: Lays down the procedure for the administration of criminal law in India, including the process for arrests, investigations, and trials.",
      "Companies Act, 2013: Regulates the incorporation, responsibilities, and dissolution of companies in India.",
      "Arbitration and Conciliation Act, 1996: Provides a legal framework for resolving disputes outside of court through arbitration and conciliation.",
      "Payment of Wages Act, 1936: Ensures timely payment of wages to workers and outlines the conditions under which deductions can be made.",
      "Trade Marks Act, 1999: Protects trademarks and prevents their unauthorized use, promoting brand protection in India.",
      "Foreign Exchange Management Act (FEMA), 1999: Regulates foreign exchange transactions and facilitates external trade and payments.",
      "National Green Tribunal Act, 2010: Establishes a special tribunal for the expeditious resolution of environmental cases in India.",
      "Protection of Women from Domestic Violence Act, 2005: Provides protection to women from domestic violence and outlines the rights of victims."
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



 