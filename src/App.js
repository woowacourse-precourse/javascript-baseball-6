import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
  async play() {
    console.log("play 함수 실행");
    // const RESULT = await Console.readLineAsync("숫자를 입력하세요.");
    this.createRandomNum();
  }

  createRandomNum() {
    const NUM_LIST = [];
    while (NUM_LIST.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const IS_INCLUDE = NUM_LIST.includes(NUMBER); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!IS_INCLUDE) {
        NUM_LIST.push(NUMBER);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
