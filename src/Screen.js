import { Console } from '@woowacourse/mission-utils';

class Screen {
  static MESSAGES = {
    GAME_TITLE_MESSAGE: '숫자 야구 게임을 시작합니다.',
    GAME_INPUT_MESSAGE: '숫자를 입력해주세요 : ',
    GAME_OVER_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    GAME_CONTINNUE_MEESAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    INVALID_INPUT_ERROR_MESSAGE: '[ERROR] 숫자가 잘못된 형식입니다.',
  };

  static RESULT_STRINGS = {
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
  };

  static printTitle() {
    Console.print(this.MESSAGES.GAME_TITLE_MESSAGE);
  }

  static async inputUserNumbers() {
    const numbers = await Console.readLineAsync(
      this.MESSAGES.GAME_INPUT_MESSAGE
    );

    if (numbers.length !== 3 || Number.isNaN(numbers)) {
      throw new Error(this.MESSAGES.INVALID_INPUT_ERROR_MESSAGE);
    }

    return Array.from(numbers, (number) => number * 1);
  }

  static printResult(computer) {
    const { strike, ball } = computer;

    if (strike > 0 && ball > 0) {
      Console.print(
        `${ball}${this.RESULT_STRINGS.BALL} ${strike}${this.RESULT_STRINGS.STRIKE}`
      );
    }

    if (strike === 0 && ball > 0) {
      Console.print(`${ball}${this.RESULT_STRINGS.BALL}`);
    }

    if (strike > 0 && ball === 0) {
      Console.print(`${strike}${this.RESULT_STRINGS.STRIKE}`);
    }

    if (strike === 0 && ball === 0) {
      Console.print(this.RESULT_STRINGS.NOTHING);
    }
  }

  static printGameOver() {
    Console.print(this.MESSAGES.GAME_OVER_MESSAGE);
  }

  static async askRestart() {
    Console.print(this.MESSAGES.GAME_CONTINNUE_MEESAGE);
    const answer = await Console.readLineAsync();

    if (answer !== '1' && answer !== '2') {
      throw new Error(this.MESSAGES.INVALID_INPUT_ERROR_MESSAGE);
    }

    return answer;
  }
}

export default Screen;
