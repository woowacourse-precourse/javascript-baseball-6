import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  constructor(name) {
    this.name = name;
  }
  // 컴퓨터 숫자 받아오기
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9,3);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer)
  }
}
// 사용법:
let app = new App();
app.play();
export default App;
