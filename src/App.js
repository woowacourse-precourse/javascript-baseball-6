import { Console, Random } from "@woowacourse/mission-utils";
import getComputerInput from "./input/getComputerInput.js";
import getUserInput from "./input/getUserInput.js";
import getBallStrikeCount from "./game/getBallStrikeCount.js";
import getResult from "./game/getResult.js";
import isGameOver from "./game/isGameOver.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = getComputerInput();
    while(1) {
      const USER_INPUT = await getUserInput();
      const TOTAL_COUNT = getBallStrikeCount(computer, USER_INPUT);
      const RESULT = getResult(TOTAL_COUNT);
      Console.print(RESULT);
      
      if(TOTAL_COUNT[1] === 3) {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        if(await isGameOver()) break;
        else computer = getComputerInput();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
