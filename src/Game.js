import { Random, Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class Game {
  constructor() {
    this.computerNumber = null;
  }
  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.computerNumber = this.generateComputerNumber();
    Console.print(this.computerNumber);
    return this.playGame();
  }

  generateComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  async inputUserValue() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return this.validateUserInputNumber(userInput);
    } catch (error) {
      Console.print(error);
      throw new Error(error);
    }
  }

  validateUserInputNumber(userInput) {
    Validation.checkInRange(userInput);
    Validation.checkLength(userInput);
    Validation.checkNoDuplicates(userInput);

    return userInput;
  }

  vaildateUserCommand(userInput) {
    Validation.checkCommandValue(userInput);

    return userInput;
  }

  compareValues(userInput) {
    const userNumbers = [...userInput].map(Number);
    const computerNumbers = this.computerNumber;

    const score = userNumbers.reduce(
      (score, userNumber, index) => {
        if (userNumber === computerNumbers[index]) {
          score.strike++;
        } else if (computerNumbers.includes(userNumber)) {
          score.ball++;
        }
        return score;
      },
      { strike: 0, ball: 0 }
    );
    console.log(this.computerNumber, score);
    return score;
  }

  printResult(score) {
    const { strike, ball } = score;

    if (strike === 3) {
      Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    } else if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크 `);
    }
    return false;
  }

  async RestartOrEndGame() {
    try {
      const userInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );

      const command = parseInt(this.vaildateUserCommand(userInput));
      if (command === 1) {
        this.startGame();
      } else if (command === 2) {
        return;
      }
    } catch (error) {
      Console.print(error);
      throw new Error(error);
    }
  }

  async playGame() {
    let result = false;
    while (!result) {
      const userInput = await this.inputUserValue();
      const score = this.compareValues(userInput);
      result = this.printResult(score);
    }
    await this.RestartOrEndGame();
  }
}

export default Game;
