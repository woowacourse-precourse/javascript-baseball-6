import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  async play() {
    const computerNumber = super.randomNumber();
    while (true) {
      try {
        const userAnswer = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        this.isValidAnswer(userAnswer);
        const isGameEnd = this.ballAndStrike(computerNumber, userAnswer);
        if (isGameEnd) {
          this.endAndRestart();
          break;
        }
      } catch (error) {
        throw error;
      }
    }
  }
  isValidAnswer(answer) {
    if (answer.includes(" ")) {
      throw new Error("[ERROR] 공백이 포함되어 있습니다.");
    }
    if (isNaN(answer)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    const answerArr = answer.split("");
    if (answerArr.includes("0")) {
      throw new Error("[ERROR] 0이 포함되어 있습니다.");
    }
    if (answerArr.includes("-")) {
      throw new Error("[ERROR] - 가 포함되어 있습니다.");
    }
    if (answer.length !== 3) {
      throw new Error("[ERROR] 세 자리 숫자를 입력해주세요.");
    }
    const answerSet = new Set(answer);
    if (answerSet.size !== 3) {
      throw new Error("[ERROR] 중복된 숫자를 입력했습니다.");
    }
    return "Normal Value";
  }
  ballAndStrike(computer, user) {
    // console.log(computer);
    const ballStrike = super.Check(computer, user);
    // console.log(ballStrike); // <---- 지워야 함
    MissionUtils.Console.print(super.outputHint(ballStrike[0], ballStrike[1]));
    return ballStrike[1] === 3;
  }
  async endAndRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    try {
      const endAnswer = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
      );
      this.end(endAnswer);
    } catch (error) {
      throw error;
    }
  }
  end(restartAndEnd) {
    const endAnswer = this.endInputValid(restartAndEnd);

    if (endAnswer === 1) {
      this.play();
    } else {
      this.close();
    }
  }
  endInputValid(question) {
    const questionNumber = Number(question);
    if (questionNumber !== 1 && questionNumber !== 2) {
      throw new Error("[ERROR] 1과 2만 입력해주세요.");
    }
    return questionNumber;
  }
  close() {
    MissionUtils.Console.print("프로그램을 종료합니다.");
  }
}

export default App;

const app = new App();
app.play();
