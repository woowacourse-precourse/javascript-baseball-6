import { MissionUtils } from "@woowacourse/mission-utils";
import { SETTING, SCORE, MESSAGE } from "./constants/gameConfig.js";
class App {
  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < SETTING.INPUT_NUMBER_LENGTH) {
      let number = MissionUtils.Random.pickNumberInRange(SETTING.MIN_NUMBER, SETTING.MAX_NUMBER);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  async setUserInput(randomNumber) {
    console.log(randomNumber);
    try {
      const inputNumber = await MissionUtils.Console.readLineAsync(MESSAGE.GAME.INPUT_NUMBER);
      const userInputNumber = this.userInputNumberValidation(inputNumber).split("").map(Number);
      const baseBallCount = this.calcBallStrike(userInputNumber, randomNumber);
      if (baseBallCount.strike === 3) {
        MissionUtils.Console.print(MESSAGE.GAME.FINISH);
        this.gameRestart();
      } else {
        this.setUserInput(randomNumber);
      }
    } catch (error) {
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    }
  }

  lengthValidation(inputNumber) {
    return inputNumber.length !== SETTING.INPUT_NUMBER_LENGTH;
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
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
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
      MissionUtils.Console.print(
        `${baseBallCount.ball}${SCORE.BALL} ${baseBallCount.strike}${SCORE.STRIKE}`,
      );
    } else if (baseBallCount.ball > 0) {
      MissionUtils.Console.print(`${baseBallCount.ball}${SCORE.BALL}`);
    } else if (baseBallCount.strike > 0) {
      MissionUtils.Console.print(`${baseBallCount.strike}${SCORE.STRIKE}`);
    } else if (baseBallCount.strike === 0 && baseBallCount.ball === 0) {
      MissionUtils.Console.print(SCORE.NOTHING);
    }

    return baseBallCount;
  }

  async gameRestart() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(`${MESSAGE.GAME.RESTART}\n`);

      if (userInput === "1") {
        this.setUserInput(this.setRandomNumber());
      } else if (userInput === "2") {
        MissionUtils.Console.print(MESSAGE.GAME.END);
      } else {
        throw error();
      }
    } catch (error) {
      throw error(MESSAGE.ERROR.WRONG_VALUE);
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
