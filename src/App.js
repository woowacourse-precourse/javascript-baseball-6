import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.printStartMessage();
    this.playOneLoop();
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playOneLoop() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (this.isNumberIsValid(number)) {
      throw Error("[Error]");
    }
  }

  isNumberIsValid(number) {
    function isOnlyNumbersExceptZero(number) {
      for (const eachNumber of number) {
        if (!"123456789".includes(eachNumber)) return false;
      }

      return true;
    }

    const isThree = number.length === 3;
    return isThree && isOnlyNumbersExceptZero(number);
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
