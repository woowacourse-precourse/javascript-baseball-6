import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();
export default App;
