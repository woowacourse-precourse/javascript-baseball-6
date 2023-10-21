import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message.js"
import {
    isValidBaseballInput,
    isValidGameOption,
} from "../utils/validation.js";
import { generateRandomNumber } from "./generateRandomNumber.js";

class Game {
    
    async start() {
        try {
            MissionUtils.Console.print(GAME_MESSAGES.GAME_START);
            const computerNumber = generateRandomNumber();
            console.log(computerNumber)
            const userNumber = await this.getNumberInput();
            this.checkNumberMatch(computerNumber, userNumber);
        } catch (error) {
            throw new Error("[ERROR]");
        }
    }

    async gameLoop(computerNumber) {
        try {
            const userNumber = await this.getNumberInput();
            this.checkNumberMatch(computerNumber, userNumber);
        } catch (error) {
            throw new Error("[ERROR]");
        }
    }

    async getNumberInput() {
        try {
          const userInput = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.ENTER_NUMBER);
          if (!isValidBaseballInput(userInput)) {
            throw new Error("[ERROR]");
          }
          return userInput;
        } catch (error) {
          throw new Error("[ERROR]");
        }
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
                        gameScore.strike++;
                    } else {
                        gameScore.ball++;
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
        await MissionUtils.Console.print(output);
        if (output === "3스트라이크") {
            await this.gameEnd();
        } else {
            await this.gameLoop(computerNumber);
        }
    }

    async gameEnd() {
        try {
            await MissionUtils.Console.print(GAME_MESSAGES.GAME_END);
            await MissionUtils.Console.print(GAME_MESSAGES.GAME_QUIT);
            const input = await this.askStartOrQuit();
            if (input === "1") {
                this.start();
            } else {
                this.exitGame();
            }
        } catch (error) {
            throw new Error("[ERROR]");
        }
    }

    async askStartOrQuit() {
        try {
            const input = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.START_OR_QUIT);
            if (!isValidGameOption(input)) {
                throw new Error("[ERROR]");
            }
            return input;
          } catch (error) {
            throw new Error("[ERROR]");
          }
    }

    async exitGame() {
        return;
    }
}

export default Game;