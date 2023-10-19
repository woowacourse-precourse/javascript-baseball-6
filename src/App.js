import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.printStartMessage();
    this.playOneLoop();
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  playOneLoop() {
    this.askThreeNumber();
  }

  async askThreeNumber() {
    function isOnlyNumbersExceptZero(number) {
      for (const eachNumber of number) {
        if (!"123456789".includes(eachNumber)) return false;
      }

      return true;
    }

    function isNumberIsValid(number) {
      const isThree = number.length === 3;
      return isThree && isOnlyNumbersExceptZero(number);
    }

    const numberString = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!isNumberIsValid(numberString)) {
      throw Error("[ERROR]");
    }

    Console.print(`${numberString} 은 유효합니다!`);
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
