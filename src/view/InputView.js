import { Console } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환한다.
   * @param {string} message - 사용자에게 보여줄 질문
   * @returns {string} userInput
   */
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  },
};

export default InputView;
