import { MissionUtils } from "@woowacourse/mission-utils";
import compareAnswer from "./compareAnswer.js";
import getRandomAnswer from "./getRandomAnswer.js";
import checkUserInput from "./checkUserInput.js";

class App {
  async play() {
    //1. 게임 실행 알리기
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    //2. 랜덤 숫자 (정답) 고르기
    const CORRECT_ARRAY = getRandomAnswer(); //array 형태

    //3. 정답을 맞출 때까지 게임 반복
    while (true) {
      const USER_INPUT_STRING = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 :"
      );
      if (checkUserInput(USER_INPUT_STRING) != false) {
        const RESULT = compareAnswer(CORRECT_ARRAY, USER_INPUT_STRING);
        if (RESULT) {
          break;
        }
      }
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    if (
      (await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      )) === "1"
    )
      await this.play();
  }
}

export default App;
