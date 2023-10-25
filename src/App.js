import { Console, Random } from '@woowacourse/mission-utils';

function createComputerNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

function processBallAndStrike(computerAnswer, userAnswer) {
  let ball = 0;
  let strike = 0;

  computerAnswer.forEach((value, index) => {
    if (value === userAnswer[index]) {
      strike += 1;
      return;
    }
    if (userAnswer.includes(value)) {
      ball += 1;
    }
  });

  return { ball, strike };
}

function getMessageForBallAndStrike({ ball, strike }) {
  if (strike === 3) {
    return `${strike}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
  }
  if (strike === 0 && ball === 0) {
    return '낫싱';
  }
  if (ball > 0 && strike > 0) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (strike === 0) {
    return `${ball}볼`;
  }
  return `${strike}스트라이크`;
}

function compareNumbers(computerAnswer, userAnswer) {
  const result = processBallAndStrike(computerAnswer, userAnswer);
  Console.print(getMessageForBallAndStrike(result));
  return result;
}

function isValidInput(input) {
  return (
    input.length === 3 &&
    new Set(input).size === 3 &&
    input.every((digit) => Number.isInteger(Number(digit)))
  );
}

async function requestUserAnswer() {
  const input = await Console.readLineAsync('숫자를 입력해주세요: ');
  const inputArray = input.split('').map(Number);

  if (!isValidInput(inputArray)) {
    throw new Error('[ERROR]');
  }
  return inputArray;
}

async function postGameChoice() {
  const choice = await Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  );

  if (choice === '1') return true;
  if (choice === '2') return false;

  return postGameChoice();
}

class App {
  static async play() {
    let continueGame = true;

    while (continueGame) {
      continueGame = await App.playGame();
    }
  }

  static async playGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerAnswer = createComputerNumber();
    let strike = 0;

    while (strike !== 3) {
      const userAnswer = await requestUserAnswer();
      const result = compareNumbers(computerAnswer, userAnswer);
      strike = result.strike;
    }

    return postGameChoice();
  }
}

const app = new App();
app.play();

export default App;
