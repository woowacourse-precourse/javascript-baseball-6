import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  constructor() {
    this.computerNumber = this.generateNewNumber();
  }

  generateNewNumber() {
    let numberArray = [];

    while (numberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArray.includes(number)) {
        numberArray.push(number);
      }
    }
    return numberArray.join("");
  }

  checkGameResult(userNum) {
    let strike = 0;
    let ball = 0;
    let gameResult = "";

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === userNum[i]) {
        strike++;
      } else if (this.computerNumber.includes(userNum[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      gameResult = "낫싱";
    } else if (strike === 3) {
      gameResult = "3스트라이크";
    } else {
      gameResult = `${ball}볼 ${strike}스트라이크`;
    }

    MissionUtils.Console.print(gameResult);
    if (gameResult === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}

export default GameLogic;
