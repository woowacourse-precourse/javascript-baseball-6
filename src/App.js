import { Console, Random }  from "@woowacourse/mission-utils";
const ONLY_NUMBER = /^[1-9]+$/;

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
    this.gameProcess();
  }

  gameProcess() {
    this.inputNumber();
  }

  async inputNumber() {
    const input = await Console.readLineAsync('숫자를 입력하세요: ');
    this.input = input.split('').map((i) => Number(i));
    this.checkValidation(this.input);
  }

  checkValidation(input) {
    if (input.length !== 3 || new Set(input).size !== 3 || !ONLY_NUMBER.test(input.join(''))) {
      throw Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

}

const app = new App();
app.play();


export default App;
