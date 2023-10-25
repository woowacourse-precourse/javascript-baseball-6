import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  RESTART = "restart";
  IN_GAME = "in_game";

  constructor() {
    this.random = MissionUtils.Random;
    this.console = MissionUtils.Console;

    this.ball = 0;
    this.strike = 0;
    this.isPlay = true;
  }

  async play() {
    this.console.print("숫자 야구 게임을 시작합니다.");

    while (this.isPlay) {
      const answer = this.makeRandomNum();

      while (this.strike < 3) {
        this.ball = 0;
        this.strike = 0;

        const userInput = await this.giveQuestion("숫자를 입력해 주세요 : ");

        this.validation(userInput, this.IN_GAME);

        this.compareInputAnswer(answer, userInput);

        this.giveHint();
      }

      const restartInput = await this.giveQuestion(
        `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.${"\n"}`
      );

      this.validation(restartInput, this.RESTART);

      this.restart(restartInput);
    }
  }

  makeRandomNum() {
    const nums = [];

    while (nums.length < 3) {
      const num = this.random.pickNumberInRange(1, 9);

      if (!nums.includes(num)) {
        nums.push(num);
      }
    }

    return nums.join("");
  }

  giveQuestion(question) {
    return this.console.readLineAsync(question);
  }

  compareInputAnswer(answer, input) {
    for (let i = 0; i < 3; i++) {
      const curAnswer = answer[i];
      const curInput = input[i];

      if (curAnswer === curInput) {
        this.strike++;
      } else if (answer.includes(curInput)) {
        this.ball++;
      }
    }
  }

  giveHint() {
    if (this.ball > 0 && this.strike > 0) {
      this.console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    } else if (this.ball > 0 && this.strike === 0) {
      this.console.print(`${this.ball}볼`);
    } else if (this.ball === 0 && this.strike > 0 && this.strike < 3) {
      this.console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 3) {
      this.console.print(
        `3스트라이크${"\n"}3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    } else if (this.strike === 0 && this.ball === 0) {
      this.console.print("낫싱");
    }
  }

  validation(input, mode) {
    if (mode === this.IN_GAME) {
      const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

      if (!Number(input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else if (input.replace(reg, "").length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else if (input.includes(" ")) {
        throw new Error("[ERROR] 공백은 포함할 수 없습니다.");
      } else if (input.includes("0")) {
        throw new Error("[ERROR] 1~9 사이의 숫자만 입력이 가능합니다.");
      } else if (new Set(input).size !== 3) {
        throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
      }
    }

    if (mode === this.RESTART) {
      if (input !== "1" && input !== "2") {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }

  restart(input) {
    if (input === "2") {
      this.isPlay = false;
    } else if (input === "1") {
      this.strike = 0;
      this.ball = 0;
    }
  }
}

export default App;

const app = new App();
app.play();
