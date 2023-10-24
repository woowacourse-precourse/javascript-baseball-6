import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './generateRandomNum';
import userInput from './userInput';
import isValidNum from './isValidNum';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const GENERATED_RANDOM_NUM = generateRandomNum();
    const USER_INPUT = userInput();

    isValidNum(USER_INPUT);
  }
}

export default App;