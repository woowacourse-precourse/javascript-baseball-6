import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  _status = "idle";
  _answer = null;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this._answer = this._createAnswer();
    await this._transition("playing");
  }

  async restart() {
    this._answer = this._createAnswer();
    await this._transition("playing");
  }

  quit() {
    return;
  }

  async _transition(status) {
    this._status = status;
    await this._entryEffect(this._status);
  }

  _createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer.join("");
  }

  async _entryEffect(status) {
    switch (status) {
      case "playing": {
        const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
        this._invalid(answer);

        const result = this._scoreAnswer(answer);
        const { strike } = result;
        if (strike === 3) {
          await this._transition("clear");
        } else {
          const hint = this._createHint(result);
          Console.print(hint);
          await this._transition("playing");
        }
        break;
      }
      case "clear": {
        Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const input = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (input === "1") {
          await this.restart();
        } else if (input === "2") {
          await this._transition("end");
        } else {
          await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
        }
      }

      case "end":
        this.quit();
        break;
      default:
        break;
    }
  }

  _scoreAnswer(answer) {
    const result = { strike: 0, ball: 0 };
    for (let i = 0; i < 3; i++) {
      const current = answer[i];
      if (current === this._answer[i]) {
        result.strike++;
        continue;
      }
      if (this._answer.includes(current)) {
        result.ball++;
      }
    }

    return result;
  }

  _invalid(answer) {
    const numberRegex = /^[1-9]+$/;

    if (answer.length === 0) throw new Error("[ERROR] 숫자를 입력해야합니다.");
    if (answer.includes(" "))
      throw new Error("[ERROR] 입력값에 공백이 포함되어 있습니다.");
    if (!numberRegex.test(answer) || new Set(answer).size !== 3)
      throw new Error(
        "[ERROR] 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해야합니다."
      );
  }

  _createHint(result) {
    const { strike, ball } = result;

    const hints = [];
    if (ball > 0) hints.push(`${ball}볼`);
    if (strike > 0) hints.push(`${strike}스트라이크`);

    return hints.length === 0 ? "낫싱" : hints.join(" ");
  }
}

export default App;
