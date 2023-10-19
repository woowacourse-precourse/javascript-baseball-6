import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {}
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

const convert = async function convertUserInputIntoArray() {
  try {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ')

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

export default App;
