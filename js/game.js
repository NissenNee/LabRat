// Variables
const inputField = document.querySelector(`#userInput`);
const main = document.querySelector(`main`);
let userInput = [];

// Blinking square
const square = document.querySelector(`.fa-square`);
setInterval(function() {
    square.classList.toggle(`blink`);
}, 600);

// Insert text
const addText = (text) => {
    let paragraph = document.createElement(`p`);
    paragraph.innerText = text;
    main.appendChild(paragraph);
    main.lastChild.scrollIntoView();
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Objects


// (availableRoom eks. "5/10", items eks. "piece of metal")


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
//    }
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Switch Functions
// const whatToDo = (userInput) => {
//     switch(userInput) {
        
//         case `start`:
//             addText(`Welcome to "LabRat", a text-based game that puts you in the shoes of an unwilling subject in a crazy experiment. 
//             Your goal is to escape the lab, but it won´t be easy. The mad scientists running the experiment have put a series of bizarre and dangerous puzzles and challenges in your way. You'll have to use your wits and your problem-solving skills to solve these and make your way out of the lab.
//             Along the way you will meet other participants trapped in the lab with you. Helping them might help you. But be careful! Not everyone can be trusted. Will you be able to outsmart the challenges and escape? There´s only one way to find out.
            
//             Are you ready to start?
            
//             *Write your response in the green box and press enter.`)
//             break;
           
        // case `help`:
        //     addText(`To give a command, write the command using the keyboard and press enter.
            
        //     Possible commands include "yes", "no", "maybe", as well as "inspect" and "use" plus the object you want to "inspect" or "use".`);
        //     break;
        
        // case `yes`:
        //     addText(`You find yourself lying on a metal gurney in a cold, sterile room with seemingly no windows or doors. The walls are made of large metal plates, and the only source of light comes from a single fluorescent lightbulb dangling from the ceiling. You try to remember how you got here, but your memory is fuzzy. What do you do?
            
        //     *You can use inspect to get a closerstart look at things.`);
        //     break;
       
        // case `no`:
        //     addText(`Hmph! Alright then. If you don’t want to play, then why are you even here!? Go do something more “valuable” with your time then!
        //     ...I´m sorry! I got a little grumpy there. Come back when you’re ready to start.`);
        // break;

        // case `maybe`:
        //     addText(`What do you mean maybe! What kind of answer is that!
        //     Are you perhaps scared?
        //     Well, it is going to be a real challenge solving those mind-bending puzzles. So, if you’re not ready, then I guess you can just cower in fear like a pathetic lab rat! 

        //     ...I apologize. I promise I’m working on my temper.
        //     Perhaps you need some instructions?
        //     Then you simply need to write "help" and press enter.
                
        //     Otherwise you can write start and press enter, when youre ready to begin the game.`)
        // break;

        // case `inspect`:
        //     addText(`Inspecting...inspecting...inspecting...
        //     Inspect what? You’ll have to be more specific.`)
        // break;

        // case `inspect self`:
        //     addText(`You take a closer look at yourself and what you are wearing. You´re wearing a blue hospital gown. There´s a nametag clipped onto the chest pocket and the trousers has pockets.`)
        // break;

        // // case `inspect nametag`:
        // //     addText(``)
        // // break;

        // // case `inspect pockets`:
        // //     addText(``)
        // // break;

        // case `inspect gurney`:
        //     addText(`The gurney looks old. It has small spots of rust on the legs and the leather mattress on top looks worn. 
        //     You notice a piece of metal sticking out from under the mattress.`)
        // break;

        // case `inspect piece of metal`:
        // case `take piece of metal`:
        //     addText(`You pick up the piece of metal. It is flat but pointed in one end, about a centimeter’s width and the length of your middle finger.
        //     Do you keep it or leave it?`)

        // // case `keep it`:
        // //     addText(`You put the piece of metal in your pockets.
                
        // //     What will you do next?`)
        // // break;

        // case `leave it`:
        //     addText(`Okay. That’s your choice. But you never know if it might come in handy later. 
        //     Objects you find along the way could prove useful later. Of course, you only have so much space in your pockets so it’s up to you asses what you think you might need.
            
        //     What will you do next?`)
        // break;

        // case `inspect ceiling`:
        //     addText(`You look op at the ceiling. In the middle of the ceiling is the fluorescent lightbulb. The ceiling is a cold white color, but you still almost miss the tiny camera in the corner. Someone must be watching you.

        //     What will you do next?`)
        // break;

        // case `inspect lightbulb`:
        //     addText(`The fluorescent lightbulb flickers gently. A lost fly flies lazily around the lightbulb. You don’t see any light switches, but if you wanted to turn of the light, then you could probably use the gurney to reach the lightbulb and turn it.`)
        // break;

        // case `turn off the light`:
        // case `turn off light`:
        //     addText(`You push the gurney to right under the lightbulb and step up on it. You hesitate a second, but then turn the lightbulb.
        //     It gets completely dark. Well, not completely. You notice a small outline of light on one of the walls.`)
        // break;
        
        // // case `inspect walls`:
        // //     addText(``)
        // // break;

        // // turn on the light

        // default: 
        //     addText(`Sorry, I don´t understand?
            
        //     *If you need help, use the "help" command by writing help with the keyboard and pressing enter.`);
//     }
// }

  
// Conditional statements



// Keyboard event
document.addEventListener(`keydown`, (e) => {
    switch(true) {
        case e.code.startsWith(`Key`):
        case e.code === `Space`:
            userInput.push(e.key);
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === `Backspace`:
            userInput.pop();
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === `Enter`:
            addText(userInput.join(``));
            whatToDo(userInput.join(``).toLowerCase()); // Send userInput.join('') til den funktion, der skal håndtere det.
            userInput = []; // Nulstil userInput arrayet.
            inputField.innerHTML = ``; // Ryd tekstfeltet.
        break;
        default:
            // Do nothing
    }
})