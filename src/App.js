import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Functions.js";

class App {
  async play() {
    // 게임 시작과 동시에 랜덤 숫자 (정답)을 생성합니다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let RAND_ANSWER = func.createRandomNumber();
    MissionUtils.Console.print("<랜덤정답값>" + RAND_ANSWER);
    let RESTART = false;

    while (true) {
      //3스트라이크, 혹은 오류가 발생할때까지 계속해서 입력값을 받습니다.
      if (RESTART) {
        RAND_ANSWER = func.createRandomNumber();
        MissionUtils.Console.print("<랜덤정답값>" + RAND_ANSWER);
        RESTART = false;
      }

      let USER_ANSWER = [...(await func.getUserNumber())];
      USER_ANSWER = USER_ANSWER.map(Number);
      MissionUtils.Console.print("<유저입력값>" + USER_ANSWER);

      let STRIKE = func.strikeCheck(RAND_ANSWER, USER_ANSWER);
      let BALL = func.ballCheck(RAND_ANSWER, USER_ANSWER);
      if (STRIKE === 0 && BALL === 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        if (BALL !== 0 && STRIKE === 0) {
          MissionUtils.Console.print(`${BALL}볼`);
        } else if (STRIKE !== 0 && BALL === 0) {
          MissionUtils.Console.print(`${STRIKE}스트라이크`);
        } else {
          MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
        }
      }

      if (STRIKE === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let USERCHOICE = await func.getUserChoice();
        console.log(USERCHOICE);
        if (USERCHOICE == 1) {
          RESTART = true;
          continue;
        } else if (USERCHOICE == 2) {
          MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
          break;
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
