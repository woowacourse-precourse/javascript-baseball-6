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
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
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
        Console.print(answer);
        break;
      }
      default:
        break;
    }
  }
}

export default App;
