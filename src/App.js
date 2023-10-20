const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  RANDOM_NUMBER;
  USER_NUMBER;

  getUserInput() {
    MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ", (number) => {
      if (!this.testNumber(number))
        throw new Error(
          "잘못된 값을 입력하셨습니다. 숫자를 다시 입력해주세요."
        );
      this.USER_NUMBER = number;
      this.numberOfHits(number);
      // this.getPrint(number);
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    getUsername();
  }
}

const app = new App();
app.play();
export default App.js;
