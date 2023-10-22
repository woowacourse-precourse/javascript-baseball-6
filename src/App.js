import { MissionUtils } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;
class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      let computerNumber = this.generateComputerNumber();

      while (true) {
        let userNumber = await this.getUserInput();
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 3; i++) {
          if (userNumber[i] === computerNumber[i]) {
            strike += 1;
          } else if (computerNumber.includes(userNumber[i])) {
            ball += 1;
          }
        }

        if (strike === NUMBER_LENGTH) {
          MissionUtils.Console.print(`${strike}스트라이크`);
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );

          let restart = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          restart = parseInt(restart);
          if (restart === 1) {
            computerNumber = this.generateComputerNumber();
            continue;
          } else if (restart === 2) {
            break;
          }
        } else if (ball === NUMBER_LENGTH) {
          MissionUtils.Console.print(`${ball}볼`);
        } else if (strike === 0 && strike === 0) {
          MissionUtils.Console.print("낫싱");
        } else {
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw new Error("[ERROR]");
      // break;
    }
    console.log("end");
  }

  async getUserInput() {
    let userNumber = "";

    userNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (
      userNumber === null ||
      userNumber === undefined ||
      userNumber.length !== 3 ||
      Number.isNaN(Number(userNumber)) ||
      this.hasDuplicateDigits(userNumber)
    ) {
      throw new Error("[ERROR]");
    }
    return userNumber;
  }

  hasDuplicateDigits(number) {
    const digits = number.toString().split("");
    return new Set(digits).size !== digits.length;
  }
  generateComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join("");
  }

  async restartOrQuit() {
    let restart = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    restart = parseInt(restart);
    // console.log(typeof restart, restart);
    if (restart === 1) {
      computerNumber = this.generateComputerNumber();
      return 1;
    } else if (restart === 2) {
      return 0;
    }
  }
}

export default App;
