import Interface from './Interface.js';
import InputException from './InputException.js';
import Validator from './Validator.js';

class Input {
  constructor() {
    this.validator = new Validator();
  }

  /**
* @returns {string}
*/
  async enterExpectedAnswerValue() {
    try {
      const VALUE = await Interface.requestValuForContent('숫자를 입력해주세요');
      this.validator.checkExpectedAnswerValue(VALUE);
      return VALUE;
    } catch (e) {
      throw new InputException(e, '제시된 조건의 숫자를 입력하세요');
    }
  }

  /**
* @returns {"Restart" | "GameOver"}
*/
  async enterRestartOrNotValue() {
    try {
      const COMMAND = await Interface.requestValuForContent(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      );
      this.validator.checkCommand(COMMAND);
      return COMMAND === '1' ? 'Restart' : 'GameOver';
    } catch (e) {
      throw new InputException(e, '1 또는 2만 입력하세요.');
    }
  }
}

export default Input;
