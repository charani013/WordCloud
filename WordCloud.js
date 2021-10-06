let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let worldContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
for (let eachItems of wordCloud) {
    let randomNumber = Math.ceil(Math.random() * 50);
    let stringR = randomNumber + "px";
    let createElementSpan = document.createElement("span");
    createElementSpan.textContent = eachItems;
    createElementSpan.style.fontSize = stringR;
    wordsContainer.appendChild(createElementSpan);
}

function addButtonClicked() {
    let userInputValue = userInput.value;
    if (userInputValue === "") {
        errorMsg.textContent = "please enter a word";

    } else {
        let createElementSpans = document.createElement("span");
        createElementSpans.textContent = userInputValue;
        createElementSpans.style.fontSize = "20px";
        wordsContainer.appendChild(createElementSpans);

        userInput.value = ""
    }

}