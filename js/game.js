// Variables
const inputField = document.querySelector(`#userInput`);
const main = document.querySelector(`main`);
const square = document.querySelector(`.fa-square`);
const items = [`nametag`, `metal piece`]

let userInput = [];

let inventory = {
    space: 5,
    spaceUsed: 1,
    availableSpace: 4,
    items: [`nametag`]
}

const hints = {
    hint1: `*To use a command: Type the command using the keyboard and press enter.`,
    hint2: `*Use the command "help" if you need instructions`,
    hint3: `*You can use the command "start" to go to the start of the game`,
    hint4: `*You can use the command "inspect" to get more information.`,
    hint5: `*To use the command "inspect": Type "inspect" and the thing you want to inspect.`,
    hint6: `*You can use the command "use" to utilize an item.`,
    hint7: `*To use the command "use": Type "use" and the thing you want to use.`,
    hint8: `*items can be used to solve puzzles, unlock locations and solve dangerous situations`,
    hint9: `*If your pockets are full and you want to add an item, you can use the command "drop" to dropand item from your pockets.`,
    hint10: `*to use the command "drop": Type "drop" and the item you want to drop`
}

const commands = [
    `start`,
    `yes`, 
    `no`, 
    `maybe`, 
    `help`, 
    `inspect`, 
    `inspect self`, 
    `inspect gurney`, 
    `inspect ceiling`, 
    `inspect lightbulb`, 
    `inspect walls`, 
    `inspect nametag`, 
    `inspect pockets`,
    `take metal piece`, 
    `drop metal piece`, 
    `turn off the light`,
    `turn on the light`,
    `use violence`,
    `use piece of metal`,
    `use nametag`,
];

