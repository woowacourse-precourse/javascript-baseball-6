import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants.js";
import { getResultMessage, isInValidCommand } from "./util.js";
class App {
  computer = [];

  initComputer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(newNumber)) {
        this.computer.push(newNumber);
      }
    }
  }

  getGameResult(userInput) {
    return this.computer.reduce(
      (prevCount, number, index) => {
        if (userInput[index] === number) {
          return { ...prevCount, strike: prevCount.strike + 1 };
        }
        if (userInput.includes(number)) {
          return { ...prevCount, ball: prevCount.ball + 1 };
        }
        return prevCount;
      },
      { strike: 0, ball: 0 }
    );
  }

  async gameStart() {
    const input = await Console.readLineAsync(GAME_MESSAGE.INPUT);
    if (isInValidCommand(input)) {
      throw new Error(GAME_MESSAGE.INVALID_INPUT);
    }
    const inputToNumber = [...input].map(Number);
    const { strike, ball } = this.getGameResult(inputToNumber);

    const resultMessage = getResultMessage({
      strike,
      ball,
    });
    Console.print(resultMessage);

    const isCorrectAnswer = strike === 3;

    if (isCorrectAnswer) {
      Console.print(GAME_MESSAGE.END);
      return;
    }
    await this.gameStart();
  }

  async play() {
    this.initComputer();
    Console.print(GAME_MESSAGE.START);

    await this.gameStart();

    const command = await Console.readLineAsync(
      GAME_MESSAGE.RESTART_OR_EXIT_GUIDE
    );

    switch (command) {
      case "1":
        this.play();
        break;
      case "2":
        break;
      default:
        throw new Error(GAME_MESSAGE.INVALID_INPUT);
    }
  }
}

export default App;
