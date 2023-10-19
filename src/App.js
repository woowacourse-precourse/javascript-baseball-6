import { Random, Console } from '@woowacourse/mission-utils';

class App {
  isUnique(input) {
    const set = new Set(input);
    return set.size === input.length;
  }

  getThreeNumbers() {
    const numbers = new Set();

    while (numbers.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }

    return [...numbers];
  }

  validateUserInput(userInput) {
    if (userInput.length !== 3) {
      return false;
    }

    if (!this.isUnique(userInput)) {
      return false;
    }

    for (const input of userInput) {
      const num = Number(input);

      if (isNaN(num) || num === 0) {
        return false;
      }
    }

    return true;
  }

  getStrikeCount(computerNumbers, userNumbers) {
    let result = 0;

    for (let i = 0; i < 3; i += 1) {
      if (computerNumbers[i] === userNumbers[i]) {
        result += 1;
      }
    }

    return result;
  }

  getBallCount(computerNumbers, userNumbers) {
    let result = 0;

    for (let i = 0; i < 3; i += 1) {
      if (
        computerNumbers[i] !== userNumbers[i] &&
        computerNumbers.includes(userNumbers[i])
      ) {
        result += 1;
      }
    }

    return result;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const computerNumbers = this.getThreeNumbers();
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (this.validateUserInput(userInput) === false) {
      throw new Error('잘못된 값이 입력되었습니다.');
    }

    const userNumbers = [...userInput].map(Number);

    const strikeCount = this.getStrikeCount(computerNumbers, userNumbers);
    const ballCount = this.getBallCount(computerNumbers, userNumbers);
    const isNothing = strikeCount + ballCount === 0;

    // TODO: Remove this code
    Console.print(strikeCount);
    Console.print(ballCount);
    Console.print(isNothing);

    // TODO: Remove this code
    Console.print(computerNumbers);
    Console.print(userNumbers);
  }
}

// TODO: Remove this code
const app = new App();
app.play();

export default App;
