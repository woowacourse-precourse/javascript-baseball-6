import { MissionUtils } from "@woowacourse/mission-utils";
import { messageAllStrike, messageGameEnd, messageGameStart, messageInputNumber, messageRestartInputNumber } from "./constant/allPrintMessage";
import { messageIsOverlap, messageNotNumber, messageNotOneToNine, messageNotRestartNumber, messageNotThreeDigits } from "./error/allErrorMessage";

class App {
  async play() {
    MissionUtils.Console.print(messageGameStart);

    while (true) {
      const computer = this.generateRandomNumbers();
      const gameResult = await this.playGame(computer);

      if (gameResult === "2") {
        MissionUtils.Console.print(messageGameEnd);
        break;
      }
    }
  }

  async playGame(computer) {
    while (true) {
      const userGuess = await this.getUserGuess();
      const result = this.checkGuess(computer, userGuess);

      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print(messageAllStrike);
        break;
      }
    }

    const replay = await this.askForReplay();
    this.checkForReplay(replay);
    return replay;
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  async getUserGuess() {
    let userGuess = await MissionUtils.Console.readLineAsync(messageInputNumber);
    this.isValidGuess(userGuess)
    return userGuess;
  }

  isValidGuess(guess) {
    if (guess.length !== 3) {
      throw new Error(messageNotThreeDigits);
    }
    if (isNaN(Number(guess))) {
      throw new Error(messageNotNumber);
    }
    if (new Set(guess).size !== guess.length) {
      throw new Error(messageIsOverlap);
    }
    if (guess < 1 && guess > 9) {
      throw new Error(messageNotOneToNine);
    }
  }

  checkGuess(computer, userGuess) {
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
      if (computer[i] === userGuess[i]) {
        strikes++;
      } else if (computer.includes(userGuess[i])) {
        balls++;
      }
    }
    if (strikes === 0 && balls === 0) {
      return "낫싱";
    }
    return `${balls > 0 ? balls + "볼 " : ""}${strikes > 0 ? strikes + "스트라이크" : ""}`;
  }

  async askForReplay() {
    return await MissionUtils.Console.readLineAsync(messageRestartInputNumber);
  }

  async checkForReplay(replayInput) {
    if (replayInput !== '1' && replayInput !== '2') {
      throw new Error(messageNotRestartNumber);
    }
  }
}

export default App;
