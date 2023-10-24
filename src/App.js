import { Console, Random } from "@woowacourse/mission-utils";

const MESSAGE = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  continue: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  input: "숫자를 입력해주세요 : ",
  nothing: "낫싱",
  error: "[EEROR] 입력값이 유효하지 않습니다.",
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
      const output = this.outputPitchResult(strike, ball);
      Console.print(output);

      if (strike === 3) {
        Console.print(MESSAGE.end);
        break;
      }
    }
  }

  async askForGameRestart() {
    while (true) {
      const input = await Console.readLineAsync(MESSAGE.continue);
      if (input === "1") return true;
      if (input === "2") return false;
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
    let strike = 0;
    let ball = 0;

    if (input === targetNumber) {
      strike = 3;
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === targetNumber[i]) {
          strike++;
        } else if (targetNumber.includes(input[i])) {
          ball++;
        }
      }
    }

    return {
      strike,
      ball,
    };
  }

  outputPitchResult(strike, ball) {
    let result = [];

    if (ball > 0) result.push(MESSAGE.ball(ball));
    if (strike > 0) result.push(MESSAGE.strike(strike));
    if (result.length === 0) result.push(MESSAGE.nothing);

    return result.join(" ");
  }
  validateInput(input) {
    const regEx = new RegExp("^(?!.*(\\d).*\\1)[1-9]{3}$");

    return regEx.test(input);
  }
}

export default App;
