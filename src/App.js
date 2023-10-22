import generateNumber from './utils/Number.js';
import { print, input } from './view/View.js';
import Message from './utils/Message.js';

export default class App {
  #answerNumber;

  constructor() {
    this.init();
  }

  async play() {
    try {
      print(Message.GAME_START);
      const inputNumber = (await input(Message.INPUT_NUMBER)).trim();
      const isValid = this.validateInput(inputNumber);

      if (!isValid) {
        throw new Error(
          '[ERROR] 사용자 입력값이 잘못되었습니다. 다시 확인해주세요.',
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  init() {
    this.#answerNumber = generateNumber(1, 9);
    console.log(this.#answerNumber);
  }

  /**
   * @description 사용자 입력값 검증 함수
   * 1.숫자가 아닌 다른 값의 유무 판단(공백포함) / 2.입력값의 길이 판단 / 3.서로 다른 3개의 숫자 판단 / 4. 0을 지니고 있는지 판단
   * @param {string} input
   * @return {boolean} 유효성 검사 결과 반환
   */

  validateInput(input) {
    const set = new Set(input.split(''));
    return !(isNaN(Number(input)) || set.size === 3 || set.has('0'));
  }
}

const app = new App();
app.play();