const txt = {
    introTxt: 
        `Welcome to "LabRat", a text-based game that puts you in the shoes of an unwilling subject in a crazy experiment. 
        Your goal is to escape the lab, but it won´t be easy. 
        The mad scientists running the experiment have put a series of bizarre and dangerous puzzles and challenges in your way. You'll have to use your wits and your problem-solving skills to solve these and make your way out of the lab. 
        Along the way you will meet other participants trapped in the lab with you. Helping them might help you. But be careful! Not everyone can be trusted. 
        Will you be able to outsmart the challenges and escape? There´s only one way to find out. 
        Are you ready to start?`,
    yesTxt: {
        txt1: 
            `You find yourself lying on a metal gurney in a cold, sterile room with seemingly no windows or doors. 
            The walls are made of large metal plates, and the only source of light comes from a single fluorescent lightbulb dangling from the ceiling. 
            You try to remember how you got here, but your memory is fuzzy. 
            What do you do?`,
        txt2: 
            `Yes? What are you saying yes to? 
            You can´t say yes to that`,
    },
    noTxt: {
        txt1:
            `Hmph! Alright then. If you don’t want to play, then why are you even here!? Go do something more “valuable” with your time then! 
            ...I´m sorry! I got a little grumpy there. 
            Come back when you’re ready to start.`,
        txt2:
            `No? What are you saying no to? 
            You can´t say no to that.`,
    },
    maybeTxt: {
        txt1: 
            `What do you mean maybe! What kind of answer is that! Are you perhaps scared? Then I guess you can just cower in fear like a pathetic lab rat! 
            ...I apologize. I promise I’m working on my temper. 
            Perhaps you need some instructions?`,
        txt2: `Maybe? What are you saying maybe to? You can´t say maybe to that`,
        },
    inspectTxt: 
        `Inspecting...inspecting...inspecting...Inspect what? You’ll have to be more specific.`,
    selfTxt:
        `You take a closer look at yourself and what you are wearing. You´re wearing a blue hospital gown. There´s a nametag clipped onto the chest pocket and the trousers has pockets.`,
    nametag: 
        `You look at the nametag. On the front is your name, your age and your gender. On the back is a barcode`,
    pockets: {
        txt1: `You´re pockets are empty`,
        txt2: `Your pockets are full. You can't carry any more items.`
    },
    gurneyTxt: {
        txt1: 
            `The gurney looks old. It has small spots of rust on the legs and the leather mattress on top looks worn. 
            You notice a metal piece sticking out from under the mattress.`,
        txt2: `The gurney looks old. It has small spots of rust on the legs and the leather mattress on top looks worn.`
    },
    metalTxt: 
        `You pick up the metal piece. It is flat but pointed in one end, about a centimeter’s width and the length of your middle finger. 
        Do you take it or drop it?`,
    keepTxt: 
        `You put the piece of metal in your pockets. 
        What will you do next?`,
    leaveTxt:
         `Okay. That’s your choice. But you never know if it might come in handy later. 
         Objects you find along the way could prove useful later. Of course, you only have so much space in your pockets so it’s up to you asses what you think you might need. 
         What will you do next?`,
    ceilingTxt: 
        `You look op at the ceiling. In the middle of the ceiling is the fluorescent lightbulb. The ceiling is a cold white color.  You almost miss the tiny camera in the corner. Someone must be watching you.`,
    lightbulbTxt:
        `The fluorescent lightbulb flickers gently. A lost fly flies lazily around the lightbulb. You don’t see any light switches, but if you wanted to turn of the light, then you could probably use the gurney to reach the lightbulb and turn it.`,
    turnOffTxt: 
        `You push the gurney to right under the lightbulb and step up on it. You hesitate a second, but then turn the lightbulb. It gets completely dark. Well, not completely. You notice a small outline of light on one of the walls.`,
    turnOnTxt: 
        `Good thinking! That is probably a good idea. Otherwise, you might have gotten hurt groping around in the dark.
        You turn the lightbulb. The bright fluorescent light flickers back on. It blinds you for a second.
        What will you do next?`,
    wallsTxt: {
        txt1:
            `You go over to the walls. 
            The metal plates feels cold to touch. They seem to be bolted together. Some of the bolts look newer indicating, that the walls might have been modified or replaced at some point. 
            There seems to be a pattern with the new bolts outlining a rectangle the size of a door. You look closer and there se that there´s a very thin uninterrupted line. There might actually be a door. But you dont se a door handle anywhere. 
            You continue inspecting the walls and notice small scratch marks on the surface a couple places. 
            Around a smaller metal plate there is thin crack full of scratches. It looks like someone else has tried to get the plate loose. 
            The crack is to small for your fingers but maybe if you had something thin and flat, you could get it in there. 
            What will you do next?`,
        txt2:
            `Auch! while you get down from the gurney, you trip in the dark and hurt yourself. Perhaps you should have turned on the light before you stepped down. You grope your way through the dark over to the walls. The walls feel cold and some places, it feels scratchy. Touching the outline of light. You feel lots of small scrathes and a more defined crack. The crack is too small for your fingers, but maybe if you had something thin and flat, you could get it in there.`,
    },
    useTxt: {
        txt1: `Seriously!? Violence isn’t always the answer. The walls are made of metal, so you hurt your hands. You think you might have broken a finger. Good job, dummy!`,
        txt2: `You remember the nametag clipped onto your chest pocket. You pull it out at use it to you dig out a small plate. But you damage the nametag in the process. Behind the plate you see a barcode scanner.`,
        txt3: `you remember the metal piece you found, which is currently in your pockets. You pull it out at use it to you dig out a small plate. Behind the plate you see a barcode scanner.`,
        txt4: 
            `You take of your nametag and hold the barcode to the scanner. It beeps. A couple of seconds pass and you start to wonder if it even did anything. Suddenly you hear a loudspeaker crackle to life. "Attention, subjects," a voice booms out. "You have been so lucky to be chosen to participate in a groundbreaking experiment. Your goal doing this experiment is simple: exit the building. Sounds easy right? However, you will have to find the exit first and that won’t be so easy. I have designed a series of funny little games for you to enjoy, as you search for the exit. All designed to test your problem-solving skills. Let the fun begin." You hear a mechanical whirring sound and suddenly, a previously hidden metal door slides open to reveal a long hallway. You realize that you’re not alone in this experiment, as you see other participants emerging from other rooms and making their way down the hallway. The voice on the loudspeaker continues, "The rules are as following. There are no rules. But don’t forget to have fun. I certainly will!” Now your real struggles begin.
        
            Thank you for playing our demo! 
            I hope you had fun!`            
    },
    gameOverTxt: {
        txt1: `Hah! Nice try! but it didn’t work. You are trapped. Do you want to start over?`,
        txt2: 
            `Fine! Be like that! What a sore loser. You’re no fun at all! 
            ...Sorry! I really need to get a hold on my temper. Stopping is completely op to you. 
            Thank you for playing.`
    },
}

