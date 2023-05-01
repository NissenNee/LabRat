// Variables
const inputField = document.querySelector("#userInput");
const main = document.querySelector("main");
let userInput = [];

// Blinking square
const square = document.querySelector(".fa-square");
setInterval(function() {
    square.classList.toggle("blink");
}, 600);

// Insert text
const addText = (text) => {
    let paragraph = document.createElement("p"); // Lav en paragraph
    paragraph.innerText = text;
    main.appendChild(paragraph);
    main.lastChild.scrollIntoView();
}

// Objects

// const backpack = {
//     pokemon: ["Pikachu"],
//     pokeballCount: 2,
//     berryCount: 0,
//     seeBackpack: function() {
//         this.pokemon.forEach(item => {
//             addText(item)
//         });
//         addText(`Pokeballs: ${this.pokeballCount}`);
//         // addText("Pokeballs: " + this.pokeballCount);
//         addText(`Berries: ${this.berryCount}`);
//     }
// }

// Functions
const whatToDo = (userInput) => {
    switch(userInput) {
        case "help":
            addText("To give a command, you write the command using the keyboard and press enter. Possible commands include 'yes', 'no', 'maybe', and 'inspect' and 'use' plus the object you want to 'inspect' or 'use'.");
            break;
        case "backpack":
        case "storage":
            backpack.seeBackpack();
            break;
        case "yes":
            addText("Ok");
            break;
        case "no":
            addText("Oh ok");
            break;
        default: 
            addText("Sorry");
    }
}

// Keyboard event
document.addEventListener("keydown", (e) => {
    switch(true) {
        case e.code.startsWith("Key"):
        case e.code === "Space":
            userInput.push(e.key);
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Backspace":
            userInput.pop();
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Enter":
            addText(userInput.join(""));
            whatToDo(userInput.join("").toLowerCase()); // Send userInput.join('') til den funktion, der skal håndtere det.
            userInput = []; // Nulstil userInput arrayet.
            inputField.innerHTML = ""; // Ryd tekstfeltet.
        break;
        default:
            // Do nothing
    }
})