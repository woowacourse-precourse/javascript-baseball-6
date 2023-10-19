import { Console } from "@woowacourse/mission-utils";

class App {
  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async play() {
    this.printStartMessage();
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
