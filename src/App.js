import { Console, Random }  from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.input = [];
    this.computer = [];
    this.computerRandomNumber();;
  }

  computerRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

}

const app = new App();
app.play();


export default App;
