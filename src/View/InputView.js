import { Console } from '@woowacourse/mission-utils';

export const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    // TODO: 공통 입력값 검증

    return userInput;
  },
};
