import { Console } from "@woowacourse/mission-utils";

class App {
  gameStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };

  async play() {
    this.gameStart();
  }
}

export default App;

const app = new App();
app.play();
