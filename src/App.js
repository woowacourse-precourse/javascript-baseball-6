import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  _status = "idle";
  _answer = [];

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this._createAnswer();
    this._transition("playing");
  }

  _transition(status) {
    this._status = status;
  }

  _createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    this._answer = answer;
  }
}

export default App;
