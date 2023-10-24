import { MissionUtils } from '@woowacourse/mission-utils';

class BaseBallGame {
  constructor() {
    this.answer = '';
  }

  /**
   * 게임을 초기화한다.
   * 랜덤한 세 자리 숫자를 새로 생성한다.
   */
  reset() {
    this.answer = '';
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

  /**
   * 게임을 시작하고 진행합니다.
   */
  async begin() {
    if (this.answer.length !== 3) {
      throw new Error('[ERROR] reset 후 시작해야 합니다.');
    }
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let userAnswer = '';
    while (userAnswer !== this.answer) {
      userAnswer = await this.getUserGuessInput();
      this.provideHint(userAnswer);
    }
  }

  /**
   * 유저로부터 문자열을 입력받고 입력 조건 검증을 거친 후 반환한다.
   * @returns {String}
   */
  async getUserGuessInput() {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    if (this.validateUserGuessInput(userInput)) {
      return userInput;
    }
  }

  /**
   * 유저가 입력한 값이 입력 조건에 맞는지 확인한다.
   * @param {string} userInput - 사용자부터 입력받은 값. 1~9로 이루어진 서로 다른 세 자리의 숫자 문자열이어야 합니다.
   * @throws {Error} 입력값이 유효하지 않을 때 예외를 발생시킵니다
   * @returns {boolean} 입력값이 유효할 경우 true를 반환합니다.
   */
  validateUserGuessInput(userInput) {
    if (!/^[1-9]{3}$/.test(userInput)) {
      throw new Error('[ERROR] 입력값은 1~9의 세 자리 숫자여야 합니다.');
    }
    if (new Set(userInput).size !== 3) {
      throw new Error('[ERROR] 입력값은 서로 다른 숫자로 이루어진 세 자리 숫자여야 합니다.');
    }
    return true;
  }

  /**
   * 유저가 입력한 수를 기반으로 힌트를 제공합니다.
   * @param userAnswer
   */
  provideHint(userAnswer) {
    const { balls, strikes } = this.findBallsAndStrikes(this.answer, userAnswer);
    this.printBallsAndStrikes(balls, strikes);
    if (strikes === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }

  /**
   * 유저 입력 값과 정답을 비교하여 볼과 스트라이크 갯수를 찾습니다.
   * @param correctAnswer
   * @param userAnswer
   * @returns {{balls: number, strikes: number}}
   */
  findBallsAndStrikes(correctAnswer, userAnswer) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < correctAnswer.length; i++) {
      const userDigit = userAnswer[i];
      const correctDigit = correctAnswer[i];

      if (userDigit === correctDigit) {
        strikes++;
      } else if (correctAnswer.includes(userDigit)) {
        balls++;
      }
    }

    return { balls, strikes };
  }

  /**
   * 볼과 스트라이크 갯수를 기반으로 힌트 문구를 출력합니다.
   * @param balls
   * @param strikes
   */
  printBallsAndStrikes(balls, strikes) {
    if (balls !== 0 && strikes !== 0) {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    } else if (balls !== 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (strikes !== 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else if (balls === 0 && strikes === 0) {
      MissionUtils.Console.print('낫싱');
    }
  }

  /**
   *
   * @returns {Promise<boolean>}
   */
  async askUserForReplay() {
    const userInput = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    if (userInput === '1') {
      return true;
    }
    if (userInput === '2') {
      return false;
    }
    throw new Error('[ERROR] 입력값은 1 또는 2여야 합니다.');
  }
}

export default BaseBallGame;
