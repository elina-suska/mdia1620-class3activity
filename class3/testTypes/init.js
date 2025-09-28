
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Title for the bot
const title = "STORY BOT";

// Initialize variables
let myName = "Guest12345";  // Default name if user doesn't provide one
let chatCount = 0;          // Counter to track how many times the user has chatted
let friendName = "Alex"; // Name of the user's friend
let monsterName = "Gorgon"; // Name of a monster in the story

/**
 * Function that check if the user wants to exit the chat
 * If the user types "exit", it ends the chat and shows how many times they've chatted
 * Otherwise, it returns true to continue the conversation
 * @param {string} input - The user's input
 * @returns {boolean} - Returns false if the user wants to exit, true otherwise
 */
function CheckResponse(input) {
  chatCount = chatCount + 1;
  
  if (input.toLowerCase() === 'exit') {
    console.log("Thanks for chatting with me, " + myName + ". Bye!"); // Farewell message
    console.log("You owe me " + chatCount + " dollars."); // Show how many times they've chatted
    readline.close(); // Close the input stream to end the program
    return false;
  }
  return true;
}

/**
 * Function starts the storytelling sequence
 */
function TellStory() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  AskName();
}

/**
 * Function to ask for the user's name before starting the conversation
 */
function AskName() {
  // Ask the user for their name (or to enter to continue or type "exit" to quit)
  readline.question('Hello, let me tell you a story. What is your name, hero? ', input => {
    myName = input;
    AskFriendName();
  });
}

function AskFriendName() {
  readline.question('What is the name of your friend? ', input => {
    friendName = input;
    AskMonsterName();
  });
}

function AskMonsterName() {
  readline.question('What is the name of the monster? ', input => {
    monsterName = input;
    StoryPart1();
  });
}

function StoryPart1() {
  readline.question('Once upon a time, ' + myName + ' was at the beach. (enter to continue or type "exit" to quit): ', input => {
    if (CheckResponse(input)) {
      return StoryPart2();
    }
  });
}

function StoryPart2() {
  readline.question('Suddenly, ' + myName + ' saw a big shadow in the water. It was ' + monsterName + '! (enter to continue or type "exit" to quit): ', input => {
    if (CheckResponse(input)) {
      return StoryPart3();
    }
  });
}

function StoryPart3() {
  readline.question(monsterName + ' was chasing ' + friendName + '! (enter to continue or type "exit" to quit): ', input => {
    if (CheckResponse(input)) {
      return StoryPart4();
    }
  });
}

function StoryPart4() {
  readline.question('But ' + myName + ' was brave and fought ' + monsterName + ' with a big stick! (enter to continue or type "exit" to quit): ', input => {
    if (CheckResponse(input)) {
      return StoryEnd();
    }
  });
}

function StoryEnd() {
  console.log('Hooray! ' + myName + ' saved ' + friendName + ' from ' + monsterName + '! The end.');
  console.log("You owe me " + chatCount + " dollars."); // Show how many times they've chatted
  readline.close();
}

// Start the storytelling sequence
TellStory();

// The program asks for the user's name first
// Then it enters a loop where it keeps asking the user to say something and counts the number of interactions
// The user can type "exit" at any time to end the conversation
// After 5 interactions, the bot prompts the user to pay for premium service and ends the chat