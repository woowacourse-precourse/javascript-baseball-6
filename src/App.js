const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  async play() {
    // MissionUtils.Console.print("숫자야구 게임을 시작합니다.");
    const game = new BaseballGame();
    game.start();
  }
}

const app = new App();
app.play();

export default App;
