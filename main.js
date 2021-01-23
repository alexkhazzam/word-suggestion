let textArea = document.querySelector("#exampleFormControlTextarea1");

const words = {};
let currentWord = "";
let newArr = [];
let wordOccurance = 0;

textArea.addEventListener("keypress", (e) => {
  let wordChoice;
  if (e.key !== " ") {
    currentWord += e.key;
    wordOccurance = 0;
    if (currentWord.length === 1) {
      for (let i = 0; i < newArr.length; i++) {
        if (
          Object.keys(newArr[i])[0] === e.key &&
          newArr[i][e.key] > wordOccurance
        ) {
          wordChoice = Object.keys(newArr[i])[0];
          wordOccurance = newArr[i][e.key];
        }
        if (
          Object.keys(newArr[i])[0].charAt(0) === e.key &&
          newArr[i][Object.keys(newArr[i])] > wordOccurance
        ) {
          wordChoice = Object.keys(newArr[i])[0];
          wordOccurance = newArr[i][Object.keys(newArr[i])];
        }
      }
      if (wordChoice !== undefined) {
        console.log(`Suggested Word: ${wordChoice}`);
      }
    }
  } else {
    if (!words[currentWord]) {
      words[currentWord] = 1;
    } else {
      words[currentWord]++;
    }
    newArr = Object.keys(words).map((word) => {
      if (words.hasOwnProperty(word)) {
        return {
          [word]: words[word],
        };
      }
    });
    currentWord = "";
  }
});
