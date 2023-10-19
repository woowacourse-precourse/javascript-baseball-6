import { Console } from "@woowacourse/mission-utils";
import generateNum from "./functions/generateNum.js";
import throwBall from "./functions/throwBall.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = generateNum({ length: 3 });

    const userStr = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const userNum = Array.from(userStr, Number);
    // Todo. userNum 유효성 검사

    const result = throwBall({
      dest: computerNum,
      src: userNum,
    });

    Console.print(`정답(임시): ${computerNum}`);
    Console.print(result);
  }
}

const app = new App();
app.play();

export default App;
