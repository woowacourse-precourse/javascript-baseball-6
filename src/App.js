import { getUserInput, getRandomNumber } from '@/components';
import { print } from '@/utils';

class App {
  constructor() {
    print('숫자 야구 게임을 시작합니다.');
  }
  async play() {
    const computedAnswer = getRandomNumber();
    const userInputNumber = getUserInput();

    print(computedAnswer);
    print(userInputNumber);
  }
}

export default App;
