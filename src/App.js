import generateNumber from './utils/Number.js';
import { print, input } from './view/View.js';
import Message from './utils/Message.js';

export default class App {
  #answerNumbers;

  constructor() {
    this.init();
  }

  async play() {
    try {
      print(Message.GAME_START);
      const inputNumber = (await input(Message.INPUT_NUMBER)).trim();
      this.validateInput(inputNumber);
      const { strike, ball } = this.checkGuess(inputNumber);
      this.feedbackMessage(strike, ball);
    } catch (e) {
      console.error(e);
    }
  }

  init() {
    this.#answerNumbers = generateNumber(1, 9);
    console.log(this.#answerNumbers);
  }

  /**
   * @description 사용자 입력값 검증 함수
   * 1.숫자가 아닌 다른 값의 유무 판단(공백포함) / 2.입력값의 길이 판단 / 3.서로 다른 3개의 숫자 판단 / 4. 0을 지니고 있는지 판단
   * @param {string} input
   * @returns {boolean} 유효성 검사 결과 반환
   *
   * @TODO - 에러 메세지 세분화
   */
  validateInput(input) {
    const set = new Set(input.split(''));
    if (isNaN(Number(input)) || set.size !== 3 || set.has('0')) {
      throw new Error(
        '[ERROR] 사용자 입력값이 잘못되었습니다. 다시 확인해주세요.',
      );
    }
    return true;
  }

  /**
   * @description 두 값을 비교하여 판정을 내리는 함수
   * @param {string} input
   * @returns {object} {strike: number, ball: number}
   */
  checkGuess(input) {
    const randomNumber = this.#answerNumbers.join('');
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === randomNumber[i]) {
        strike++;
      } else if (randomNumber.includes(input[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  /**
   * @description 스트라이크와 볼의 갯수를 판별하여 메세지를 출력하는 함수
   * @param {number} strike
   * @param {number} ball
   */
  feedbackMessage(strike, ball) {
    if (ball === 0 && strike === 0) {
      print(`${Message.NOTHING}`);
    } else if (strike > 0 && ball > 0) {
      print(`${ball}${Message.BALL} ${strike}${Message.STRIKE}`);
    } else if (ball > 0 && strike === 0) {
      print(`${ball}${Message.BALL}`);
    } else if (strike === 3) {
      print(`${strike}${Message.STRIKE}\n${Message.SUCCESS}`);
    } else {
      print(`${strike}${Message.STRIKE}`);
    }
  }
}

const app = new App();
app.play();
