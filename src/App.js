import { Console, Random } from "@woowacourse/mission-utils";

class App {
  checkUserInput(value) {
    if (value.length !== 3) {
      return false;
    } 
    const set = new Set(value);
    if (set.size !== 3) {
      return false;
    }
    for (let i = 0; i < 3; i++) {
      if (!/[1-9]/.test(value[i])) {
        return false;
      }
    }
    return true;
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.checkUserInput(userInput)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return userInput;
  }

  getComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const userInput = await this.getUserInput();
    const computerNum = this.getComputerNum();
  }
}

export default App;

const app = new App();
app.play();