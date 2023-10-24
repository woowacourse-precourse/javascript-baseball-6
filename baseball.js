const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber() {
  let number = "";
  while (number.length < 3) {
    const digit = Math.floor(Math.random() * 10);
    if (!number.includes(digit.toString())) {
      number += digit;
    }
  }
  return number;
}

let targetNumber = generateRandomNumber();

function checkGuess(guess) {
  if (guess.length !== 3 || !/^\d+$/.test(guess)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    let message = "";

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === targetNumber[i]) {
        strikes++;
      } else if (targetNumber.includes(guess[i])) {
        balls++;
      }
    }

    if (balls > 0) {
      message += `${balls}볼 `;
    }

    if (strikes > 0) {
      message += `${strikes}스트라이크 `;
    }

    if (message === "") {
      message = "낫싱";
    }

    console.log(message);

    if (strikes === 3) {
      console.log("3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      rl.question("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ", (choice) => {
        if (choice === '1') {
          startGame();
        } else if (choice === '2') {
          rl.close();
        } else {
          console.log("1 또는 2를 입력해야 합니다. 게임을 종료합니다.");
          rl.close();
        }
      });
    } else {
      rl.question("다시 시도하세요: ", checkGuess);
    }
  }
}

function startGame() {
  targetNumber = generateRandomNumber();
  console.log("숫자 야구 게임을 다시 시작합니다. 숫자를 입력해주세요.");
  rl.question("입력: ", checkGuess);
}

console.log("숫자 야구 게임을 시작합니다. 숫자를 입력해주세요.");
rl.question("입력: ", checkGuess);

rl.on('close', () => {
  console.log("게임을 종료합니다.");
  process.exit(0);
});