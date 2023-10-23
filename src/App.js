import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  async setUserInput(randomNumber) {
    console.log(randomNumber);
    try {
      const inputNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      const userInputNumber = this.userInputNumberValidation(inputNumber).split("").map(Number);
      const baseBallCount = this.calcBallStrike(userInputNumber, randomNumber);
      if (baseBallCount.strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.gameRestart();
      } else {
        this.setUserInput(randomNumber);
      }
    } catch (error) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  lengthValidation(inputNumber) {
    return inputNumber.length !== 3;
  }

  rangeValidation(inputNumber) {
    return isNaN(inputNumber) || inputNumber.toString().includes("0");
  }

  duplicateValidation(inputNumber) {
    for (let i = 1; i < inputNumber.length; i++) {
      if (inputNumber[i - 1] === inputNumber[i]) return true;
    }
    return false;
  }

  userInputNumberValidation(inputNumber) {
    if (
      this.lengthValidation(inputNumber) ||
      this.rangeValidation(inputNumber) ||
      this.duplicateValidation(inputNumber)
    ) {
      throw new Error("[ERROR]");
    }
    return inputNumber;
  }

  isStrike(randomNumber, userInputNumber, idx) {
    return randomNumber.includes(userInputNumber) && randomNumber[idx] === userInputNumber;
  }

  isBall(randomNumber, userInputNumber, idx) {
    return randomNumber.includes(userInputNumber) && randomNumber[idx] !== userInputNumber;
  }

  calcBallStrike(userInputNumber, randomNumber) {
    const baseBallCount = {
      strike: 0,
      ball: 0,
    };

    userInputNumber.forEach((userInputNumber, idx) => {
      if (this.isBall(randomNumber, userInputNumber, idx)) {
        baseBallCount.ball++;
      } else if (this.isStrike(randomNumber, userInputNumber, idx)) {
        baseBallCount.strike++;
      }
    });

    if (baseBallCount.ball > 0 && baseBallCount.strike > 0) {
      MissionUtils.Console.print(`${baseBallCount.ball}볼 ${baseBallCount.strike}스트라이크`);
    } else if (baseBallCount.ball > 0) {
      MissionUtils.Console.print(`${baseBallCount.ball}볼`);
    } else if (baseBallCount.strike > 0) {
      MissionUtils.Console.print(`${baseBallCount.strike}스트라이크`);
    } else if (baseBallCount.strike === 0 && baseBallCount.ball === 0) {
      MissionUtils.Console.print(`낫싱`);
    }

    return baseBallCount;
  }

  async gameRestart() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n`,
      );

      if (userInput === "1") {
        this.setUserInput(this.setRandomNumber());
      } else if (userInput === "2") {
        MissionUtils.Console.print("게임 종료");
      } else {
        throw error();
      }
    } catch (error) {
      throw error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async play() {
    this.showStartMessage();
    await this.setUserInput(this.setRandomNumber());
  }
}

const app = new App();
app.play();

export default App;
