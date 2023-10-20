import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const GameStart = () => {
      const baseball = [];

      while (baseball.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!baseball.includes(number)) {
          baseball.push(number);
        }
      }

      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
      
      return baseball;
    }
  }
}

const app = new App();
app.play();

export default App;
