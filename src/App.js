import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  _status = "idle";
  _answer = [];

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this._createAnswer();
    this._transition("playing");
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
    this._answer = answer;
  }

  async _entryEffect(status) {
    switch (status) {
      case "playing": {
        const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
        const result = this._scoreAnswer(answer);
        const { strike } = result;
        if (strike === 3) {
          await this._transition("clear");
        } else {
          await this._transition("playing");
        }
        break;
      }
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
}

export default App;
