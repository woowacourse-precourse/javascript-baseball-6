import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constant/Message.js';
import { StringToArr } from '../Util/StringToArr.js';
import { checkLength } from '../Util/Validation.js';
import { OutputView } from './OutputView.js';
export const InputView = {
  async readNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.GET_INPUT_NUM);
    checkLength(input);
    return StringToArr(input);
    // try {
    //   checkLength(input);
    //   return StringToArr(input);
    // } catch {
    //   OutputView.printError();
    //   return await this.readNum();
    // }
  },
  async readRetry() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.GET_RETRY);
    return input;
  },
};
