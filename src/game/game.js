import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";
import { GAME_MESSAGES, ANSWER_LENGTH } from "./constants.js";

class Game {
  constructor() {
    this.answer = this.createRandomNumbers();
  }

  async play() {
    while (true) {
      const userResponse = await this.promptUserForNumbers();

      const { strike, ball } = this.compareNumbers(this.answer, userResponse);

      this.displayGameStatus(strike, ball);

      if (strike === ANSWER_LENGTH) {
        Console.print(GAME_MESSAGES.END);
        break;
      }
    }
  }

  createRandomNumbers() {
    const threeRandomInteger = [];

    while (threeRandomInteger.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!threeRandomInteger.includes(number)) {
        threeRandomInteger.push(number);
      }
    }

    return threeRandomInteger;
  }

  compareNumbers(answer, userResponse) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (userResponse.charAt(i) - "0" === answer[i]) {
        strike++;
      } else if (answer.includes(userResponse.charAt(i) - "0")) {
        ball++;
      }
    }
    return { strike, ball };
  }

  displayGameStatus(strike, ball) {
    let message = "";

    if (ball !== 0) {
      message += `${ball}볼 `;
    }

    if (strike !== 0) {
      message += `${strike}스트라이크`;
    }

    if (!message) {
      message = "낫싱";
    }

    Console.print(message.trim());
  }

  async promptUserForNumbers() {
    let userResponse = await Console.readLineAsync(GAME_MESSAGES.ENTER_NUMBERS);
    userResponse = userResponse.trim();

    Validation.validateUserNumbersInput(userResponse);

    return userResponse;
  }
}

export default Game;
