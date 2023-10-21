import { MissionUtils } from "@woowacourse/mission-utils";
import { GAMESTATUS } from "./constant/gameStatus.js";
import { MESSAGES } from "./constant/message.js";

class App {
  // 멤버 변수
  computerAnswer;
  playStatus;

  // 생성자
  constructor() {
    // Fixed. generateAnswer 메서드를 작성하면 초기화 코드 수정 예정
    this.computerAnswer = "123";
    this.playStatus = GAMESTATUS.playing;
  }

  async play() {
    this.printConsole(`문구 테스트 - ${MESSAGES.GAME_START}`);
  }

  async checkUserInput() {}

  async calculateStrikeAndBall() {}

  async compareAnswer() {}

  printConsole(message) {
    return MissionUtils.Console.print(message);
  }
}

// -- App Class Test --
new App().play();

export default App;
