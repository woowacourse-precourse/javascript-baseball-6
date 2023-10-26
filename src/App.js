import BaseballGameController from './Controllers/BaseballGameController.js';
import BaseballGame from './Models/BaseballGame.js';
import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const baseballGame = new BaseballGame();
    const baseballGameController = new BaseballGameController(
      inputView,
      outputView,
      baseballGame
    );
    await baseballGameController.play();
  }
}

export default App;
