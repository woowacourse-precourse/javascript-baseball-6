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

  inputValidChecker(user) {
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
    let isGameRunning = true;
    let computer = this.pickRandomNumber();

    while (isGameRunning) {
      const userInput = [];

      const user = await Console.readLineAsync("숫자를 입력해주세요: ");
      this.inputValidChecker(user);

      user.split("").map((number) => {
        userInput.push(Number(number));
      });

      const determinedCondition = this.determineCondition(computer, userInput);
      Console.print(this.conditionCoverter(determinedCondition));

      if (determinedCondition.strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        const isRestart = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );

        switch (isRestart[0]) {
          case "1":
            isGameRunning = true;
            computer = this.pickRandomNumber();
            break;
          case "2":
            isGameRunning = false;
            break;
          default:
            throw new Error("[ERROR]");
        }
      }
    }

    return;
  }
}

export default App;
