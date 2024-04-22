// function play() {
//   // Step - 1: hide the home screen. to hide the home screeen add the hidden class to the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // Step - 2: show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log("Player pressed: ", playerPressed);

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // check if matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point!");
    console.log("You have pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed a life!");
  }
}

// keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // step - 1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  // console.log("Your random alphabet:", alphabet);

  //   set randomly generated alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
