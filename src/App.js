import User from "./User.js";
import Game from "./Game.js";
import { message, option, outputMessage } from "./constants/Message.js";
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
  
      if (retryOrEnd === option.QUIT) {
        Console.print(message.END_GAME);
        break;
      }
    }
  }
}

export default App;
