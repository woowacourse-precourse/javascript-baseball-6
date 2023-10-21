import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./RandomNumber.js";

class App {
  async play() {
      Console.print("숫자 야구 게임을 시작합니다."); //게임시작
      let computer = randomNumber(); //랜덤숫자 받아오기
  }
}

export default App;