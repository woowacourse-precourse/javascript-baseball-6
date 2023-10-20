import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNum = [];
  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
  async play() {
    console.log("play 함수 실행");
    this.createRandomNum();
  }

  createRandomNum() {
    while (this.computerNum.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const IS_INCLUDE = this.computerNum.includes(NUMBER); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!IS_INCLUDE) {
        this.computerNum.push(NUMBER);
      }
    }
    console.log(this.computerNum);
  }
}

const app = new App();
app.play();

export default App;
