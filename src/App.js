import { Console, Random } from "@woowacourse/mission-utils";
import getComputerInput from "./input/getComputerInput.js";
import getUserInput from "./input/getUserInput.js";
import getBallStrikeCount from "./game/getBallStrikeCount.js";
import getResult from "./game/getResult.js";

class App {
  async play() {
    let computer = getComputerInput();
    while(1) {
      let userInput = await getUserInput();
      let totalCount = getBallStrikeCount(computer, userInput);
      let result = getResult(totalCount);

      Console.print(result);

      let isGameOver = ''
      if(totalCount[1] === 3) {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        isGameOver = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
      };
      if(isGameOver === '1') computer = getComputerInput();
      if(isGameOver === '2') break;
    }
  }
}

const app = new App();
app.play();

export default App;
