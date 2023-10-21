import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  constructor() {
    this.computer = new Computer();
  }

  gameStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };

  async play() {
    this.gameStart();
    this.computer.createRandomNumber();
  }
}

export default App;

const app = new App();
app.play();
