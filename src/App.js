import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    this.start();
  }
  // 시작과 동시에 3자리의 숫자 랜덤 생성.
  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randoms = super.randomNumber();
    console.log(this.randoms); // <----- 지워야함
  }
  // 사용자가 숫자를 입력하는 구간.
  // 입력 값에 따라 에러가 발생할지 계속 진행할 지 정해짐
  async play() {
    try {
      const answer = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      this.inputVaild(answer);
    } catch (error) {
      MissionUtils.Console.print(`오류 발생: ${error.message}`);
    }
  }
  // 입력값이 제대로 됐는지 확인.
  inputVaild(answer) {
    const result = super.vaild(answer);

    if (result === "Normal Value") {
      this.ballAndStrike(answer);
    }
  }

  // 볼 스트라이크 확인.
  ballAndStrike(answer) {
    const ball = super.ballCheck(this.randoms, answer);
    const strike = super.strikeCheck(this.randoms, answer);
    console.log(strike); // <--------- 지워야함

    MissionUtils.Console.print(super.outputHint(ball, strike));

    if (strike === 3) {
      return this.endAndRestart();
    } else {
      this.play();
    }
  }
  async endAndRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    try {
      const questionAnswer = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
      );
      this.end(questionAnswer);
    } catch (error) {
      MissionUtils.Console.print(`오류 발생: ${error.message}`);
    }
  }

  end(questionAnswer) {
    const endAnswer = super.endInputVaild(questionAnswer);

    if (endAnswer === 1) {
      this.randoms = super.randomNumber();
      console.log(this.randoms);
      this.play();
    }
  }
}

export default App;

const app = new App();
app.play();
