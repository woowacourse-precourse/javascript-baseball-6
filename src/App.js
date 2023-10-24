import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다\n")
    Computer.createNumber();
    MissionUtils.Console.print("숫자를 입력해주세요 :")
    inputNumber = MissionUtils.Console.readLineAsync()
    result = Computer.checkNumber(inputNumber)
  }
}

const app = new App;
app.play;

export default App;