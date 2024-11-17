function speakRandomMessage() {
    const speechDiv = document.getElementById('speech');
    const catDiv = document.getElementById('cat');

    const messages = [
        "Hello there!",
        "How are you?",
        "Meow!",
        "I'm a talking cat!",
    ];

    // Get a random message from the array
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    // Display the message
    speechDiv.textContent = message;

    // Add animation to the cat div (optional)
    catDiv.classList.add('animate');

    // Remove the animation class after a delay
    setTimeout(() => {
        catDiv.classList.remove('animate');
    }, 1000);

    // Use the Web Speech API to speak the message
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.onend = () => {
        // Remove animation class after speaking ends
        catDiv.classList.remove('animate');
    };
    speechSynthesis.speak(utterance);
}

function speakAnswer() {
    const userQuestionInput = document.getElementById('userQuestion');
    const userQuestion = userQuestionInput.value.trim().toLowerCase();

    if (userQuestion) {
        const answerDiv = document.getElementById('answer');

        // Simple predefined question-answer pairs
        const qaPairs = {
            "hi":"hello,dear",
            "what is your name?": "I'm snowbell the Cat!",
            "how are you?": "I'm doing great, thanks!",
            "where do you live?": "I live in a cozy little house.",
            "do you like fish?": "Yes, I love fish!",
            "tell me a joke": "Why did the cat sit on the computer? Because it wanted to keep an eye on the mouse!",
            "sing a song":"meow! meow! mewo meow meow!!hahaha",
            "what is your fav food":"fish!!!!!!",
            "i am sad":"ho,sorry to listen, let me tell you a joke dear!",
            "who is your creator":"Princess karishma,the angel!",
            "who is your idiol":"Malathi Reddy mam",
            "why computer go to doctor?":"because it had a virus",
            "are you married":"no,i'm not married I'm a virtual friend",
            "how is megha carnival":"meow",
            "bye":"Nice taking to you,thank you!!",
            "will you help me?":"Ofcourse i'm always here to help you dear!",
            "telugu song plz":"Priyaaaa Priyaaaaa Champoddheeee… Navveeeee Nanneeee Munchoddheeeeee"
        
            // Add more question-answer pairs as needed
        };

        // Check if there is a predefined answer for the user's question
        const answer = qaPairs[userQuestion] || "I'm not sure about that. Ask me something else!";

        // Display the answer
        answerDiv.textContent = answer;

        // Use the Web Speech API to speak the answer
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(answer);
        utterance.onstart = () => {
            // Add animation class when speaking starts
            catDiv.classList.add('animate');
        };
         // Set a higher pitch for a childlike voice
         utterance.pitch = 2; // Experiment with different values (1 is the default)

         // Set a different voice for the cat
         const voices = speechSynthesis.getVoices();
         const childlikeVoice = voices.find(voice => voice.name.includes('High'));
         utterance.voice = childlikeVoice;
 
         speechSynthesis.speak(utterance);
         function speakAnswer() {
            const userQuestion = document.getElementById('userQuestion').value;
            const answer = "I'm a cat, not a fortune teller!";
            const voicesSelect = document.getElementById('voice-select');
            const selectedVoiceIndex = voicesSelect.value;
        
            const utterance = new SpeechSynthesisUtterance(answer);
            const voices = window.speechSynthesis.getVoices();
        
            if (selectedVoiceIndex >= 0 && selectedVoiceIndex < voices.length) {
                utterance.voice = voices[selectedVoiceIndex];
            }
        
            window.speechSynthesis.speak(utterance);
        }
        
    }
}
