import { Console, Random } from "@woowacourse/mission-utils";

const MESSAGE = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  continue: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  input: "숫자를 입력해주세요 : ",
  nothing: "낫싱",
  strike: (count) => `${count}스트라이크`,
  ball: (count) => `${count}볼`,
  error: (message) => `[ERROR] ${message}`,
};

class App {
  #randomNumber;

  async play() {
    Console.print(MESSAGE.start);

    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (this.#isValidInput(input)) {
      throw new Error(MESSAGE.error("입력값이 유효하지 않습니다."));
    }
  }

  getRandomNumber() {
    this.#makeRandomNumber();
    return this.#randomNumber;
  }
  #makeRandomNumber() {
    let result = "";

    while (true) {
      if (result.length >= 3) break;

      const random = Random.pickNumberInRange(1, 9);
      if (!result.includes(random)) result += random;
    }

    this.#randomNumber = result;
  }

  #isValidInput(input) {
    const regEx = new RegExp("^(?!.*(\\d).*\\1)[1-9]{3}$");

    return !regEx.test(input.trim());
  }
}

const app = new App();
app.play();

export default App;
