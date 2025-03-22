let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    // speakInput.rate = 1;
    // speakInput.pitch = 1;
    // speakInput.volume = 1;
    speakInput.lang = 'en-IN';
    window.speechSynthesis.speak(speakInput);
};

window.onload = () =>{
    //   speakFunc("Hello Sir");
    //   greetingFunc();
};


const greetingFunc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour >=0 && hour < 12){
        speakFunc("Good Morning, How can I help you!");
    }else if(hour >= 12 && hour < 16){
        speakFunc("Good afternoon, How can I help you!");
    }else{
        speakFunc("Good evening, How can I help you!");
    }
};


const startVoiceInput = ()=>{
    if('webkitSpeechRecognition' in window){
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) =>{
           let spokenText = e.results[0][0].transcript;
           handleCommands(spokenText.toLowerCase());
           box.classList.remove("btn-box");
           btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recognition.start();
    }else{
        alert("Your Browser does not support voice input!");
    }
    

};
btn.onclick = ()=>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
};

const handleCommands = (command) =>{
    if(command.includes("hellow") || command.includes("hey") || command.includes("hi")){
        speakFunc("Hello Sir, how can I help you!");
    }
    else if(command.includes("what is your name") || command.includes("name")){
        speakFunc("Hello Sir, I am Virtual Assistant");
    }
    else if(command.includes("hlo good morning") || command.includes("good morning")){
        speakFunc("Hello Sir Good Morning, how can I help you!");
    }
    else if(command.includes("who are you") || command.includes("tell me about you") || command.includes("hu r u")){
        speakFunc("I am Virtual Assistant, Developed by Rinku Balai");
    }
    else if(command.includes("hlo how are you") || command.includes("how are you")){
        speakFunc("I am fine, What about you and How can i help you");
    }
    else if(command.includes("open github") || command.includes("github")){
        speakFunc("Opening... Github");
        window.open("https://github.com/rinku-hub15")
    }
    else if(command.includes("open linkedin") || command.includes("linkedin")){
        speakFunc("Opening... linkedin");
        window.open("https://www.linkedin.com/in/rinku-balai-8b196228b");

    }
    else if(command.includes("calculator") || command.includes("open calculator")){
        speakFunc("Opening... calculator");
        window.open("calculator://");
    }
    else if(command.includes("tell me time") || command.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'});
        speakFunc(time);
    }
    else if(command.includes("tell me date") || command.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:'numeric',month:'long'});
        speakFunc(date);
    }
    else if(command.includes("open chat gpt") || command.includes("chat gpt")){
        speakFunc("Opening... chatgpt");
        window.open("https://chatgpt.com/");
    }
    else if(command.includes("open facebook") || command.includes("facebook")){
        speakFunc("Opening... facebook");
        window.open("https://www.facebook.com");
    }
    else if(command.includes("open google") || command.includes("google")){
        speakFunc("Opening... google");
        window.open("https://www.google.com");
    }
    else if(command.includes("open youtube") || command.includes("youtube")){
        speakFunc("Opening... youtube");
        window.open("https://www.youtube.com");
    }
    else if(command.includes("open instagram") || command.includes("instagram")){
        speakFunc("Opening... instagram");
        window.open("https://www.instagram.com");
    }
    else{
        speakFunc(`This is, What I found on internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }

};