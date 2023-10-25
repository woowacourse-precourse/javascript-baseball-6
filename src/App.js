import { MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNum, getRestartNum } from "./components/NumberSet";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await getRandomNum();
  }

  async checkResult(computerNum, userNum) {
    let strike = this.countStrike(computerNum, userNum);
    let ball = this.countBall(computerNum, userNum);
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      await this.getUserNum(computerNum);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
      await this.getUserNum(computerNum);
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.exitGame();
      } else {
        await this.getUserNum(computerNum);
      }
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      await this.getUserNum(computerNum);
    }
  }

  countStrike(computerNum, userNum) {
    let strike = 0;
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] === userNum[i]) {
        strike++;
      }
    }
    return strike;
  }

  countBall(computerNum, userNum) {
    let ball = 0;
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] !== userNum[i] && computerNum.includes(userNum[i])) {
        ball++;
      }
    }
    return ball;
  }

  async exitGame() {
    const restart = getRestartNum();
    if (restart === "1") {
      getRandomNum();
    } else if (restart === "2") {
      MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error("[ERROR] 1 또는 2를 입력해야합니다.");
    }
  }
}

export default App;
