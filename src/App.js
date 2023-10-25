import { MissionUtils } from '@woowacourse/mission-utils';
import createRandomArray from './createRandomArray.js';
import enterAnswer from './enterAnswer.js';
import { compareArrays, Computer } from './compareArrays.js';
const NUMBER_OF_DIGITS = 3;

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const randomArray = createRandomArray(NUMBER_OF_DIGITS);
    const answerArray = await enterAnswer(NUMBER_OF_DIGITS);
    const count = compareArrays(randomArray, answerArray);
    printCount(count[0], count[1], count[2]);
  }
}

function printCount(strike, ball, nothing) {
  if (strike && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (!strike && ball) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (strike && ball) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (nothing) {
    MissionUtils.Console.print('낫싱');
  }
}

const app = new App();
app.play();

export default App;
