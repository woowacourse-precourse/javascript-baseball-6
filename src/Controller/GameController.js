import Game from "../Model/Game.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Message from "../utils/message.js";

class GameController {
  constructor() {
    this.game;
  }

  startGame() {
    this.createAGame(); // 게임생성
    OutputView.print(Message.Greeting); // 인사말 출력
    this.askNumbers(); // 번호물어보기
  }

  createAGame() {
    this.game = new Game();
  }

  askNumbers() {
    InputView.askNumbers();
  }
}

export default GameController;
