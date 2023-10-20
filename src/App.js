import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 9;
  static NUMBER_LENGTH = 3;

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    do {
      const targetNumbers = this.pickRandomNumbers();
      let result = {};
      do {
        const inputNumbers = await this.getInputNumbers(
          '숫자를 입력해주세요 : '
        );

        result = this.matchGuessNumber(targetNumbers, inputNumbers);
      } while (!this.displayAndCheckWinTheGame(result));
    } while (await this.playAgain());
  }

  pickRandomNumbers() {
    const numbers = [];
    while (numbers.length < App.NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(
        App.MIN_NUMBER,
        App.MAX_NUMBER
      );
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  async getInputNumbers(message) {
    const inputNumbers = await MissionUtils.Console.readLineAsync(message);
    this.validateInputNumbers(inputNumbers);
    return inputNumbers;
  }

  validateInputNumbers(inputNumbers) {
    if (isNaN(inputNumbers)) {
      throw new Error('[ERROR] : 숫자만 입력 가능합니다.');
    } else if (inputNumbers.length !== App.NUMBER_LENGTH) {
      throw new Error('[ERROR] : 3자리 숫자를 입력해주세요.');
    }
  }

  matchGuessNumber(targetNumbers, inputNumbers) {
    const result = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < App.NUMBER_LENGTH; i++) {
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

    if (result.strike === App.NUMBER_LENGTH) {
      MissionUtils.Console.print(
        `${App.NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      return true;
    }

    return false;
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
