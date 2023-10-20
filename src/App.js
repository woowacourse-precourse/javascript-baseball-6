import { Console, Random } from "@woowacourse/mission-utils";

class App {
  showStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  async play() {
    this.showStartMessage();
  }
}

const app = new App();
app.play();

export default App;
