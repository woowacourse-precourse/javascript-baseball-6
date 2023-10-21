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
    this.getNumbers(); // 번호 물어보기
  }

  createAGame() {
    this.game = new Game();
  }

  async getNumbers() {
    try {
      const numArr = await InputView.askNumbers();
      this.handleException(numArr); // 예외처리
      this.game.checkResult(numArr); // 결과 확인하기
      this.printResult(); // 결과 출력하기
    } catch (error) {
      OutputView.printError(error);
      this.getNumbers();
    }
  }

  handleException(numArr) {
    ExceptionHandler.checkIsNum(numArr);
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
}

export default GameController;
