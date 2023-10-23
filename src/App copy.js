import name from "./function.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  random = "";
  isEnd = false;
  constructor() {
    this.random = generateRandomNum();
  }
  async play() {
    while (!this.isEnd) {
      const input = fn();
      const result = f1(input);
      const last = this.printOutput(result); 
      if (last) this.continueGame();
    }
    // name()
    // 랜덤 숫자 생성
    // 입력 받기
    // 입력 받은 것 예외 판단(3자리 아닌 것 또는 숫자 아닌 것 입력)
    // 스트라이크 판단
    // 볼 낫싱 판단
    // 스트라이크 볼 출력
    // 게임 종료 시 재시작 및 종료
  }
  f1(input) {
    const result = input
      .split("")
      .map((item, index) => this.check(item, index));
  }
  check = (num, index) => {
    const i = this.random.indexOf(num);
    return i === -1 ? 0 : i === index ? 1 : 2;
  };
  printOutput(result) {
    if (result[0] === 3) console.log("낫띵");
    const arr = [];
    if (result[2]) arr.push(`${result[2]}스트라이크`);
    if (result[1]) arr.push(`${result[1]}볼`);
    console.log(arr.join(" "));
    if (result[2] === 3) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
    return false;
  }
  continueGame() {
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (input === 2) return (this.isEnd = true);
    this.random = generateRandomNum();
  }
}
const app = new App();
app.play();
export default App;
