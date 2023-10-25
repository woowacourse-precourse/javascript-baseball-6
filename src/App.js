#!/usr/bin/env node
class App {
  play() {
    console.log("App Start..")
  }
}


const app = new App();
app.play;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber() {
  const numbers = MissionUtils.Random.pickNumberInRange(1, 9);
  const result = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
  return result;
}

function getHint(guess, answer) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      strike++;
    } else if (answer.includes(guess[i])) {
      ball++;
    }
  }

  if (strike === 3) {
    return '3스트라이크! 정답을 맞혔습니다!';
  } else {
    const strikeText = strike > 0 ? `${strike}스트라이크` : '';
    const ballText = ball > 0 ? `${ball}볼` : '';
    const nothingText = strike === 0 && ball === 0 ? '낫싱' : '';
    return `${strikeText} ${ballText} ${nothingText}`;
  }
}

function playGame() {
  const answer = generateRandomNumber();
  let attempts = 0;

  function askForGuess() {
    rl.question('숫자를 입력해주세요: ', (input) => {
      const guess = input.trim().split('').map(Number);

      if (guess.length !== 3 || guess.some(isNaN) || new Set(guess).size !== 3) {
        console.log('올바른 3자리 숫자를 입력해주세요.');
        askForGuess();
        return;
      }

      const hint = getHint(guess, answer);
      console.log(hint);

      attempts++;

      if (hint !== '3스트라이크! 정답을 맞혔습니다!') {
        console.log(`시도 횟수: ${attempts}`);
        askForGuess();
      } else {
        console.log(`게임 종료! ${attempts}번 시도했습니다.`);
        rl.question('게임을 다시 시작하려면 "yes"를 입력하세요. 그렇지 않으면 종료합니다: ', (response) => {
          if (response.toLowerCase() === 'yes') {
            playGame();
          } else {
            rl.close();
          }
        });
      }
    });
  }

  console.log('1부터 9까지 서로 다른 숫자로 이루어진 3자리 수를 맞춰보세요.');
  askForGuess();
}

playGame();
