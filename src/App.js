import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let gameOver = true;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (gameOver) {
      const COM_NUMBER = this.createNumber();

      while (true) {
        try {
          if (await this.playRound(COM_NUMBER)) {
            gameOver = await this.restartGameDecision();
            break;
          }
        } catch (error) {
          if (error.message === "[ERROR]") {
            return;
          }
        }
      }
    }
  }

  async playRound(comNumber) {
    let userNumber = await this.requestUserNumber();
    let { strikes, balls } = this.checkNumber(comNumber, userNumber);

    return this.determineGameResult(strikes, balls);
  }

  async requestUserNumber() {
    return await this.requestInput(
      "숫자를 입력해주세요 : ",
      (input) =>
        !isNaN(Number(input)) && input.length === 3 && new Set(input).size === 3
    );
  }

  determineGameResult(strikes, balls) {
    if (strikes === 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      return true;
    } else if (strikes === 0 && balls === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strikes === 0 && balls > 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (strikes > 0 && balls === 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
    return false;
  }

  async restartGameDecision() {
    let answer = await this.requestInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => input === "1" || input === "2"
    );
    return answer === "1";
  }

  createNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join("");
  }

  async getUserInput(promptMessage) {
    return await MissionUtils.Console.readLineAsync(promptMessage);
  }

  isValidInput(input, validation) {
    if (isNaN(Number(input))) {
      throw new Error("[ERROR]");
    }

    if (!validation(input)) {
      throw new Error("[ERROR] 중복되지 않은 3자리 숫자를 입력해주세요.");
    }

    return true;
  }

  printErrorMessage(error) {
    if (error.message === "[ERROR]") {
      MissionUtils.Console.print(
        "문자가 포함된 입력입니다. 애플리케이션을 종료합니다."
      );
      throw error;
    }
    MissionUtils.Console.print(error.message);
  }

  async requestInput(promptMessage, validation) {
    while (true) {
      try {
        const userInput = await this.getUserInput(promptMessage);
        this.isValidInput(userInput, validation);
        return userInput;
      } catch (error) {
        this.printErrorMessage(error);
      }
    }
  }

  checkNumber(com, user) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (com[i] === user[i]) {
        strikes++;
      } else if (com.includes(user[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}

const app = new App();
app.play();

export default App;
