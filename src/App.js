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
    console.log(computerBall);
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
      if (strike === ball) {
        MissionUtils.Console.print(
          `${strike}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        // return this.gameRepeat();
      } else {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    } else if (ball) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (strike) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print("낫싱");
    }
  }

  async inPlay() {
    const computerBall = this.computerNum();
    const user = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const result = this.strikeBall(computerBall, user);
  }

  // async gameRepeat() {
  //   const response = await MissionUtils.Console.readLineAsync(
  //     "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  //   );
  //   if (response === 1) {
  //     this.play();
  //   }
  // }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.inPlay();
  }
}

export default App;
