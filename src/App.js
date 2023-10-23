import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

// console.log(MissionUtils.Random.pickNumberInRange(1, 9));

const app = new App();
app.play();
export default App;
