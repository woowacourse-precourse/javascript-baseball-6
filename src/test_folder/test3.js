import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame";

class App extends InsideGame {
  constructor() {
    super(); // 상속
    this.play();
  }

  async play() {
    this.randoms = await super.randomNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  async input() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    this.vaildInput(userInput);
  }

  async hint(userInput) {
    const ball = await super.ballCheck(this.randoms, userInput);
    const strike = await super.strikeCheck(this.randoms, userInput);

    if (strike === 3) {
      return this.threeStrike();
    }
    MissionUtils.Console.print(super.outputHint(ball, strike));
    return this.input();
  }

  async threeStrike() {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    await MissionUtils.Console.readLineAsync(
      "게임을 재시작하려면 1, 종료하려면 2를 입력하세요: ", (choice) => {
        switch (choice){
          case '1':
            return 
        }
      }
  }
  restart() {
    this.randoms = super.randomNumber();
    this.input();
  }
  exit() {
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.close();
  }
}

export default App;

const app = new App();
app.play();
