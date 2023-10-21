import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    let replay = true;
    const baseBallGame = new BaseBallGame();
    while (replay) {
      baseBallGame.reset();
      // await baseBallGame.begin();
    }
  }
}

class BaseBallGame {
  constructor() {
    this.answer = "";
    this.reset();
  }

  /**
   * 게임을 초기화한다.
   * 랜덤한 세 자리 숫자를 새로 생성한다.
   */
  reset() {
    this.answer = "";
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

}

export default App;