// Functions
const whatToDo = (input) => {
    switch (input) {
        case 'help':
            help.displayHints();
            help.displayCommands();
        break;
        case `start`:
            addText(txt.introTxt);
        break;
        case 'yes':
            if(!txt.introTxt) {
                addText(txt.yesTxt.txt2);
                addText(hints.hint2);
            }   
            else {
            addText(txt.yesTxt.txt1); 
            addText(hints.hint4); 
            }
        break;
        case 'maybe':
            addText(txt.maybeTxt.txt1);
            addText(hints.hint2);
        break;
        case 'no':
            addText(txt.noTxt.txt1);
            addText(hints.hint3)
        break;
        case 'inspect':
            addText(txt.inspectTxt);
            addText(hints.hint5);
        break;
        case 'inspect self':
            addText(txt.selfTxt);
        break;
        case 'inspect nametag':
            addText(txt.nametag);
            addText(hints.hint8);
        break;
        case 'inspect pockets':
            displayInventory();
        break;
        case 'inspect gurney':
            if (!inventory.items.includes('metal piece')) {
                addText(txt.gurneyTxt.txt1);
            } 
            else {
                addText(txt.gurneyTxt.txt2);
            }
        break;
        case 'take metal piece':
            if (inventory.availableSpace > 0 && !inventory.items.includes('metal piece')) {
                addText(txt.keepTxt);
                inventory.items.push('metal piece');
                inventory.spaceUsed++;
                inventory.availableSpace--;
            } 
            else if (inventory.availableSpace === 0) {
                addText(txt.pockets.txt2);
                addText(hints.hint9);
            } 
            else {
                addText(`You already have the metal piece in your pockets.`);
              }
        break;
        case 'drop metal piece':
            addText(txt.leaveTxt);
            addText(hints.hint8);
        break;
        case 'inspect ceiling':
            addText(txt.ceilingTxt);
        break;
        case 'inspect lightbulb':
            addText(txt.lightbulbTxt);
        break;
        case 'turn off the light':
        case `turn off light`:
            addText(txt.turnOffTxt);
        break;
        case `turn on the light`:
        case `turn on light`:
            addText(txt.turnOnTxt);
        break;
        case `inspect walls`:
            addText(txt.wallsTxt.txt1)
            addText(hints.hint7);
        break;
        case `use metal piece`:
            addText(txt.useTxt.txt3);
        break;
        case `use nametag`:
            addText(txt.useTxt.txt4);
            addText(`If you have some time, then please answer our survey. Just press the button in the top right corner of the page`)
        break;
        
        default:
            addText('sorry, I dont understand? Do you need help?.');
            addText(hints.hint2);
    }
  };

const help = {
    displayHints: () => {
      Object.values(hints).forEach((hint, index) => {
        addText(`Hint ${index + 1}: ${hint}`);
      });
    },
    displayCommands: () => {
      addText("Available Commands:");
      commands.forEach((command) => {
        addText(`- ${command}`);
      });
    }
  };

const displayInventory = () => {
    if (inventory.items.length === 0) {
      addText(txt.pockets.txt1);
    } 
    else {
      addText("You have:");
      inventory.items.forEach((item) => {
        addText(`- ${item}`);
      });
    }
    addText(`Space Used: ${inventory.spaceUsed}/${inventory.space}`);
    addText(hints.hint8);
};

// hvis inventory er fuld
addItem = () => {
    if (inventory.availableSpace === 0) {
        addText(txt.pockets.txt2);
        addText(hints.hint9)
    }
}

// Blinking square
setInterval(function() {
    square.classList.toggle(`blink`);
}, 600);

// Insert text
const addText = (text) => {
    let paragraph = document.createElement(`p`);
    if (text.startsWith('*')) {
        paragraph.style.color = '#FF0000';
      }
    paragraph.innerText = text;
    main.appendChild(paragraph);
    main.lastChild.scrollIntoView();
}

// Keyboard event
document.addEventListener(`keydown`, (e) => {
    switch(true) {
        case e.code.startsWith(`Key`):
        case e.code === `Space`:
            userInput.push(e.key);
            inputField.innerHTML = userInput.join(``);
        break;
        case e.code === `Backspace`:
            userInput.pop();
            inputField.innerHTML = userInput.join(``);
        break;
        case e.code === `Enter`:
            addText(userInput.join(``));
            whatToDo(userInput.join(``).toLowerCase());
            userInput = []; 
            inputField.innerHTML = ``; 
        break;
        default:
            // Do nothing
    }
})