import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    let playerNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해 주세요 : "
    );

    const computer = [];
    let player = playerNum.split("");

    if (player.length !== 3 /*typeof player !== "number"*/) {
      throw new Error("[ERROR]");
    }

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    let strike = 0;
    let ball = 0;

    while (strike < 3) {
      for (let i = 0; i < player.length; i++) {
        if (Number(player[i]) === computer[i]) {
          strike++;
          continue;
        }
        if (computer.includes(Number(player[i]))) {
          ball++;
        }
      }

      console.log(strike, ball);

      if (strike === 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        return this.continue();
      }

      if (strike === 0 && ball === 0) {
        MissionUtils.Console.print(`낫싱`);
      } else if (strike === 0) {
        MissionUtils.Console.print(`${ball}볼`);
      } else if (ball === 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      } else {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }

      playerNum = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해 주세요 : "
      );
      player = playerNum.split("");

      strike = 0;
      ball = 0;
    }
  }
  async continue() {
    let isContinue = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
    );

    if (Number(isContinue) === 1) {
      this.play();
    }
  }
}

const app = new App();
app.play();

export default App;
