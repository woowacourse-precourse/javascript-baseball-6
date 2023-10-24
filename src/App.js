import { Console } from "@woowacourse/mission-utils";
import start from "./components/start";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    start();
  }
}

export default App;
