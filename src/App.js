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

function compareNumbers(computerAnswer, userAnswer) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    if (computerAnswer[i] === userAnswer[i]) {
      strike++;
      continue;
    }
    if (userAnswer.includes(computerAnswer[i]) && computerAnswer[i] !== userAnswer[i]) {
      ball++;
    }
  }

  if (strike === 3) {
    Console.print(`${strike}스트라이트 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return;
  }

  if (ball > 0) Console.print(`${ball}볼`);
  if (strike > 0) Console.print(`${strike}스트라이크`);
}

function isValidInput(input) {
  if (input.length !== 3) return false;
  const uniqueDigits = [...new Set(input)];
  return uniqueDigits.every(digit => Number.isInteger(Number(digit))) && uniqueDigits.length === 3;
}

async function requestUserAnswer() {
  const input = await Console.readLineAsync('숫자를 입력해주세요: ');

  if (!isValidInput(input)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  return input;
}

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerAnswer = createComputerNumber();

    try {
      const userAnswer = await requestUserAnswer();
      compareNumbers(computerAnswer, userAnswer.split(''));
    } catch (error) {
      Console.print(error);
    }
  }
}

const app = new App();
app.play();

export default App;
