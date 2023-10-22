import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./components/CreateNumber.js";

class App {
  async play() {
    const createNumber = new CreateNumber();

    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(createNumber.randomNumber);
  }
}
export default App;
