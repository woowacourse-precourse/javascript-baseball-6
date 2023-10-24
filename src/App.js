import { MissionUtils } from "@woowacourse/mission-utils";
import { messageAllStrike, messageGameEnd, messageGameStart, messageInputNumber, messageRestartInputNumber } from "./constant/allPrintMessage";
import { checkForReplay, isValidGuess } from "./error/validation";
import generateRandomNumbers from "./computer/generateRandomNumbers";
import getUserGuess from "./user/inputUserNumbers";
import askForReplay from "./user/inputRestartNumber";

class App {
  async play() {
    MissionUtils.Console.print(messageGameStart);

    while (true) {
      const computer = generateRandomNumbers();
      const gameResult = await this.playGame(computer);

      if (gameResult === "2") {
        MissionUtils.Console.print(messageGameEnd);
        break;
      }
    }
  }

  async playGame(computer) {
    while (true) {
      const userGuess = await getUserGuess();
      const result = this.checkGuess(computer, userGuess);

      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print(messageAllStrike);
        break;
      }
    }

    const replay = await askForReplay();
    checkForReplay(replay);
    return replay;
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
}

export default App;
