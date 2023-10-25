import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  static async input(query) {
    return await MissionUtils.Console.readLineAsync(query);
  }

  static output(message) {
    return MissionUtils.Console.print(message);
  }

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

  static #isProperNumber(num) {
    const regex = /^([1-9][^1-9]*[1-9][^1-9]*[1-9])$/g;
    if (!regex.test(num)) return false;

    const repeatCheck = new Set(num.split(""));
    if (repeatCheck.size !== num.length) return false;

    return true;
  }

  static #getResult(target, num) {
    let ball = 0;
    let strike = 0;
    num.split("").forEach((ele, idx) => {
      if (target.split("").includes(ele)) {
        if (ele === target[idx]) strike += 1;
        else ball += 1;
      }
    });
    if (ball === 0 && strike === 0) return "낫싱";
    if (ball) {
      if (strike) return `${ball}볼 ${strike}스트라이크`;
      return `${ball}볼`;
    }
    return `${strike}스트라이크`;
  }

  static proStartGame() {
    const target = App.#pickRandomNumber();
    // App.output(`컴퓨터 숫자는 ${target}`);

    return new Promise((resolve, reject) => {
      const getNumber = () => {
        App.input("숫자를 입력해주세요 : ").then((res) => {
          if (App.#isProperNumber(res)) {
            if (target === res) {
              App.output("3스트라이크");
              App.input(
                `3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
              ).then((restart) => {
                if (restart == 1) resolve(App.proStartGame());
                else resolve(App.output("게임 종료"));
              });
            } else {
              Promise.resolve(App.output(App.#getResult(target, res))).then(
                getNumber
              );
            }
          } else {
            App.output("[ERROR] 올바른 숫자 형식이 아닙니다.");
            reject(new Error("[ERROR] 올바른 숫자 형식이 아닙니다."));
          }
        });
      };
      getNumber();
    });
  }

  async play() {
    App.output(`숫자 야구 게임을 시작합니다.`);

    await App.proStartGame();
  }
}

export default App;
