var readLineSync = require("readline-sync");
console.log("Hello! Welcome to FRIEND's QUIZ. You can play alone or with someone else." + "\n" + "Hope you enjoy this!!!" + "\n")
var score = 0;
var quizList = [
  {
    question: "What is Ross's first wife name ? ",
    answer: "carol"
  },
  {
    question: "What is Pheobe's last name ? ",
    answer: "buffay"
  },
  {
    question: "What is Chandler bing's middle name ? ",
    answer: "muriel"
  },
  {
    question: "Who does Pheobe marry ? ",
    answer: "mark"
  },
  {
    question: "What was Rachel's dog name who dies ? ",
    answer: "lapoh"
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
      console.log("Name------" + " " + this.usersList[i].username);
      console.log("Your Score------" + " " + this.usersList[i].score)
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
    console.log("Correct Answer!!" + "\n");

    score += 1;
  }
  else {
    console.log("Oops! Wrong Answer" + "\n");
    console.log("Correct answer is:" + " " + answer)

  }

  console.log("current score:" + " " + score + "\n")


}
const user = new UsersList();
function displayWinner() {
  const list = user.getUsers();
  if (list[0].score > list[1].score) console.log('Winner is-------- ' + list[0].username);
  else console.log('Winner is******* ' + list[1].username);
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
  var basicAnswer = readLineSync.question("Do you watch Friends ? ");
  if (basicAnswer.toLowerCase() === "yes") {
    startGame();

  }
  else {
    console.log("Sorry! This is only for Friends Fans!!")

  }
}
freshGame();

