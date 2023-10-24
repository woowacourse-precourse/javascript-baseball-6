import { Console, Random } from "@woowacourse/mission-utils";
import getComputerInput from "./input/getComputerInput.js";
import getUserInput from "./input/getUserInput.js";

class App {
  async play() {
    let computer = getComputerInput();
    while(1) {
      let userInput = await getUserInput();

      let strikeCount = 0;
      let ballCount = 0;
      for(let i = 0; i < computer.length; i++) {
        if(computer[i] === userInput[i]) strikeCount++;
        else if(computer.includes(userInput[i])) ballCount++;
      }

      let totalCount = [ballCount, strikeCount];
      const RESULT = [];
      if(totalCount[0]) RESULT.push(`${totalCount[0]}볼`);
      if(totalCount[1]) RESULT.push(`${totalCount[1]}스트라이크`);
      if(totalCount[0] === 0 && totalCount[1] === 0) RESULT.push('낫싱');

      Console.print(RESULT.join(''));

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
