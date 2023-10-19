import { Console } from "@woowacourse/mission-utils";

class App {
  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  playOneLoop() {
    Console.print("숫자를 입력해주세요 : ");
  }

  async play() {
    this.printStartMessage();
    this.playOneLoop();
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
