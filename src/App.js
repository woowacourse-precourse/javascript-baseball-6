import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let userAnswer = 1;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (userAnswer == 1) {
      const computer = [];
      let userInput = [];

      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      while (userInput.join("") != computer.join("")) {
        userInput = [];
        let input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
      }
      
      userAnswer = await MissionUtils.Console.readLineAsync(
        `3개의 숫자를 모두 맞히셨습니다! 게임 종료 
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : `
      );
    }
  }
}

export default App;
