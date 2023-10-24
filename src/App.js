import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    do {
      await game();
    } while (await replay());
  }
}

const game = async function gameLoop() {
  const random = threeRandomInts();

  let isGameCleared = false;

  while (!isGameCleared) {
    const user = await userInput();

    const result = compare(user, random);

    Console.print(resultMessage(result));

    isGameCleared = check(result);
  }

  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
}

const threeRandomInts = function createThreeRandomIntegers() {
  const result = [];
  while (result.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

const userInput = async function convertUserInputIntoArray() {
  const input = await Console.readLineAsync('숫자를 입력해주세요 : ');

  if (input.length !== 3) {
    throw new Error('[ERROR] 입력되는 값의 길이는 3자리여야 합니다.');
  }

  const numbers = input.split('').map(c => parseInt(c));

  if (numbers.includes(NaN)) {
    throw new Error('[ERROR] 입력되는 값은 숫자여야 합니다.');
  }

  return numbers;
}

const compare = function compareUserInputWithRandomNumbers(user, random) {
  const result = { ball: 0, strike: 0, x: 0 };
  
  for (let i = 0; i < 3; i++) {
    if (!random.includes(user[i])) {
      result.x++;
    } else {
      if (random[i] === user[i]) {
        result.strike++;
      }
      else {
        result.ball++;
      }
    }
  }

  return result;
}

const check = function checkIsGameCleared(guessResult) {
  if (guessResult.strike === 3) {
    return true;
  }

  return false;
}

const replay = async function replayWithNewRandomNumbers() {
  const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  if (input === '1') {
    return true;
  }

  if (input === '2') {
    return false;
  }

  throw new Error('[ERROR] 알 수 없는 입력입니다.')
}

const resultMessage = function resultToString(guessResult) {
  if (guessResult.x === 3) {
    return '낫싱';
  }

  let ballMessage = '';
  let strikeMessage = '';

  if (guessResult.ball > 0) {
    ballMessage = `${guessResult.ball}볼`;
  }

  if (guessResult.strike > 0) {
    strikeMessage = `${guessResult.strike}스트라이크`;
  }

  return `${ballMessage} ${strikeMessage}`.trim();
}

export default App;
