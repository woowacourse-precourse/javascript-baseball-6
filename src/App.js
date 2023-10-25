import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_SETTING, IN_GAME_MESSAGE, AFTER_GAME_USER_COMMAND, IN_GAME_ERROR } from "../utils/Constants.js";
import validateUserAnswer from "../utils/validateUserAnswer.js";
import generateRightAnswer from "../utils/generateAnswer.js";
import getUserScore from "../utils/getUserScore.js";
import convertUserScoreToMessage from "../utils/convertUserScoreToMessage.js";

class App {
  constructor() {
    this.rightAnswer = [];
  }

  async play() {
    await this.createNewGame();
  }

  async createNewGame() {
    // 1-9 사이의 서로 다른 수로 이루어진 3자리 난수를 생성하여 정답으로 설정
    this.rightAnswer = generateRightAnswer();

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
    if (userScore.strike === IN_GAME_SETTING.answerLength) {
      Console.print(IN_GAME_MESSAGE.rightAnswer);
      return this.checkRestartGame();
    }
    return this.startGameTurn();
  }

  async checkRestartGame() {
    // 사용자로부터 '1' 또는 '2'의 1자리 숫자로 이루어진 게임 재시작/종료 선택 입력값 수신
    const userCommandToRestart = await Console.readLineAsync(IN_GAME_MESSAGE.getUserCommandToRestart);

    // 게임 재시작/종료 여부에 대한 입력값의 유효성 검증 후 게임 재시작/종료 또는 에러 처리
    if (userCommandToRestart === AFTER_GAME_USER_COMMAND.restart) {
      return this.createNewGame();
    }
    if (userCommandToRestart === AFTER_GAME_USER_COMMAND.exit) {
      Console.print(IN_GAME_MESSAGE.exitGame);
      return;
    }
    if (
      userCommandToRestart !== AFTER_GAME_USER_COMMAND.restart &&
      userCommandToRestart !== AFTER_GAME_USER_COMMAND.exit
    ) {
      throw new Error(IN_GAME_ERROR.invalidCommand);
    }
  }
}

const app = new App();
app.play();

export default App;
