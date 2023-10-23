import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  pickRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  conditionCoverter(result) {
    if (result.ball === 0 && result.strike === 0) {
      return "낫싱";
    } else if (result.ball > 0 && result.strike === 0) {
      return `${result.ball}볼`;
    } else if (result.ball === 0 && result.strike > 0) {
      return `${result.strike}스트라이크`;
    } else if (result.ball > 0 && result.strike > 0) {
      return `${result.ball}볼 ${result.strike}스트라이크`;
    } else return "[ERROR]";
  }

  determineCondition(computer, userInput) {
    const result = { ball: 0, strike: 0 };

    for (let c of computer) {
      console.log(userInput, c);
      if (userInput.includes(c)) {
        if (computer.indexOf(c) === userInput.indexOf(c)) {
          result.strike++;
        } else {
          result.ball++;
        }
      }
    }

    return result;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computer = this.pickRandomNumber();
    const isGameRunning = true;

    while (isGameRunning) {
      const userInput = [];

      const user = await Console.readLineAsync("숫자를 입력해주세요: ");

      // 숫자가 아닌 문자를 입력한 경우
      if (Number.isNaN(Number(user))) {
        throw new Error("[ERROR] 숫자의 형태로 입력해주세요");
      }

      // 1-9가 아닌 숫자를 입력한 경우
      if (user.includes("0")) {
        throw new Error("[ERROR] 1-9 사이의 숫자를 입력해주세요");
      }

      // 세 자리수가 아닌 숫자를 입력한 경우
      if (user.length !== 3) {
        throw new Error("[ERROR] 세 자리로 입력해주세요");
      }

      // 서로 다른 숫자를 입력하지 않은 경우
      if (user.length !== new Set(Array.from(user)).size) {
        throw new Error("[ERROR] 서로 다른 세 자리 수를 입력해주세요");
      }

      user.split("").map((number) => {
        userInput.push(Number(number));
      });

      const determinedCondition = this.determineCondition(computer, userInput);
      Console.print(this.conditionCoverter(determinedCondition));
    }
  }
}

export default App;
