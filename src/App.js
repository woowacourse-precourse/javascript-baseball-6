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

  static isProperNumber(num) {
    const regex = /^([1-9][^1-9]*[1-9][^1-9]*[1-9])$/g;
    if (!regex.test(num)) return false;

    const repeatCheck = new Set(num.split(""));
    if (repeatCheck.size !== num.length) return false;

    return true;
  }

  async play() {
    const _log = MissionUtils.Console.readLineAsync;

    const isStart = await _log(
      `숫자 야구 게임입니다.\n게임을 시작하려면 1, 종료하려면 2를 입력하세요.`
    );

    if (isStart == 1) {
      const target = App.#pickRandomNumber();
      await _log(`숫자 야구 게임을 시작합니다.`);
      await _log(`컴퓨터 숫자는 ${target}`);

      while (true) {
        const userNumber = await _log("숫자를 입력해주세요 : ");
        if (App.isProperNumber(userNumber)) {
          if (userNumber === target) {
            const restart = await _log(
              `3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
            );
            if (restart == 1) {
              this.play();
            }
            throw new Error("[ERROR] 야구 게임 종료");
          } else {
          }
        } else {
          throw new Error("[ERROR] 올바른 숫자 형식이 아닙니다.");
        }
      }
    } else {
      throw new Error("[ERROR] 야구 게임 종료");
    }
  }
}

const app = new App();
app.play();

export default App;
