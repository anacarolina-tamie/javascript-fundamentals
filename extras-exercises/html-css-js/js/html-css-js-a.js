
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, draws: 0 };
const scoreElement = document.querySelector('.js-score');
scoreElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draws: ${score.draws}`;


function playGame(playerMove) {
  const randomNumber = Math.random();
  console.log(randomNumber);

  let pcMove = '';

  if (randomNumber < 1 / 3) {
    pcMove = 'Rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = 'Paper';
  } else {
    pcMove = 'Scissors';
  }

  console.log(`Computer ${pcMove}`);

  let result = '';



  if (pcMove === 'Rock') {
    if (playerMove === 'Rock') {
      result = 'Draw';
      score.draws++;
    } else if (playerMove === 'Paper') {
      result = 'You win';
      score.wins++;
    } else {
      result = 'You lose';
      score.losses++;
    }
  }

  else if (pcMove === 'Paper') {
    if (playerMove === 'Rock') {
      result = 'You lose';
      score.losses++;
    } else if (playerMove === 'Paper') {
      result = 'Draw';
      score.draws++;
    } else {
      result = 'You win';
      score.wins++;
    }
  }

  else {
    if (playerMove === 'Rock') {
      result = 'You win';
      score.wins++;
    } else if (playerMove === 'Paper') {
      result = 'You lose';
      score.losses++;
    } else {
      result = 'Draw';
      score.draws++;
    }
  }

  console.log(result);

  const resultElement = document.querySelector('.js-result');
  resultElement.innerHTML = result;

  const movesElement = document.querySelector('.js-moves');
  movesElement.innerHTML = `    You
    <img class="move-icon" src="images/${playerMove}-emoji.png">
    <img class="move-icon" src="images/${pcMove}-emoji.png">
    Computer`;

  scoreElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draws: ${score.draws}`;

  console.log(score);

  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  localStorage.clear();
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  const scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = 'Score';
}