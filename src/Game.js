import { Console } from '@woowacourse/mission-utils';
import { messages } from './Message.js';

/**
 * 사용자의 입력 값을 입력받은 후 출력
 */
export const getInput = () => {
  Console.readLine(messages.INPUT_NUMBER, (input) => {
    console.log(`${messages.INPUT_NUMBER} : ${input}`);
  });
}