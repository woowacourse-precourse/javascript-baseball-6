import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async input(query) {
    return await MissionUtils.Console.readLineAsync(query);
  }

  output(message) {
    return MissionUtils.Console.print(message);
  }

  pickRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  isProperNumber(number) {
    const regex = /^([1-9][^1-9]*[1-9][^1-9]*[1-9])$/g;
    if (!regex.test(number)) return false;

    const repeatCheck = new Set(number.split(""));
    if (repeatCheck.size !== number.length) return false;

    return true;
  }

  getResult(target, num) {
    let strike = 0;
    let ball = 0;

    for (let index = 0; index < num.length; index++) {
      const ele = num[index];
      if (target.includes(ele)) {
        if (ele === target[index]) strike += 1;
        else ball += 1;
      }
    }

    if (ball === 0 && strike === 0) return "낫싱";
    if (ball) {
      if (strike) return `${ball}볼 ${strike}스트라이크`;
      return `${ball}볼`;
    }
    return `${strike}스트라이크`;
  }

  async StartGame() {
    const target = this.pickRandomNumber();

    return new Promise(async (resolve, reject) => {
      const getNumber = async () => {
        try {
          const res = await this.input("숫자를 입력해주세요 : ");
          if (this.isProperNumber(res)) {
            if (target === res) {
              this.output("3스트라이크");

              const restart = await this.input(
                `3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
              );
              if (restart == 1) resolve(await this.proStartGame());
              else resolve(this.output("게임 종료"));
            } else {
              this.output(this.getResult(target, res));
              getNumber();
            }
          } else {
            this.output("[ERROR] 올바른 숫자 형식이 아닙니다.");
            reject(new Error("[ERROR] 올바른 숫자 형식이 아닙니다."));
          }
        } catch (error) {
          reject(error);
        }
      };
      getNumber();
    });
  }

  async play() {
    this.output(`숫자 야구 게임을 시작합니다.`);

    await this.proStartGame();
  }
}

export default App;
