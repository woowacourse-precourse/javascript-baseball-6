import Game from "../Model/Game.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import ExceptionHandler from "../utils/ExceptionHandler.js";
import constants from "../utils/constants.js";
import Message from "../utils/Message.js";

class GameController {
  constructor() {
    this.game;
  }

  async startGame() {
    this.createAGame(); // 게임생성
    OutputView.print(Message.GREETING); // 인사말 출력
    try {
      await this.askNumbers(); // 번호 물어보기
    } catch (err) {
      throw new Error(`[ERROR] ${err}`);
    }
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
      await this.isGameFinished(); // 게임 계속하거나 끝내기
    } catch (error) {
      throw error; // 예외 입력 시 종료
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

  async isGameFinished() {
    // 3스트라이크이면 게임종료
    if (this.game.getStrike() === constants.NUM_COUNT) {
      OutputView.print(Message.GAME_END);
      await this.askRestartOrQuit(); // 게임을 계속할지 끝낼지 물어보기
    } else {
      await this.askNumbers(); // 다른숫자 물어보기
    }
  }

  async askRestartOrQuit() {
    try {
      const answer = await InputView.getRestartOrQuitAnswer(); // 끝낼지 더 할지 사용자 입력 받기
      ExceptionHandler.checkRestartOrQuitAnswer(answer); // 입력에 대한 예외처리

      // 리플레이
      if (answer === constants.RESTART) {
        await this.restartGame();
      }
      // 종료
      else if (answer === constants.QUIT) {
        this.quitGame();
      }
    } catch (error) {
      throw error; // 예외 입력 시 종료
    }
  }

  quitGame() {}

  async restartGame() {
    this.createAGame();
    await this.askNumbers();
  }
}

export default GameController;
