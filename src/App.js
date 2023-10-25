import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = null;
    this.userNumber = null;
    this.texts = {
      NOTHING: "낫싱",
      BALL: "볼",
      STRIKE: "스트라이크",
      GAME_FINISH: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      GAME_START: "숫자 야구 게임을 시작합니다.",
      GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력해주세요.\n",
      ERROR: "[ERROR] 입력하신 숫자는 잘못된 형식입니다.",
    };
  }

  createRandomNumber() {
    const result = [];
    while (result.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    return (this.answer = result.join(""));
  }
}

const myApp = new App();
myApp.play();

export default App;
