const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const resetScores = document.getElementById("reset");

const autoPlay = document.getElementById("autoPlay");

let wins1 = document.getElementById("wins");
let losses1 = document.getElementById("losses");
let ties1 = document.getElementById("ties");
// Dissapears after some given time
let expected = document.getElementById("expected");

let human = document.getElementById("you");
let computer = document.getElementById("computer");

let answers = ["Rock", "Paper", "Scissors"];
let computerMove = "";
let humanMove = "";

let scores = JSON.parse(localStorage.getItem("scores"));

if (!scores) {
  scores = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

console.log(scores);
let block = document.querySelector(".display");

let PickMove = () => {
  const randomNumber = Math.random();
  console.log(randomNumber);

  // Random move generator algorithm for computer
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = answers[0];

    computer.innerHTML = `Computer
              <img src="images/${answers[0]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(computer.innerHTML);
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = answers[1];

    computer.innerHTML = `Computer
              <img src="images/${answers[1]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(computer.innerHTML);
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = answers[2];
    computer.innerHTML = `Computer
              <img src="images/${answers[2]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(computer.innerHTML);
  }
};

let answers2 = ["Rock", "Paper", "Scissors"];

let pickMove2 = () => {
  const randomNumber2 = Math.random();
  console.log(randomNumber2);

  // Random move generator algorithm for computer
  if (randomNumber2 >= 0 && randomNumber2 <= 1 / 3) {
    humanMove = answers2[0];

    human.innerHTML = `You
              <img src="images/${answers2[0]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(human.innerHTML);
  } else if (randomNumber2 >= 1 / 3 && randomNumber2 <= 2 / 3) {
    humanMove = answers2[1];

    human.innerHTML = `You
              <img src="images/${answers2[1]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(human.innerHTML);
  } else if (randomNumber2 >= 2 / 3 && randomNumber2 <= 1) {
    humanMove = answers2[2];
    human.innerHTML = `You
              <img src="images/${answers2[2]}.png" alt="Paper Image" class="imgs"
            />`;
    console.log(human.innerHTML);
  }
};


let autoPlay1 = () => {
  block.style.display = "block";

  setInterval(() => {
    computer.innerHTML = PickMove();
    human.innerHTML = pickMove2();
  }, 1000);
}



let algorithm1 = () => {
  // wins, loses, ties algorithm
  if (computerMove === answers[0] && humanMove === answers[1]) {
    scores.wins += 1;
    result.innerHTML = "You Win!";
    console.log(result.innerHTML);
  } else if (computerMove === answers[1] && humanMove === answers[2]) {
    scores.wins += 1;
    result.innerHTML = "You Win!";
    console.log(result.innerHTML);
  } else if (computerMove === answers[2] && humanMove === answers[0]) {
    scores.wins += 1;
    result.innerHTML = "You Win!";
    console.log(result.innerHTML);
  } else if (computerMove === humanMove) {
    scores.ties += 1;
    result.innerHTML = "Tie";
    console.log(result.innerHTML);
  } else if (computerMove === answers[1] && humanMove === answers[0]) {
    scores.losses += 1;
    result.innerHTML = "You Lose!";
    console.log(result.innerHTML);
  } else if (computerMove === answers[2] && humanMove === answers[1]) {
    scores.losses += 1;
    result.innerHTML = "You Lose!";
    console.log(result.innerHTML);
  } else if (computerMove === answers[0] && humanMove === answers[2]) {
    scores.losses += 1;
    result.innerHTML = "You Lose!";
    console.log(result.innerHTML);
  }

  //storing the values in local storage
  localStorage.setItem("scores", JSON.stringify(scores));

  wins1.innerHTML = `Wins: ${scores.wins}`;
  losses1.innerHTML = `Losses: ${scores.losses}`;
  ties1.innerHTML = `Ties: ${scores.ties}`;
};


resetScores.addEventListener("click", () => {
  wins1.innerHTML = `Wins: ${(scores.wins = 0)}`;
  losses1.innerHTML = `Losses: ${(scores.losses = 0)}`;
  ties1.innerHTML = `Ties: ${(scores.ties = 0)}`;
  localStorage.removeItem("scores");
  block.style.display = "none";
  document.querySelector(".done").style.top = "30px";
  setTimeout(() => {
    document.querySelector(".done").style.top = "-100px";
  }, 3000);
});

rock.addEventListener("click", () => {
  PickMove();
  humanMove = answers[0];
  human.innerHTML = `You <img src="images/${answers[0]}.png" alt="Rock Image" class="imgs"/>`;
  algorithm1();
  block.style.display = "block";
});
scissors.addEventListener("click", () => {
  PickMove();
  humanMove = answers[2];
  human.innerHTML = `You <img src="images/${answers[2]}.png" alt="Rock Image" class="imgs"
            />`;
  algorithm1();
  block.style.display = "block";
});
paper.addEventListener("click", () => {
  PickMove();
  humanMove = answers[1];
  human.innerHTML = `You <img src="images/${answers[1]}.png" alt="Rock Image" class="imgs"
            />`;
  algorithm1();
  block.style.display = "block";
});

autoPlay.addEventListener("click", () => {
  autoPlay1();
});
