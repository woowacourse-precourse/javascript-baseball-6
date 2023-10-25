import { computerRandom, validateInput, countHandle, resultHandle } from "./Function.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumber = computerRandom();
  }

  async play() {
    try {
      MissionUtils.Console.print("숫자야구 게임을 시작합니다.");
      let strikeCnt = 0;

      while (strikeCnt < 3) {
        strikeCnt = await this.gameStart();

        if (strikeCnt === 3) {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const input = await this.gameRestart();
        }
      }
    } catch {
      throw new Error("[ERROR]");
    }
  }

  async getInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
      const answer = String(input);
      console.log(answer);
      return answer;
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }

  async gameStart() {
    const answer = await this.getInput();
    const validAnswer = await validateInput(this.randomNumber, answer);
    const countResult = countHandle(this.randomNumber, validAnswer);
    const { strikeCnt, ballCnt } = countResult;
    resultHandle(strikeCnt, ballCnt);
    return strikeCnt;
  }

  async gameRestart() {
    const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (input === "1") {
      this.randomNumber = computerRandom();
      this.gameStart();
    } else if (input === "2") {
      this.gameExit();
    }
  }

  gameExit = () => {
    throw new Error("게임 종료");
  };
}

export default App;

/*const app = new App();
app.play();*/
