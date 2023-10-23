import generateNumber from './utils/Number.js';
import { print, input } from './view/View.js';
import Message from './utils/Message.js';

export default class App {
  #answerNumbers;
  #isFinish = false;

  constructor() {
    this.init();
  }

  async play() {
    try {
      while (!this.#isFinish) {
        print(Message.GAME_START);
        const inputNumber = (await input(Message.INPUT_NUMBER)).trim();
        this.validateInput(inputNumber);
        const { ballCount, strikeCount } = this.checkGuess(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        print(message);

        if (strikeCount !== 3) continue;

        const restartNumber = Number(await input(Message.SUGGEST_NEW_GAME));
        this.validateRestartInput(restartNumber) && restartNumber === 1
          ? this.init()
          : (this.#isFinish = true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  init() {
    this.#answerNumbers = generateNumber(1, 9);
    // console.log(this.#answerNumbers);
  }

  /**
   * @description 사용자 입력값 검증 함수
   * 1.숫자가 아닌 다른 값의 유무 판단(공백포함) / 2.입력값의 길이 판단
   * 3.서로 다른 3개의 숫자 판단 / 4. 0을 지니고 있는지 판단
   * 5.서로 다른 3가지 숫자를 중복으로 입력받는 경우
   * @param {string} input
   * @returns {boolean} 유효성 검사 결과 반환
   *
   * @TODO - 에러 메세지 세분화
   */

  validateInput(input) {
    const set = new Set(input.split(''));
    if (
      isNaN(Number(input)) ||
      input.length > 3 ||
      set.size !== 3 ||
      set.has('0')
    ) {
      throw new Error(
        '[ERROR] 사용자 입력값이 잘못되었습니다. 다시 확인해주세요.',
      );
    }
    return true;
  }

  /**
   * @description 두 값을 비교하여 판정을 내리는 함수
   * @param {string} input
   * @returns {object} {strikeCount: number, ballCount: number}
   */
  checkGuess(input) {
    const randomNumber = this.#answerNumbers.join('');
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === randomNumber[i]) {
        strikeCount++;
      } else if (randomNumber.includes(input[i])) {
        ballCount++;
      }
    }
    return { ballCount, strikeCount };
  }

  /**
   * @description 스트라이크와 볼의 갯수를 판별하여 메세지를 반환하는 함수
   * @param {number} ball
   * @param {number} strike
   * @returns {string} message
   */
  feedbackMessage(ball, strike) {
    let message = '';

    if (strike === 3) {
      return `${strike}${Message.STRIKE}\n${Message.SUCCESS}`;
    }
    if (ball > 0) {
      message += `${ball}${Message.BALL} `;
    }
    if (strike > 0) {
      message += `${strike}${Message.STRIKE}`;
    }
    return message.trim() || `${Message.NOTHING}`;
  }

  /**
   * @description 재시작 사용현자 입력값 검증 함수
   * @param {number} input
   * @returns {boolean}
   */

  validateRestartInput(input) {
    if (input !== 1 && input !== 2) {
      throw new Error(
        '[ERROR] 재시작 입력값이 잘못되었습니다. 다시 확인해주세요.',
      );
    }
    return true;
  }
}

const app = new App();
app.play();
