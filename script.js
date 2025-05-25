const start_sentence = document.querySelector("#start-sentence");
const end_sentence = document.querySelector("#result");
const text_input = document.querySelector("#text-input");
const button = document.querySelector("#button");

let startTime, endTime, totalTime;
let currentQuote = "";

async function startTyping() {
    const URL = 'https://api.quotable.io/random';
    let response = await fetch(URL);
    let data = await response.json();
    currentQuote = data.content;
    start_sentence.innerText = currentQuote;
    button.innerText = "Done";
    text_input.disabled = false;
    text_input.value = "";
    text_input.focus();
    startTime = new Date().getTime();
}

function endTyping() {
    endTime = new Date().getTime();
    totalTime = (endTime - startTime) / 1000;

    const typedText = text_input.value;

    if (typedText === currentQuote) {
        end_sentence.style.color = "green";
        const wordsTyped = typedText.trim().split(/\s+/).length;
        const wpm = Math.round((wordsTyped / totalTime) * 60);

        end_sentence.innerText = `✅ You typed: "${typedText}"\n💨 Speed: ${wpm} WPM\n⏱ Time: ${totalTime.toFixed(2)} seconds`;
        start_sentence.value = disabled;
    } else {
        end_sentence.style.color = "red";
        end_sentence.innerText = `❌ Try Again!\nYou typed: "${typedText}"\nExpected: "${currentQuote}"`;
        
    }

    button.innerText = "Start Game";
    text_input.value = disabled = true;
    text_input.disabled = true;
}

button.addEventListener("click", () => {
    if (button.innerText.toLowerCase() === "start game") {
        startTyping();
    } else if (button.innerText.toLowerCase() === "done") {
        endTyping();
    }
});
