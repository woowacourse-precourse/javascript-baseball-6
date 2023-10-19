import { MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNumberArr, getInputNumberArr } from "./utils.js";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const randomArr = getRandomNumberArr();
    console.log(randomArr);
    const inputNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const inputArr = getInputNumberArr(inputNum);
    console.log(inputArr);
  }
}

const app = new App();
app.play();

export default App;
