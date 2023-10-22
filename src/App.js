import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.init();
    try {
      const userInput = await this.playerInput();
    } catch (error) {
      Console.print(error);
    }
  }

  init() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playerInput() {
    try {
      return await Console.readLineAsync("숫자를 입력해주세요 : ");
    } catch (error) {
      return Console.print(error);
    }
  }
}

const app = new App();
app.play();

export default App;
