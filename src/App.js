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

      console.log(userInput);
    }
  }
}

const app = new App();
app.play();

export default App;
