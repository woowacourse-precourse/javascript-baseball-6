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
      const userInputNumber = this.userInputNumberValidation(inputNumber).split("").map(Number);
      Console.print(userInputNumber);
    });
  }

  lengthValidation(inputNumber) {
    return inputNumber.length !== 3;
  }

  rangeValidation(inputNumber) {
    return isNaN(inputNumber) || inputNumber.toString().includes("0");
  }

  duplicateValidation(inputNumber) {
    for (let i = 1; i < inputNumber.length; i++) {
      if (inputNumber[i - 1] === inputNumber[i]) return true;
    }
    return false;
  }

  userInputNumberValidation(inputNumber) {
    if (
      this.lengthValidation(inputNumber) ||
      this.rangeValidation(inputNumber) ||
      this.duplicateValidation(inputNumber)
    )
      throw new Error("잘못된 값 입력됨");
    return inputNumber;
  }

  async play() {
    this.showStartMessage();
    this.setUserInput();
  }
}

const app = new App();
app.play();

export default App;
