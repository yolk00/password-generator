let passwordEl = document.getElementById("pass-el");

// is text in the password field?
let isFilled = false;

let password = {
  length: 8,
  uppercase: false,
  lowercase: true,
  punctuation: false,
  numbers: false,
};

let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let punctuation = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "`"];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let lowerCheckEl = document.getElementById("lower");
let upperCheckEl = document.getElementById("upper");
let numbCheckEl = document.getElementById("numb");
let puncCheckEl = document.getElementById("punc");

let copyEl = document.getElementById("copy-el");

let slider = document.getElementById("password-slider");
let output = document.getElementById("slider-value");
output.innerHTML = slider.value; // display slider default value

slider.oninput = function () {
  output.innerHTML = this.value;
  password.length = this.value;
};

function newPassword() {
  reset();
  generate();
}

function generate() {
  isFilled = true;
  if (
    lowerCheckEl.checked &&
    upperCheckEl.checked &&
    numbCheckEl.checked &&
    puncCheckEl.checked
  ) {
    let allCombo = lowercase.concat(uppercase, numbers, punctuation);
    // passwordEl.textContent = "hey girl";
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * allCombo.length);
      passwordEl.textContent += allCombo[rndIndex];
    }
  } else if (
    lowerCheckEl.checked &&
    upperCheckEl.checked &&
    numbCheckEl.checked
  ) {
    let lowerUpperNumb = lowercase.concat(uppercase, numbers);

    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerUpperNumb.length);
      passwordEl.textContent += lowerUpperNumb[rndIndex];
    }
  } else if (
    lowerCheckEl.checked &&
    upperCheckEl.checked &&
    puncCheckEl.checked
  ) {
    let lowerUpperPunc = lowercase.concat(uppercase, punctuation);

    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerUpperPunc.length);
      passwordEl.textContent += lowerUpperPunc[rndIndex];
    }
  } else if (
    lowerCheckEl.checked &&
    numbCheckEl.checked &&
    puncCheckEl.checked
  ) {
    let lowerNumbPunc = lowercase.concat(numbers, punctuation);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerNumbPunc.length);
      passwordEl.textContent += lowerNumbPunc[rndIndex];
    }
  } else if (
    upperCheckEl.checked &&
    numbCheckEl.checked &&
    puncCheckEl.checked
  ) {
    let upperNumbPunc = uppercase.concat(numbers, punctuation);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * upperNumbPunc.length);
      passwordEl.textContent += upperNumbPunc[rndIndex];
    }
  } else if (lowerCheckEl.checked && upperCheckEl.checked) {
    let lowerUpper = lowercase.concat(uppercase);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerUpper.length);
      passwordEl.textContent += lowerUpper[rndIndex];
    }
  } else if (lowerCheckEl.checked && numbCheckEl.checked) {
    let lowerNumb = lowercase.concat(numbers);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerNumb.length);
      passwordEl.textContent += lowerNumb[rndIndex];
    }
  } else if (lowerCheckEl.checked && puncCheckEl.checked) {
    let lowerPunc = lowercase.concat(punctuation);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowerPunc.length);
      passwordEl.textContent += lowerPunc[rndIndex];
    }
  } else if (upperCheckEl.checked && numbCheckEl.checked) {
    let upperNumb = uppercase.concat(numbers);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * upperNumb.length);
      passwordEl.textContent += upperNumb[rndIndex];
    }
  } else if (upperCheckEl.checked && puncCheckEl.checked) {
    let upperPunc = uppercase.concat(punctuation);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * upperPunc.length);
      passwordEl.textContent += upperPunc[rndIndex];
    }
  } else if (numbCheckEl.checked && puncCheckEl.checked) {
    let numbPunc = numbers.concat(punctuation);
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * numbPunc.length);
      passwordEl.textContent += numbPunc[rndIndex];
    }
  } else if (lowerCheckEl.checked) {
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * lowercase.length);
      passwordEl.textContent += lowercase[rndIndex];
    }
  } else if (upperCheckEl.checked) {
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * uppercase.length);
      passwordEl.textContent += uppercase[rndIndex];
    }
  } else if (numbCheckEl.checked) {
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * numbers.length);
      passwordEl.textContent += numbers[rndIndex];
    }
  } else {
    for (let i = 0; i < password.length; i++) {
      let rndIndex = Math.floor(Math.random() * punctuation.length);
      passwordEl.textContent += punctuation[rndIndex];
    }
  }
}

function reset() {
  passwordEl.textContent = "";
  isFilled = false;
}
