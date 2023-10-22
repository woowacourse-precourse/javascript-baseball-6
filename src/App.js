import User from "./User.js";
import Game from "./Game.js";
import { outputMessage } from "./constants/Message.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const user = new User(); 

    while(true) {
      const baseball = new Game();
      baseball.startGame();
  
      while(true) {
        const userThreeNumber = await user.inputNumber();
        const gameResult = baseball.makeComputerGrade(userThreeNumber);

        user.printGameResult(gameResult);

        if (gameResult === outputMessage.STRIKE_OUT) {
          break;
        }
      }     

      const retryOrEnd = await user.inputRetryOrEnd();
  
      if (retryOrEnd === '2') {
        Console.print("게임 종료");
        break;
      }
    }
  }
}

export default App;
