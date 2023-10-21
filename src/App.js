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

  setUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      const userInputNumber = inputNumber.split("").map(Number);
      Console.print(userInputNumber);
    });
  }

  async play() {
    this.showStartMessage();
    this.setUserInput();
  }
}

const app = new App();
app.play();

export default App;
