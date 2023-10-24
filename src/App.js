import { Console } from "@woowacourse/mission-utils";
import getRandomNumber from "./utils/getRandomNumber.js";
import { ERROR_MESSAGE, GAME_MESSAGE, GAME_STATUS } from "./utils/constants.js";
import { validateInput } from "./utils/validateInput.js";

class App {
  async play() {
    let computer = getRandomNumber();
    let gameStatus = GAME_STATUS.RUNNING;

    Console.print(GAME_MESSAGE.START);

    while (gameStatus === GAME_STATUS.RUNNING) {
      const input = await Console.readLineAsync(GAME_MESSAGE.INPUT_NUMBER);

      validateInput(input);

      let ball = 0;
      let strike = 0;

      input
        .split("")
        .map(Number)
        .forEach((num, index) => {
          if (num === computer[index]) {
            strike++;
          }
          if (computer.includes(num) && num !== computer[index]) {
            ball++;
          }
        });

      if (strike === 0 && ball === 0) {
        Console.print(GAME_MESSAGE.NOTHING);
      } else if (strike === 0) {
        Console.print(`${ball}${GAME_MESSAGE.BALL}`);
      } else if (ball === 0) {
        Console.print(`${strike}${GAME_MESSAGE.STRIKE}`);
      } else {
        Console.print(
          `${ball}${GAME_MESSAGE.BALL} ${strike}${GAME_MESSAGE.STRIKE}`
        );
      }

      if (strike === 3) {
        Console.print(GAME_MESSAGE.COMPLETE);
        Console.print(GAME_MESSAGE.RESTART);

        gameStatus = await Console.readLineAsync();

        if (
          gameStatus !== GAME_STATUS.RESTART &&
          gameStatus !== GAME_STATUS.END
        ) {
          throw new Error(ERROR_MESSAGE.NOT_ONE_OR_TWO);
        }

        if (gameStatus === GAME_STATUS.RESTART) {
          computer = getRandomNumber();
          gameStatus = GAME_STATUS.RUNNING;
        }
      }
    }
  }
}

export default App;
