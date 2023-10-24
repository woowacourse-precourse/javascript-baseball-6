import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  createNumber(computer) {
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  async play() {
    let userAnswer = 1;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (userAnswer == 1) {
      const computer = [];
      let userInput = [];

      this.createNumber(computer);

      while (userInput.join("") != computer.join("")) {
        userInput = [];
        const result = [0, 0]; // [볼, 스트라이크]
        let input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        
        input = new Set(input); // 중복 제거
        input = [...input];
        
        input.map((item) => {
          if (isNaN(item)) {
            throw new Error("[ERROR] : 숫자가 아닌 문자가 포함되어있습니다.");
          }
          userInput.push(Number(item));
        });
        if (userInput.length != 3) {
          throw new Error("[ERROR] : 서로 다른 세개의 숫자를 입력해야 합니다.");
        }
        if (userInput.indexOf(0) != -1) {
          throw new Error("[ERROR] : 0이 포함되어있습니다.");
        }
        

        userInput.map((item, index) => {
          if (computer.indexOf(item) != -1) {
            computer.indexOf(item) === index ? result[1]++ : result[0]++;
          }
        });

        MissionUtils.Console.print(
          `${result[0] + result[1] == 0 ? "낫싱" : ""}${
            result[0] > 0 ? result[0] + `볼 ` : ""
          }${result[1] > 0 ? result[1] + `스트라이크` : ""}`
        );
      }

      userAnswer = await MissionUtils.Console.readLineAsync(
        `3개의 숫자를 모두 맞히셨습니다! 게임 종료 
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : `
      );
      if (userAnswer > 2 || userAnswer < 1) {
        throw new Error("[ERROR]");
      }
      if (userAnswer == 2) {
        MissionUtils.Console.print("게임 종료");
      }
    }
  }
}

export default App;
