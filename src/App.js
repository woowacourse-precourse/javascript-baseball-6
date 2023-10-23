import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumber = null;
    this.initMessage = false;
  }

  async play() {
    if (!this.initMessage) {
      Console.print("숫자 야구 게임을 시작합니다.");
      this.initMessage = true;
    }
    this.computerNumber = this.generateRandomNumber();
    await this.getUserInput();
  }

  generateRandomNumber() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  async getUserInput() {
    const inputLine = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const isVerifiedNumber = this.validateInputLineNumber(inputLine);
    await this.compareCorrectAnswer(this.computerNumber, isVerifiedNumber);
  }

  validateInputLineNumber(userNumber) {
    const modifyArray = userNumber.split("").map(Number);
    if (
      modifyArray.length !== 3 ||
      modifyArray.includes(0) ||
      new Set(modifyArray).size !== modifyArray.length ||
      modifyArray.some(isNaN)
    ) {
      throw new Error("[ERROR]");
    } else {
      return modifyArray;
    }
  }

  async compareCorrectAnswer(com, user) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < com.length; i++) {
      if (com[i] === user[i]) strikes++;
      else if (user.includes(com[i])) balls++;
    }

    if (strikes === 3 && balls === 0) {
      Console.print("3스트라이크");
      return await this.confirmContinueOrQuit();
    } if (strikes > 0 && balls > 0) {
      const resultMessage = `${balls}볼 ${strikes}스트라이크`;
      Console.print(resultMessage);
    } else if (balls > 0) {
      const resultMessage = `${balls}볼`;
      Console.print(resultMessage);
    } else if (strikes > 0) {
      const resultMessage = `${strikes}스트라이크`;
      Console.print(resultMessage);
    } else {
      Console.print("낫싱");
    }

    return await this.getUserInput();
  }

  async confirmContinueOrQuit() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    const isReplay = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    switch (isReplay) {
      case "1": {
        this.play();
        break;
      }
      case "2": {
        Console.print("게임 종료");
        break;
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default App;
