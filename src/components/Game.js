// src/components/Game.js
const { Console, Random } = require('@woowacourse/mission-utils');

const Game = {
  startGame: async () => {
    Console.print('숫자 야구 게임을 시작합니다.');
    let isGameOver = false;

    while (!isGameOver) {
      const computerNumbers = getComputerNumbers();
      const userNumbers = await getUserInput();
      const result = checkGuess(userNumbers, computerNumbers);

      Console.print(`결과: ${result}`);
      isGameOver = result === '3스트라이크';

      if (isGameOver) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.');
        const choice = await Console.readLineAsync('입력: ');

        if (choice === '1') {
          isGameOver = false;
        } else if (choice === '2') {
          Console.close();
          break;
        }
      }
    }
  }
};

function getComputerNumbers() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

async function getUserInput() {
  let userInput;
  do {
    userInput = await Console.readLineAsync('서로 다른 3자리의 수를 입력하세요: ');
  } while (!isValidInput(userInput));
  return userInput.split('').map(Number);
}

function isValidInput(input) {
  return /^\d{3}$/.test(input) && new Set(input).size === 3;
}

function checkGuess(userNumbers, computerNumbers) {
  const strike = userNumbers.filter((n, i) => n === computerNumbers[i]).length;
  const intersection = userNumbers.filter(n => computerNumbers.includes(n));
  const ball = intersection.length - strike;
  return strike === 3 ? '3스트라이크' : `${ball}볼 ${strike}스트라이크`;
}

module.exports = Game;
