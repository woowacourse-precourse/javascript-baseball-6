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
    return computer;
  }

  compareNum(userInput, computerNum) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (Number(userInput[i]) === computerNum[i]) {
        strike++;
      } else if (computerNum.includes(Number(userInput[i]))) {
        ball++;
      }
    }
    return { strike, ball };
  }

  async correctAnswer() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.option = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    return this.option;
  }

  printResult(strike, ball) {
    let resultMessage = ''
    if (ball !== 0) {
      resultMessage += `${ball}볼 `;
    }
    if (strike !== 0) {
      resultMessage += `${strike}스트라이크`;
    }
    if (resultMessage === '') {
      resultMessage += '낫싱';
    }
    return resultMessage;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computerNum = this.getComputerNum();
    console.log(computerNum)

    while (true) {
      const userInput = await this.getUserInput();
      const { strike, ball } = this.compareNum(userInput, computerNum);

      if (strike === 3) {
        Console.print('3스트라이크');
        const option = await this.correctAnswer();
        if (option === '1') {
          computerNum = this.getComputerNum();
        } else if (option === '2') {
          break;
        } else {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
      } else {
        Console.print(this.printResult(strike, ball));
      }
    }
  }
}

export default App;

const app = new App();
app.play();