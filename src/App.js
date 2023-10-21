import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.start();
  }
  // 시작과 동시에 3자리의 숫자 랜덤 생성.
  start(endAnswer) {
    this.randoms = super.randomNumber();
    // this.randoms = [1, 3, 5];
    console.log(this.randoms);
    if(endAnswer === 1){
      this.play();
    }
  }

  // 사용자가 숫자를 입력하는 구간.
  // 입력 값에 따라 에러가 발생할지 계속 진행할 지 정해짐
  // 입력값을 inputVaild로 넘긴다.
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
  // 검증은 자식 클래스로 넘긴다.
  // 자식 클래스에서 검증이 끝나고 넘어온 값이 Normal Value 일 경우에 정상 진행.
  inputVaild(answer) {
    const result = super.vaild(answer);

    if (result === "Normal Value") {
      this.ballAndStrike(answer);
    }
  }

  // 볼 스트라이크 확인.
  // ball과 strike 개수를 자식클래스의 ballCheck, strikeCheck를 통해 확인하고 ball과 strike 변수에 적용함.
  // 적용된 ball과 strike를 자식 클래스의 outputHint를 통해 낫싱, n개의 볼, n개의 스트라이크로 출력함.
  // strike가 3개일 경우 endAndRestart로 이동하고, 아닐 경우에는 다시 숫자를 입력하는 play로 이동.

  ballAndStrike(answer) {
    const ball = super.ballCheck(this.randoms, answer);
    const strike = super.strikeCheck(this.randoms, answer);

    MissionUtils.Console.print(super.outputHint(ball, strike));

    if (strike === 3) {
      return this.endAndRestart();
    } else {
      this.play();
    }
  }

  // 3 스트라이크 일 경우 정답을 맞췄다는 정보 출력.
  // 게임을 새로 시작할 지 안할 지 선택.
  // 게임을 새로 시작하면 end로 이동.
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

  // questionAnswer가 1일 경우 다시 3개의 랜덤 숫자를 지정하고 게임을 시작함.
  // 입력된 값을 자식 클래스의 endInputVaild를 통해 결과를 받아냄.
  end(questionAnswer) {
    const endAnswer = super.endInputVaild(questionAnswer);

    if (endAnswer === 1) {
      // this.randoms = super.randomNumber();
      this.start(endAnswer);
    } else {
      this.close();
    }
  }
  close() {
    MissionUtils.Console.print("프로그램을 종료합니다.");
    return;
  }
}

export default App;

const app = new App();
app.play();
