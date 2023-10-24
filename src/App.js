import { Console, Random } from "@woowacourse/mission-utils";
import getComputerInput from "./input/getComputerInput.js";

class App {
  async play() {
    let computer = getComputerInput();
    while(1) {
      let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      
      if(userInput.length !== 3) throw new Error("3자리의 숫자를 입력해주세요.");
      
      const UNIQUE_NUM = new Set();
      for(let i = 0; i < userInput.length; i++) {
        UNIQUE_NUM.add(userInput[i]);
      }
      if(UNIQUE_NUM.size !== 3) throw new Error("서로 다른 3자리의 수를 입력해주세요.");

      let isOneToNineNum = userInput.split('').every(number => Number(number) >= 1 && Number(number) <= 9)
      if(!(isOneToNineNum)) throw new Error('1~9 사이의 숫자를 입력해주세요.');

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
