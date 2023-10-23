import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  init() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  setAnswer() {
    let ans = [];
    while (ans.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!ans.includes(num)) {
        ans.push(num);
      }
    }

    Console.print(ans);
  }

  async play() {
    this.init();
    this.setAnswer();
  }
}

const game = new App();
game.play();

export default App;
