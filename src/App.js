import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  constructor() {
    this.computer = new Computer();
  }

  userNumber = [];

  gameStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };

  getUserNumberInput = async () => {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.userNumber = Array.from(input).map((el) => Number(el));
  };

  async play() {
    this.gameStart();
    this.computer.createRandomNumber();
    this.getUserNumberInput();
  }
}

export default App;

const app = new App();
app.play();
