import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNum() {
    const computerNum = [];
    do {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    } while (computerNum.length !== 3);
    const computerBall = computerNum.join("");

    return computerBall;
  }

  async strikeBall(computerBall, user) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computerBall[i] === user[i]) {
        strike += 1;
      }
      if (computerBall.includes(user[i])) {
        ball += 1;
      }
    }
    if (strike && ball) {
      if (strike === ball && strike === 3) {
        MissionUtils.Console.print(
          `${strike}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
      } else {
        if (ball > 0) {
          if (ball - strike !== 0) {
            MissionUtils.Console.print(
              `${ball - strike}볼 ${strike}스트라이크`
            );
          } else {
            MissionUtils.Console.print(`${strike}스트라이크`);
          }
        } else {
          MissionUtils.Console.print(`${strike}스트라이크`);
        }
      }
    } else if (ball) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (strike) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print("낫싱");
    }
  }

  async start() {
    const computerBall = this.computerNum();
    const user = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    await this.inGame(computerBall, user);
  }

  errorCase(user) {
    const userLength = Array.from(user);
    if (/[^1-9]/.test(user)) {
      throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
    }
    if (user[0] === user[1] || user[1] === user[2] || user[0] === user[2]) {
      throw new Error("[ERROR] 중복값을 입력하셨습니다.");
    }
    if (userLength.length !== 3) {
      throw new Error("[ERROR] 세 자리가 아닌 숫자를 입력하셨습니다.");
    }
  }

  async inGame(computerBall, user) {
    this.errorCase(user);
    const gameResult = this.strikeBall(computerBall, user);
    if (computerBall === user) {
      const response = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (response === "1") {
        this.start();
      } else if (response === "2") {
        return;
      } else {
        throw new Error("[ERROR] 1 또는 2가 아닌 숫자를 입력하셨습니다.");
      }
    } else {
      const nextUser = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      await this.inGame(computerBall, nextUser);
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.start();
  }
}

export default App;
