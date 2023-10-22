import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Functions.js";

class App {
  async play() {
    // 게임 시작과 동시에 랜덤 숫자 (정답)을 생성합니다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const RAND_ANSWER = func.createRandomNumber();
    MissionUtils.Console.print(RAND_ANSWER);

    //3스트라이크, 혹은 오류가 발생할때까지 계속해서 입력값을 받습니다.
    let USER_ANSWER = [...(await func.getUserNumber())];
    USER_ANSWER = USER_ANSWER.map(Number);
    MissionUtils.Console.print(USER_ANSWER);
  }
}
const app = new App();
app.play();

export default App;
