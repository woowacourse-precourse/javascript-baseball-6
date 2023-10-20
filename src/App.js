import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = [];
    this.inputNum = [];
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

let app = new App();
app.play();

export default App;
