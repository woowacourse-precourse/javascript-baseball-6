import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class Game {
  constructor() {
    this.answer = this.createThreeRandomNumbers();
  }

  async play() {
    while (true) {
      const userResponse = await this.promptUserForNumbers();

      const { strike, ball } = this.compareNumbers(this.answer, userResponse);

      this.displayGameStatus(strike, ball);

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
  }

  createThreeRandomNumbers() {
    const threeRandomInteger = [];

    while (threeRandomInteger.length < 3) {
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

    for (let i = 0; i < 3; i++) {
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
    let userResponse = await Console.readLineAsync("숫자를 입력해주세요: ");
    userResponse = userResponse.trim();

    Validation.validateUserNumbersInput(userResponse);

    return userResponse;
  }
}

export default Game;
