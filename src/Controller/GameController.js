import Game from "../Model/Game.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import ExceptionHandler from "../utils/ExceptionHandler.js";
import constants from "../utils/constants.js";
import Message from "../utils/message.js";

class GameController {
  constructor() {
    this.game;
  }

  startGame() {
    this.createAGame(); // 게임생성
    OutputView.print(Message.Greeting); // 인사말 출력
    this.askNumbers(); // 번호 물어보기
  }

  createAGame() {
    this.game = new Game();
  }

  async askNumbers() {
    try {
      const numArr = await InputView.getNumbers();
      this.handleException(numArr); // 예외처리
      this.game.checkResult(numArr); // 결과 확인하기
      this.printResult(); // 결과 출력하기
      this.isGameFinished(); // 게임 계속하거나 끝내기
    } catch (error) {
      OutputView.printError(error);
      // this.askNumbers(); 예외는 바로 종료
    }
  }

  handleException(numArr) {
    ExceptionHandler.checkIsNum(numArr);
    ExceptionHandler.checkIsNonzero(numArr);
    ExceptionHandler.checkIsThreeDigit(numArr);
    ExceptionHandler.checkIsUnique(numArr);
  }

  printResult() {
    const ballStrikeObj = this.game.getBallStrike();
    const ball = ballStrikeObj[constants.BALL];
    const strike = ballStrikeObj[constants.STRIKE];

    if (!ball && !strike) {
      OutputView.print(Message.NOTHING);
    } else {
      OutputView.print(
        `${ball ? ball + "볼 " : ""}${strike ? strike + "스트라이크" : ""}`
      );
    }
  }

  isGameFinished() {
    if (this.game.getStrike() === constants.NUM_COUNT) {
      OutputView.print(Message.GAME_END);
      this.askRestartOrQuit();
    } else {
      this.askNumbers();
    }
  }

  async askRestartOrQuit() {
    try {
      const answer = await InputView.getRestartOrQuitAnswer();
      ExceptionHandler.checkRestartOrQuitAnswer(answer);

      if (answer === constants.RESTART) {
        this.restartGame();
      } else if (answer === constants.QUIT) {
        this.quitGame();
      }
    } catch (error) {
      OutputView.printError(error);
      // this.askRestartOrQuit();
    }
  }

  quitGame() {
    // Console.close(); // TODO 완전히 종료
  }

  restartGame() {
    this.createAGame();
    this.askNumbers();
  }
}

export default GameController;
