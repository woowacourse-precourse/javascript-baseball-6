import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  static #pickRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  async play() {
    const console = MissionUtils.Console.readLineAsync;

    const isStart = await console(
      `숫자 야구 게임입니다.\n게임을 시작하려면 1, 종료하려면 2를 입력하세요.`
    );

    if (isStart == 1) {
      const target = App.#pickRandomNumber();
      await console(`숫자 야구 게임을 시작합니다.`);
    } else {
      throw new Error("야구 게임 종료");
    }
  }
}

const app = new App();
app.play();

export default App;
