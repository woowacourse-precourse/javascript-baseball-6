//ES Modules 방식으로 woowacourse-projects/javascript-mission-utils 모듈 사용
import { MissionUtils } from "@woowacourse/mission-utils";
import generateRandomNumber from "./generateRandomNumber.js";
import compareNumbers from "./compareNumbers.js";
import getUserNumbers from "./getUserNumbers.js";

class App {
  async play() {
    let computer_random_number = generateRandomNumber();

    //게임 실행함수
    async function baseballGame() {
      while (true) {
        let user_input = await getUserNumbers();
        compareNumbers(computer_random_number, user_input);
        if (computer_random_number == user_input) {
          const restartOrExit = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
          );
          if (restartOrExit === "1") {
            computer_random_number = generateRandomNumber();
            continue; // 게임 재시작
          } else if (restartOrExit === "2") {
            MissionUtils.Console.print("게임 종료");
            return; // 게임 종료
          }
        }
      }
    }
    //게임 시작
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await baseballGame();
  }
}

// const app = new App();
// app.play();

export default App;
