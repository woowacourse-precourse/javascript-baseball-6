import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = String(Random.pickNumberInRange(1, 9));
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }
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
      if(totalCount[1] === 3) RESULT.push(`\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      if(totalCount[0] === 0 && totalCount[1] === 0) RESULT.push('낫싱');

      Console.print(RESULT.join(''));
    }
  }
}

const app = new App();
app.play();

export default App;
