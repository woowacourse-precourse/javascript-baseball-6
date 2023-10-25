import { printMessage } from "./utils/messages.js";
class App {
  async play() {
    printMessage("숫자 야구 게임을 시작합니다.");

    while (true) {
      const computerNumber = generateComputerNumber();
      let result = { strike: 0, ball: 0 };
    }
  }
}

export default App;
