import { MissionUtils } from '@woowacourse/mission-utils';

const { Console, Random } = MissionUtils;
class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomNumber();
  }

  // 1부터 9까지의 다른 수로 이루어진 3개의 숫자를 요소로 갖는 배열 생성
  async getRandomNumber() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

const app = new App();

app.play();

export default App;
