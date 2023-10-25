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
  }
}

export default App;
