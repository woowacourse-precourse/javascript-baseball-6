const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./constants");
const { Computer } = require("./Computer");

class BaseballGame {
  async startBasballGame() {
    // 게임 시작 메세지 출력
    Console.print(GAME_MESSAGE.START);
    // TODO : 1~9까지 랜덤 숫자를 생성하는 기능
    const computer = new Computer();
    const computerNumber = computer.generateComputerNumber();

    while (true) {
      // TODO : 숫자를 입력 받는 기능
      try {
        const userNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT);
        const userNumberArray = userNumber.split("").map(Number);
        // TODO : 사용자가 입력한 숫자에 대해 유효한 값인지 확인하는 기능
        this.inValidNumber(userNumber, userNumberArray);
        // TODO : 볼과 스트라이크를 계산하는 기능
        const { ball, strike } = this.calculateBallAndStrike(
          computerNumber,
          this.userNumber
        );
        // TODO : 비교한 결과에 대해 출력하는 기능
        const result = this.printResult(ball, strike);

        if (result) {
          return this.reStart();
        }
      } catch (error) {
        throw new Error(ERROR_MESSAGE.IS_INVALID);
      }
    }
  }

  inValidNumber(userNumber, userNumberArray) {
    if (isNaN(userNumber)) {
      throw new Error(ERROR_MESSAGE.IS_NUMBER);
    }

    if (userNumberArray.length !== 3) {
      throw new Error(ERROR_MESSAGE.IS_DIGIT);
    }

    if (new Set(userNumber).size !== userNumberArray.length) {
      throw new Error(ERROR_MESSAGE.IS_DUPLICATION);
    }

    return true;
  }

  calculateBallAndStrike(computerNumber, userNumber) {
    const userNumberArray = String(userNumber).split("");
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber.includes(Number(userNumberArray[i]))) {
        ball++;
      }
      if (Number(computerNumber[i]) === Number(userNumberArray[i])) {
        strike++;
      }
    }

    ball -= strike;

    return { ball, strike };
  }

  printResult(ball, strike) {
    if (ball > 0 && strike > 0 && strike < 3) {
      Console.print(
        `${ball}${BASEBALL_MESSAGE.BALL} ${strike}${BASEBALL_MESSAGE.STRIKE}`
      );
    } else if (strike > 0 && strike < 3) {
      Console.print(`${strike}${BASEBALL_MESSAGE.STRIKE}`);
      return false;
    } else if (ball > 0) {
      Console.print(`${ball}${BASEBALL_MESSAGE.BALL}`);
      return false;
    }

    if (ball === 0 && strike === 0) {
      Console.print(BASEBALL_MESSAGE.NOTHING);
      return false;
    }

    if (strike === 3) {
      Console.print(`${strike}${BASEBALL_MESSAGE.STRIKE}`);
      Console.print(GAME_MESSAGE.SUCCESS);
      return true;
    }
  }

  // TODO : 재시작 여부를 확인하는 기능
  async reStart() {
    try {
      const choiceEndOption = await Console.readLineAsync(GAME_MESSAGE.RESTART);
      if (choiceEndOption === END_OPTION.NEW_GAME) {
        return this.play();
      } else if (choiceEndOption == END_OPTION.EXIT) {
        Console.print(GAME_MESSAGE.END);
      }
    } catch (error) {
      throw new Error(ERROR_MESSAGE.IS_INVALID);
    }
  }
}

module.exports = { BaseballGame };
