import { Console, Random } from "@woowacourse/mission-utils";

const MESSAGE = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  continue: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  input: "숫자를 입력해주세요 : ",
  nothing: "낫싱",
  error: "[ERROR] 입력값이 유효하지 않습니다.",
  strike: (count) => `${count}스트라이크`,
  ball: (count) => `${count}볼`,
};

class App {
  async play() {
    Console.print(MESSAGE.start);
    let isKeepPlaying = true;

    while (isKeepPlaying) {
      const targetNumber = this.generateRandomNumber();
      await this.game(targetNumber);
      isKeepPlaying = await this.askForGameRestart();
    }
  }

  async game(targetNumber) {
    while (true) {
      const input = await Console.readLineAsync(MESSAGE.input);
      const isValidInput = this.validateInput(input);
      if (!isValidInput) {
        throw new Error(MESSAGE.error);
      }

      const { strike, ball } = this.countPitchResult(input, targetNumber);
      const output = this.getOutputPitchResult(strike, ball);
      Console.print(output);

      if (strike === 3) {
        Console.print(MESSAGE.end);
        break;
      }
    }
  }

  generateRandomNumber() {
    let result = "";

    while (true) {
      if (result.length >= 3) break;
      const random = Random.pickNumberInRange(1, 9);
      if (!result.includes(random)) result += random;
    }

    return result;
  }

  countPitchResult(input, targetNumber) {
    if (input === targetNumber) return { strike: 3, ball: 0 };

    let strike = 0;
    let ball = 0;

    const inputArray = input.split("");
    inputArray.forEach((inputNumber, index) => {
      if (inputNumber === targetNumber.at(index)) {
        strike++;
      } else if (targetNumber.includes(inputNumber)) {
        ball++;
      }
    });

    return {
      strike,
      ball,
    };
  }

  getOutputPitchResult(strike, ball) {
    let result = [];

    if (ball > 0) result.push(MESSAGE.ball(ball));
    if (strike > 0) result.push(MESSAGE.strike(strike));
    if (result.length === 0) result.push(MESSAGE.nothing);

    return result.join(" ");
  }

  async askForGameRestart() {
    const input = (await Console.readLineAsync(MESSAGE.continue)).trim();
    if (input === "1") return true;
    if (input === "2") return false;

    throw new Error(MESSAGE.error);
  }

  validateInput(input) {
    const regEx = new RegExp("^(?!.*(\\d).*\\1)[1-9]{3}$");

    return regEx.test(input);
  }
}

export default App;
