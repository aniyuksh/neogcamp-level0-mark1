var readlineSync = require("readline-sync");
// var readlineSync = require("readline-sync");
// var ch = require("chalk");
// var chalk = require("chalk");
var name = readlineSync.question("Namaste, Whats your name?? ");
console.log("Welcome " + name + " to the DO YOU KNOW ANIYUKSH gameplay");
console.log("Lets begin, Shall we?? ")

var b = readlineSync.keyInYN("Do you know him personally?? ");
console.log(b);

var people = ["friends", "family-member", "worklpace"];
var ind = readlineSync.keyInSelect(people, "How do you know him")
console.log(people[ind]);
console.log("********************************")
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yesss, you're rightt!!!! ");
    score = score + 1;
  }
  else {
    console.log("OOPPSSS, you guessed it wrong");
  }
}

var arrayOfQuestions = [
  {
    question: "Where do Aniyuksh live?? ",
    answer: "ahmedabad",
  }
  ,
  {
    question: "What do Aniyukh do?? ",
    answer: "study",
  }
  ,
  {
    question: "Do Aniyuksh consume meat?? ",
    answer: "no",
  }
  ,
  {
    question: "Aniyuksh's favorite song?? ",
    answer: "tera nishaan",
  },
  {
    question: "Where do I study?? ",
    answer: "Daiict",
  },
  {
    question: "Which mobile do I use?? ",
    answer: "Samsung",
  },
  {
    question: "Whats my favorite color?? ",
    answer: "Black",
  },
  {
    question: "Can I speak marathi?? ",
    answer: "No",
  }
]

for (var i = 0; i < arrayOfQuestions.length; i++) {
  play(arrayOfQuestions[i].question,
    arrayOfQuestions[i].answer)
}

console.log("Your final score is " + score)