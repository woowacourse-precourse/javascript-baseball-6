import { MissionUtils } from '@woowacourse/mission-utils';

MissionUtils.Random.pickNumberNotDuplicateInRange = function (min, max, count) {
  const numbers = [];
  while (numbers.length < count) {
    const number = this.pickNumberInRange(min, max);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

class NumberBaseball {
  constructor(min, max, length) {
    this.min = min;
    this.max = max;
    this.length = length;
  }

  pickRandomNumbers() {
    const numbers = MissionUtils.Random.pickNumberNotDuplicateInRange(
      this.min,
      this.max,
      this.length
    );
    return numbers;
  }

  async getInputNumbers(message) {
    const inputNumbers = await MissionUtils.Console.readLineAsync(message);
    return inputNumbers;
  }

  validateInputNumbers(inputNumbers) {
    if (isNaN(inputNumbers)) {
      throw new Error('[ERROR] : 숫자만 입력 가능합니다.');
    } else if (inputNumbers.length !== this.length) {
      throw new Error('[ERROR] : 3자리 숫자를 입력해주세요.');
    }
  }

  matchGuessNumber(targetNumbers, inputNumbers) {
    const result = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < this.length; i++) {
      if (targetNumbers[i] === Number(inputNumbers[i])) {
        result.strike++;
      } else if (targetNumbers.includes(Number(inputNumbers[i]))) {
        result.ball++;
      }
    }

    return result;
  }

  displayAndCheckWinTheGame(result) {
    if (result.strike === 0 && result.ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else {
      const message = result.ball
        ? result.strike
          ? `${result.ball}볼 ${result.strike}스트라이크`
          : `${result.ball}볼`
        : `${result.strike}스트라이크`;
      MissionUtils.Console.print(message);
    }

    if (result.strike === this.length) {
      MissionUtils.Console.print(
        `${this.length}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      return true;
    }

    return false;
  }
}

class App {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 9;
  static NUMBER_LENGTH = 3;

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const numberBaseball = new NumberBaseball(
      App.MIN_NUMBER,
      App.MAX_NUMBER,
      App.NUMBER_LENGTH
    );

    do {
      const targetNumbers = numberBaseball.pickRandomNumbers();

      let result = {};

      do {
        const inputNumbers = await numberBaseball.getInputNumbers(
          '숫자를 입력해주세요 : '
        );
        numberBaseball.validateInputNumbers(inputNumbers);

        result = numberBaseball.matchGuessNumber(targetNumbers, inputNumbers);
      } while (!numberBaseball.displayAndCheckWinTheGame(result));
    } while (await this.playAgain());
  }

  async playAgain() {
    const input = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );

    if (input === '1') {
      return true;
    } else if (input === '2') {
      return false;
    } else {
      throw new Error('[ERROR] : 1과 2만 입력 가능합니다.');
    }
  }
}

export default App;
