import { Random, Console } from "@woowacourse/mission-utils";

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

const app = new App();
app.play();

export default App;