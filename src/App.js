import { Console } from '@woowacourse/mission-utils';
import { generateComputerNumber } from './utils/generateComputerNumber.js';
import { validateUserNumber } from './utils/validateUserNumber.js';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    const computerNumber = generateComputerNumber();
    const userInputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    validateUserNumber(userInputNumber);
  }
}

const app = new App();
app.play();

export default App;
