import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  constructor() {}

  generateNewNumber() {
    let numberArray = [];

    while (numberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArray.includes(number)) {
        numberArray.push(number);
      }
    }
    console.log(numberArray);
    return numberArray.join("");
  }

  checkGameResult(computerNum, userNum) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNum[i] === userNum[i]) {
        strike++;
      } else if (computerNum.includes(userNum[i])) {
        ball++;
      }
    }
    return this.printCheckResult(strike, ball);
  }

  printCheckResult(strike, ball) {
    let gameResult = "";

    if (strike === 0 && ball === 0) {
      gameResult = "낫싱";
    } else if (strike === 3) {
      gameResult = "3스트라이크";
    } else {
      if (strike && ball) {
        gameResult = `${ball}볼 ${strike}스트라이크`;
      } else if (strike === 0 && ball) {
        gameResult = `${ball}볼`;
      } else if (strike && ball === 0) {
        gameResult = ` ${strike}스트라이크`;
      }
    }
    return gameResult;
  }
}

export default GameLogic;
