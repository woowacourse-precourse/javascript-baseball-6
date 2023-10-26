import { MissionUtils } from "@woowacourse/mission-utils";
import { SETTING, SCORE } from "./constants/GameConfig.js";

class Computer {
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
}

export default Computer;
