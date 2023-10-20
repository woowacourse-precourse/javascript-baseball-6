import { Random, Console } from '@woowacourse/mission-utils';
import { validate } from './utils.js';
import { MAX_LENGTH } from './data.js';

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  generateComputerNumbers() {
    const numbers = new Set();

    while (numbers.size < MAX_LENGTH) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }

    return [...numbers];
  }

  getResultMessage(strikeCount, ballCount) {
    if (strikeCount > 0 && ballCount > 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    if (strikeCount > 0) {
      return `${strikeCount}스트라이크`;
    }

    if (ballCount > 0) {
      return `${ballCount}볼`;
    }

    return '낫싱';
  }

  getStrikeCount(computerNumbers, userNumbers) {
    let result = 0;

    for (let i = 0; i < MAX_LENGTH; i += 1) {
      if (computerNumbers[i] === userNumbers[i]) {
        result += 1;
      }
    }

    return result;
  }

  getBallCount(computerNumbers, userNumbers) {
    let result = 0;

    for (let i = 0; i < MAX_LENGTH; i += 1) {
      if (
        computerNumbers[i] !== userNumbers[i] &&
        computerNumbers.includes(userNumbers[i])
      ) {
        result += 1;
      }
    }

    return result;
  }

  printResultMessage() {
    const resultMessage = this.getResultMessage(
      this.strikeCount,
      this.ballCount
    );

    Console.print(resultMessage);
  }

  async inputAndPrintResult(computerNumbers) {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (validate(userInput) === false) {
      throw new Error(
        '[ERROR] 입력 값은 오직 1 이상, 9 이하의 서로 다른 세 정수로 이루어져야 합니다.'
      );
    }

    const userNumbers = Array.from(userInput, Number);

    this.strikeCount = this.getStrikeCount(computerNumbers, userNumbers);
    this.ballCount = this.getBallCount(computerNumbers, userNumbers);

    this.printResultMessage();
  }

  async play() {
    const computerNumbers = this.generateComputerNumbers();

    do {
      await this.inputAndPrintResult(computerNumbers);
    } while (this.strikeCount !== MAX_LENGTH);

    if (this.strikeCount === MAX_LENGTH) {
      Console.print(`${MAX_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`);

      const retryNumber = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );

      if (retryNumber === '1') {
        this.play();
      } else if (retryNumber === '2') {
        return;
      } else {
        throw new Error('[ERROR] 입력 값은 오직 1 또는 2가 되어야 합니다.');
      }
    }
  }
}

export default App;
