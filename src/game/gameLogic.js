import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message.js"
import {
  isValidBaseballInput,
  isValidGameOption,
} from "../utils/validation.js"; 
import { generateRandomNumber } from "./generateRandomNumber.js";

class Game {
  constructor() {
    this.computerNumber = generateRandomNumber();
  }

  async start() {
    MissionUtils.Console.print(GAME_MESSAGES.GAME_START);
    try {
      const userNumber = await this.getNumberInput();
      this.checkNumberMatch(this.computerNumber, userNumber);
    } catch (error) {
      console.error("[ERROR]", error.message);
      throw new Error("[ERROR]");
    }
  }
  

  async gameLoop(computerNumber) {
    try {
      const userNumber = await this.getNumberInput();
      this.checkNumberMatch(computerNumber, userNumber);
    } catch (error) {
      // console.error("[ERROR]");
      throw new Error("[ERROR]");
    }
  }

  async getNumberInput() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(
        GAME_MESSAGES.ENTER_NUMBER,
        (inputNumber) => {
          if (!isValidBaseballInput(inputNumber)) {
            console.error("[ERROR]");
            reject(new Error("[ERROR]"));
          } else {
            resolve(inputNumber);
          }
        }
      );
    });
  }
  

  async checkNumberMatch(computerNumber, userNumber) {
    let gameScore = {
      ball: 0,
      strike: 0,
    };
    const userNum = userNumber.split("");
    const computerNum = computerNumber.split("");

    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
      for (let userIndex = 0; userIndex < 3; userIndex++) {
        if (computerNum[computerIndex] === userNum[userIndex]) {
          if (computerIndex === userIndex) {
            gameScore.ball++;
          } else {
            gameScore.strike++;
          }
        }
      }
    }

    await this.showBallStrike(gameScore, computerNumber);
  }

  async showBallStrike(gameScore, computerNumber) {
    const { ball, strike } = gameScore;
    let text = [];

    if (ball > 0) {
      text.push(`${ball}볼`);
    }

    if (strike > 0) {
      text.push(`${strike}스트라이크`);
    }

    if (text.length === 0) {
      text.push("낫싱");
    }
    const output = text.join(" ");
    MissionUtils.Console.print(output);

    if (output === "3스트라이크") {
      await this.gameEnd();
    } else {
      await this.gameLoop(computerNumber);
    }
  }

  async gameEnd() {
    MissionUtils.Console.print(GAME_MESSAGES.GAME_END);
    try {
      const input = await this.askStartOrQuit();
      if (input === "1") {
        this.start();
      } else {
        this.exitGame();
      }
    } catch (error) {
      // console.error("[ERROR]");
      throw new Error("[ERROR]");
    }
  }

  async askStartOrQuit() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GAME_MESSAGES.START_OR_QUIT, (input) => {
        if (!isValidGameOption(input)) {
          // console.error("[ERROR]");
          reject(new Error("[ERROR]"));
        } else {
          resolve(input);
        }
      });
    });
  }

  exitGame() {
    MissionUtils.Console.close();
  }
}

export default Game;
