import { Console, Random } from "@woowacourse/mission-utils";

const LIMIT_NUM_LENGTH = 3;
// !!!!!

class App {
  async play() {
    const randomNum = this.getRandomNum();
    await this.getInputNum(randomNum);
  }

  getRandomNum() {
    Console.print(`숫자 야구 게임을 시작합니다.`);
    let computer = [];
    while (computer.length < LIMIT_NUM_LENGTH) {
      let NUMB = Random.pickNumberInRange(1, 9);
      if (!computer.includes(NUMB)) {
        computer.push(NUMB);
      }
    }
    return computer;
  }

  async getInputNum(ranNum) {
    let inputNum = await Console.readLineAsync("숫자를 입력해주세요 :");
    await this.startGame(
      ranNum,
      inputNum.split("").map((num) => parseInt(num))
    );
  }

  async startGame(ranNum, inputNum) {
    let strike = [];
    let ball = [];

    for (let i = 0; i < inputNum.length; i++) {
      if (inputNum[i] === 0) {
        throw new Error("[ERROR] 0이 포함되어 있습니다.");
      }
    }
    if (this.checkDouble === true) {
      throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    }
    if (inputNum.length !== LIMIT_NUM_LENGTH) {
      throw new Error("[ERROR] 3자리 숫자가 아닙니다.");
    }

    for (let i = 0; i < inputNum.length; i++) {
      if (inputNum[i] === ranNum[i]) {
        strike.push(inputNum[i]);
      } else if (ranNum.includes(inputNum[i])) {
        ball.push(inputNum[i]);
      }
    }
    this.printResult(strike.length, ball.length);

    if (strike.length === LIMIT_NUM_LENGTH) {
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    } else if (strike.length !== LIMIT_NUM_LENGTH) {
      await this.getInputNum(ranNum);
    }
  }

  checkDouble(inputNum) {
    const NUMBER_SET = new Set(inputNum);
    if (NUMBER_SET.length === LIMIT_NUM_LENGTH) {
      return false;
    }
    return true;
  }

  printResult(strikes, balls) {
    if (strikes + balls === 0) {
      Console.print(`낫싱`);
    } else if (strikes !== 0 && balls !== 0) {
      Console.print(`${balls}볼 ${strikes}스트라이크`);
    } else if (strikes !== 0 && balls === 0) {
      Console.print(`${strikes}스트라이크`);
    } else if (strikes === 0 && balls !== 0) {
      Console.print(`${balls}볼`);
    }
  }
}

export default App;
