import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작을 사용자에게 알리기
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

export default App;
