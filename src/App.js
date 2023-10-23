import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  // 사용자가 숫자를 입력하는 구간.
  // 입력 값에 따라 에러가 발생할지 계속 진행할 지 정해짐
  // 입력값을 isInputVaild로 넘긴다.
  async play() {
    const computerNumber = super.randomNumber();
    let isGameEnd = false;

    while (!isGameEnd) {
      try {
        const userAnswer = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        super.isValidAnswer(userAnswer);
        isGameEnd = this.ballAndStrike(computerNumber, userAnswer);
        if (isGameEnd) {
          await this.endAndRestart();
          break;
        }
      } catch (error) {
        throw error;
      }
    }
  }

  // 볼 스트라이크 확인.
  // ball과 strike 개수를 자식클래스의 Check를 통해 확인하고 ballstrike 변수에 적용함.
  // 적용된 ballstrike를 자식 클래스의 outputHint를 통해 낫싱, n개의 볼, n개의 스트라이크로 출력함.
  // strike가 3개일 경우 endAndRestart로 이동하고, 아닐 경우에는 다시 숫자를 입력하는 play 진행.

  ballAndStrike(computer, user) {
    const ballStrike = super.Check(computer, user);
    MissionUtils.Console.print(super.outputHint(ballStrike[0], ballStrike[1]));
    return ballStrike[1] === 3;
  }

  // 3개를 모두 맞췄기에 게임을 새로 시작할 지 종료할 지 선택
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

  // 1을 입력하면 다시 play()로 이동. 2를 입력하면 종료
  end(restartAndEnd) {
    if (super.endInputValid(restartAndEnd) === "1") {
      this.play();
    } else {
      MissionUtils.Console.print("프로그램을 종료합니다.");
      return;
    }
  }
}

export default App;

// const app = new App();
// app.play();
