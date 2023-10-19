import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.\n');

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

    Console.print(resultMessage(replay));

    isGameCleared = check(result);
  }

  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
}

const threeRandomInts = function createThreeRandomIntegers() {
  const result = new Array(3);
  while (result.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

const userInput = async function convertUserInputIntoArray() {
  try {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (input.length !== 3) {
      throw new Error('입력한 값이 3자리가 아닙니다.');
    }

    const numbers = input.split('').map(c => parseInt(c));

    if (characters.includes(NaN)) {
      throw new Error('입력한 값이 수가 아닙니다.');
    }

    return numbers;
  } catch (error) {
    Console.print(error.message);
  }
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
  try {
    const input = Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

    if (input !== '1' || input !== '2') {
      throw new Error('올바르지 않은 입력입니다.');
    }

    if (input === '1') {
      return true;
    }

    return false;
  } catch (error) {
    Console.print(error.message);
  }
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
