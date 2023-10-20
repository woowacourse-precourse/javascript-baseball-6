import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  isEveryStringDifferent(input) {
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

    if (!this.isEveryStringDifferent(userInput)) {
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

  getResultMessage() {
    if (this.strikeCount > 0 && this.ballCount > 0) {
      return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
    }

    if (this.strikeCount > 0) {
      return `${this.strikeCount}스트라이크`;
    }

    if (this.ballCount > 0) {
      return `${this.ballCount}볼`;
    }

    return '낫싱';
  }

  async userInputProcess(computerNumbers) {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (this.validateUserInput(userInput) === false) {
      throw new Error(
        '[ERROR] 입력 값은 오직 1 이상, 9 이하의 서로 다른 세 정수로 이루어져야 합니다.'
      );
    }

    const userNumbers = [...userInput].map(Number);

    this.strikeCount = this.getStrikeCount(computerNumbers, userNumbers);
    this.ballCount = this.getBallCount(computerNumbers, userNumbers);

    const resultMessage = this.getResultMessage(
      this.strikeCount,
      this.ballCount
    );

    Console.print(resultMessage);
  }

  async play() {
    const computerNumbers = this.getThreeNumbers();

    await this.userInputProcess(computerNumbers);

    while (this.strikeCount !== 3) {
      await this.userInputProcess(computerNumbers);
    }

    if (this.strikeCount === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

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
