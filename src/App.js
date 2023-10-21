import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = this.computerNumber();

    while (true) {
      const user = await this.userNumber();
      this.validateInput(user);
    }
  }

  computerNumber() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers.join('');
  }

  async userNumber() {
    return Console.readLineAsync('숫자를 입력해주세요 : ' );
  }

  validateInput(value) {
    const regex = /^(?!.*(.).*\1)\d{3}$/;

    if (!regex.test(value)) {
      throw new Error('[ERROR] 잘못된 입력값 입니다.');
    }
  }
}

export default App;
