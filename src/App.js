import { MissionUtils } from "@woowacourse/mission-utils";
import { GAMESTATUS } from "./constant/gameStatus.js";
import { MESSAGES } from "./constant/message.js";

class App {
  // 멤버 변수
  computerAnswer;
  playStatus;

  // 생성자
  constructor() {
    this.computerAnswer = this.generateAnswer();
    this.playStatus = GAMESTATUS.playing;
  }

  async play() {
    this.printConsole(MESSAGES.GAME_START);
    this.printConsole(this.computerAnswer);
    // while (this.playStatus !== GAMESTATUS.done) {
    //   // gamestatus === playing 일때만 게임 진행
    // }
    this.printConsole(MESSAGES.GAME_END);
  }

  async checkUserInput() {}

  async calculateStrikeAndBall() {}

  async compareAnswer() {}

  generateAnswer() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    return numbers.join("");
  }

  printConsole(message) {
    return MissionUtils.Console.print(message);
  }
}

// -- App Class Test --
new App().play();

export default App;
