import Mc from './mc.js';
import Opponent from './opponent.js';

class App {
  opponent;
  mc;
  gameOver = false;

  constructor() {
    this.opponent = new Opponent();
    this.mc = new Mc();
  }

  async play() {
    this.mc.startMention();
    this.opponent.makeNumbers();
    await this.askQnA();

    if (this.gameOver) {
      const playerAnswer = await this.mc.askRegame();
      if (playerAnswer === '1') {
        this.gameOver = false;
        this.opponent.resetNumbers();
        this.opponent.makeNumbers();
        await this.askQnA();
      }
    }
  }

  async askQnA() {
    const numbers = await this.mc.askQuestion();
    this.mc.validateNumbers(numbers);
    const { strike, ball } = this.opponent.tellResultOf(numbers);
    this.mc.tellOf(strike, ball);

    if (strike === 3) {
      this.gameOver = true;
    } else {
      await this.askQnA();
    }
  }
}

export default App;
