import { write } from './IO';
import Background from './Background';
import Controls from './Controls';

const TEXT = {
  WELCOME: '숫자 야구 게임을 시작합니다.',
  GAMEOVER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

class App {
  constructor() {
    this.background = new Background();
  }

  async play() {
    // write welcome message
    write(TEXT.WELCOME);

    // serve as many games as user wants
    while (this.background.getGameState() !== 2) {
      await this.game();
    }
  }

  async game() {
    // initialize game
    this.background.init();

    // loop until the game ends
    while (this.background.getGameState() === 1) {
      const userGuess = await Controls.getUserGuess();
      const result = this.background.baseballQuery(userGuess);

      Controls.printResult(result);
      this.background.updateGameState(result);
    }

    // handle gameover state
    write(TEXT.GAMEOVER);

    const userContinue = Number(await Controls.getUserContinue());
    this.background.setGameState(userContinue);
  }
}

export default App;
