import { Console, Random } from "@woowacourse/mission-utils";

// 입력받는 숫자 : 0 포함되는 지 확인 / 숫자인지 확인 / 길이가 3인지 확인

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  async playGame() {
    this.createRandom();
    const userInput = await this.inputNum();
    Console.print(userInput);
  }

  async inputNum() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return input;
  }

  createRandom() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    //return computer;
    Console.print(computer);
  }
}

const start = new App();
start.play();

export default App;
