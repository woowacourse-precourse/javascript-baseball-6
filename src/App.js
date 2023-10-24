import PlayGame from "./PlayGame.js"
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.playgame = new PlayGame();
    this.play();
    this.handleUserInput();
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.playgame.setRandomNumber();
  }
  handleUserInput() {
    const randomNumber = this.playgame.getRandomNumber();
    this.playgame.handleInput().then((result) => {
      this.playgame.compareNumbers(randomNumber, result).then((strike) => {
        if (strike !== 3) {
          this.handleUserInput()
        } else {
          this.askRetry()
        }
      })
    })
  }
  askRetry() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

const app = new App();
// app.play();

export default App;