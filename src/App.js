import { Console, MissionUtils } from "@woowacourse/mission-utils";

const ANSWER_LENGTH = 3;
const BASEBALL_NUMBER_REGEX = /^[1-9]+$/;
const COMMAND_RESTART = "1";
const COMMAND_QUIT = "2";

class App {
  _status = "idle";
  _answer = null;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this._answer = this._createAnswer();
    await this._transition("playing");
  }

  async _restart() {
    this._answer = this._createAnswer();
    await this._transition("playing");
  }

  async _transition(status) {
    this._status = status;
    await this._transitionEffect(this._status);
  }

  async _transitionEffect(status) {
    switch (status) {
      case "playing": {
        const playerInput = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        this._invariant(playerInput);

        const score = this._createScore(playerInput);

        if (score.strike === ANSWER_LENGTH) {
          await this._transition("clear");
        } else {
          const hint = this._createHint(score);
          Console.print(hint);
          await this._transition("playing");
        }
        break;
      }

      case "clear": {
        Console.print(
          `${ANSWER_LENGTH}스트라이크\n${ANSWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );

        let playerInput = null;
        while (
          playerInput !== COMMAND_RESTART &&
          playerInput !== COMMAND_QUIT
        ) {
          playerInput = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
        }

        if (playerInput === COMMAND_RESTART) {
          await this._restart();
        } else if (playerInput === COMMAND_QUIT) {
          await this._transition("end");
        }
      }

      default:
        break;
    }
  }

  _createAnswer() {
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer.join("");
  }

  _createScore(playerInput) {
    const score = { strike: 0, ball: 0 };
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      const current = playerInput[i];
      if (current === this._answer[i]) {
        score.strike++;
        continue;
      }
      if (this._answer.includes(current)) {
        score.ball++;
      }
    }

    return score;
  }

  _createHint(score) {
    const { strike, ball } = score;

    const hints = [];
    if (ball > 0) hints.push(`${ball}볼`);
    if (strike > 0) hints.push(`${strike}스트라이크`);

    return hints.length === 0 ? "낫싱" : hints.join(" ");
  }

  _invariant(playerInput) {
    if (playerInput.length === 0)
      throw new Error("[ERROR] 숫자를 입력해야합니다.");
    if (playerInput.includes(" "))
      throw new Error("[ERROR] 입력값에 공백이 포함되어 있습니다.");
    if (
      !BASEBALL_NUMBER_REGEX.test(playerInput) ||
      new Set(playerInput).size !== ANSWER_LENGTH
    )
      throw new Error(
        `[ERROR] 1부터 9까지 서로 다른 수로 이루어진 ${ANSWER_LENGTH}자리의 수를 입력해야합니다.`
      );
  }
}

export default App;
