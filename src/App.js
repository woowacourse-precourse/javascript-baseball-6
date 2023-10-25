import { Console, Random } from "@woowacourse/mission-utils";
import { IN_GAME_SETTING, IN_GAME_MESSAGE } from "../utils/Constants";

class App {
  constructor() {
    this.rightAnswer = [];
  }

  async play() {
    await this.createNewGame();
  }

  async createNewGame() {
    // 1-9 사이의 서로 다른 수로 이루어진 3자리 난수를 생성하여 정답으로 설정
    this.rightAnswer = Random.pickUniqueNumbersInRange(
      IN_GAME_SETTING.answerMinNumber,
      IN_GAME_SETTING.answerMaxNumber,
      IN_GAME_SETTING.answerLength
    );

    // 게임 시작 메시지 출력
    Console.print(IN_GAME_MESSAGE.startGame);

    // 게임 진행을 위한 턴 호출
    await this.startGameTurn();
  }

  // TODO: 게임의 각 턴으로써, 사용자 입력값을 받아 검증 후 카운트 결과 계산
  async startGameTurn() {}

  // TODO: 게임 종료 후 사용자에게 재시작 여부를 확인
  async checkRestartGame() {}
}

const app = new App();
app.play();

export default App;
