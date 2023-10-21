import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./RandomNumber.js";

class App {
  async play() {
      console.print("숫자 야구 게임을 시작합니다."); //게임시작
  }
}

const app = new App(); //게임시작
app.play();

export default App;