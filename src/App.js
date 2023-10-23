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
      const user = await Console.readLineAsync("숫자를 입력해주세요: ");
      user.split("").map((number) => {
        userInput.push(Number(number));
      });

      const determinedCondition = this.determineCondition(computer, userInput);
    }
  }
}

export default App;
