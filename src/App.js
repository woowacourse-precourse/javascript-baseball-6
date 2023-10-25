import { MissionUtils } from '@woowacourse/mission-utils';
import createRandomArray from './createRandomArray.js';

const NUMBER_OF_DIGITS = 3;

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const randomArray = createRandomArray(NUMBER_OF_DIGITS);
  }
}

const app = new App();
app.play();

export default App;
