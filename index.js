var readLineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.blue.bold("Hello! Welcome to FRIEND's QUIZ. You can play alone or with someone else." + "\n" + "Hope you enjoy this!!!" + "\n"))
var score = 0;
var quizList = [
  {
    question: `Which of these were not Ross's wife ?\n 
    a:Carol
    b:Emily
    c:Rachel
    d:Pheobe \n`,
    answer: "d"
  },
  {
      question: `What is Chandler's middle name ?\n 
    a:John
    b:Muriel
    c:Tribbaini
    d:Geller \n`,
    answer: "b"
  },
  {
       question: `What was Rachel's fiance's name ?\n 
    a:Paulo
    b:Barry
    c:Mike
    d:Joshua \n`,
    answer: "b"
  },
  {
       question: `What was Pheobe's brother's name?\n 
    a:Bob
    b:Frank
    c:Alice
    d:Ellen \n`,
    answer: "b"
  },
  {
       question: `How many sisters does Joey have ?\n 
    a:4
    b:8
    c:5
    d:7 \n`,
    answer: "d"
  }

];
var username;

class UsersList {
  constructor() {
    this.usersList = [];

  }

  addUser(name, score) {
    this.usersList.push({ username: name, score: score });
  }
  printList() {
    for (let i = 0; i < this.usersList.length; i++) {
      console.log(chalk.cyan("Name------") + " " + this.usersList[i].username);
      console.log(chalk.cyan("Your Score------") + " " + this.usersList[i].score)
    }

  }
  listLength() {
    return this.usersList.length;
  }
  getUsers() {
    return this.usersList;

  }
}
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log(chalk.green("Correct Answer!!" + "\n"));

    score += 1;
  }
  else {
    console.log(chalk.red("Oops! Wrong Answer" + "\n"));
    console.log(chalk.red("Correct answer is:" + " " + answer))

  }

  console.log(chalk.yellow("Current Score:" + " " + score + "\n"))


}
const user = new UsersList();
function displayWinner() {
  const list = user.getUsers();
  if (list[0].score > list[1].score) console.log('Winner is-------- ' + list[0].username);
  else console.log(chalk.magentaBright.bold('Winner is******* ' + list[1].username));
}


function startGame() {
  userName = readLineSync.question("What is your name ? ");
  for (let i = 0; i < quizList.length; i++) {
    play(quizList[i].question, quizList[i].answer)
  }
  user.addUser(userName, score);
  user.printList();
  if (user.listLength() >= 2) displayWinner();
  else {
    console.log("-----Player 1 Game Over-----" + "\n");
    const player2 = readLineSync.question("Player 2 ready to begin ? ");
    if (player2.toLowerCase() === "yes") {
      freshGame();

    }
    else return;

  }
}

function freshGame() {
  score = 0;
  var basicAnswer = readLineSync.question("Do you watch Friends ? Answer in yes or no ");
  if (basicAnswer.toLowerCase() === "yes") {
    startGame();

  }
  else {
    console.log(chalk.red("Sorry! This is only for Friends Fans!!"))

  }
}
freshGame();

