import { BaseballGame } from "./BaseballGame.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const baseballGame = new BaseballGame();

    let playAgain = true;
    while (playAgain) {
      try {
        let inning = await baseballGame.startGame();
        if (!inning) {
          throw new Error("[ERROR]");
        }
        //재시작 여부를 묻는 부분
        const userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if (userInput == '1') continue;
        if (userInput == '2') break;
        throw new Error("[ERROR]");
      } catch (error) {
        throw error;
      }
    }
  }
}

export default App;
