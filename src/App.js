import { MissionUtils } from "@woowacourse/mission-utils";
import getUserInput from "./utils/getUserInput";
import generateComputerNumber from "./utils/generateComputerNumber";
import countStrikeBall from "./utils/countStrikeBall";
import restartOrQuit from "./utils/restartOrQuit";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      const NUMBER_LENGTH = 3;
      let computerNumber = generateComputerNumber();

      while (true) {
        let userNumber = await getUserInput();

        const { strike, ball } = countStrikeBall(userNumber, computerNumber);

        if (strike === NUMBER_LENGTH) {
          MissionUtils.Console.print(`${strike}스트라이크`);
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );

          const restart = await restartOrQuit();

          if (restart === 1) {
            computerNumber = generateComputerNumber();
          } else if (restart === 2) {
            break;
          }
        } else if (ball === NUMBER_LENGTH) {
          MissionUtils.Console.print(`${ball}볼`);
        } else if (strike === 0 && ball === 0) {
          MissionUtils.Console.print("낫싱");
        } else if (strike > 0 && ball > 0) {
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw new Error("[ERROR]");
    }
  }
}

export default App;
