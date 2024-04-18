// function play() {
//   // Step - 1: hide the home screen. to hide the home screeen add the hidden class to the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // Step - 2: show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  // step - 1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log("Your random alphabet:", alphabet);

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
