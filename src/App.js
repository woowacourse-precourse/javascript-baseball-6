import { Console, Random } from "@woowacourse/mission-utils";
import { IN_GAME_SETTING, IN_GAME_MESSAGE } from "../utils/Constants";
import validateUserAnswer from "../utils/validateUserAnswer";
import getUserScore from "../utils/getUserScore";

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

  async startGameTurn() {
    // 사용자로부터 3자리 숫자로 이루어진 입력값 수신
    const userAnswer = await Console.readLineAsync(IN_GAME_MESSAGE.getUserAnswer);

    // 입력값의 유효성 검증
    validateUserAnswer(userAnswer);

    // 검증 통과된 입력값을 정답으로 설정된 난수와 비교하여 카운트 결과 계산
    const userScore = getUserScore(userAnswer, this.rightAnswer);

    // 계산된 카운트 결과 출력
    Console.print(convertUserScoreToMessage(userScore));

    // 결과에 따른 다음 프로세스 분기 처리 후 턴 종료
    if (userScore.strike === 3 && userScore.ball === 0) {
      Console.print(IN_GAME_MESSAGE.rightAnswer);
      return self.checkRestartGame();
    }
    return self.startGameTurn();
  }

  // TODO: 게임 종료 후 사용자에게 재시작 여부를 확인
  async checkRestartGame() {}
}

const app = new App();
app.play();

export default App;
