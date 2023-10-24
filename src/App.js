import { GAME, STRIKE_OUT } from './constants.js';
import Mc from './mc.js';
import Opponent from './opponent.js';

class App {
  opponent;
  mc;

  constructor() {
    this.opponent = new Opponent();
    this.mc = new Mc();
  }

  async play() {
    this.mc.startGame();
    this.opponent.makeNumbers();
    await this.repeatQnA();

    const playerAnswer = await this.mc.askRegame();
    this.mc.validateRegameNumber(playerAnswer);
    playerAnswer === GAME.REPLAY_NUMBER ? this.replay() : this.gameover();
  }

  async repeatQnA() {
    const numbers = await this.mc.askQuestion();
    this.mc.validateNumbers(numbers);
    const { strike, ball } = this.opponent.tellResultOf(numbers);
    this.mc.tellOf(strike, ball);

    if (strike !== STRIKE_OUT) {
      await this.repeatQnA();
    }
  }

  replay() {
    this.opponent.resetNumbers();
    this.opponent.makeNumbers();
    this.repeatQnA();
  }

  gameover() {
    return;
  }
}

export default App;
