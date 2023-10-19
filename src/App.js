import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.target;
    this.targetLength = 3;
    this.firstGame = true;
    this.guess;
  }

  async play() {
    this.initGame();
    Console.print(this.target);
  }

  initGame() {
    // 컴퓨터 내 랜덤 숫자 생성
    this.target = [];
    while (this.target.length < this.targetLength) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.target.includes(number)) this.target.push(number);
    }

    // 첫 게임일 경우 시작 멘트 발생
    if (this.firstGame) {
      Console.print("숫자 야구 게임을 시작합니다.");
      this.firstGame = false;
    }
    return;
  }
}

const game = new App();
game.play();

// export default App;
