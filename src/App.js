import { Output, ValidTest, Player, Game } from './js';

class App {
  validTest = new ValidTest();

  output = new Output();

  player = new Player();

  game = new Game();

  async play() {
    this.game.start();
    while (this.game.playing) {
      if (!this.game.win) this.output.printInputMessage();
      try {
        // eslint-disable-next-line
        await this.player.getNumbers();
        this.validTest.test(this.player.numbers, this.game.win);
        this.output.printMessage(this.player.numbers.join(''));
        this.game.referee(this.player.numbers);
      } catch (error) {
        throw new Error(`[Error]:${error}`);
      }
    }
  }
}
export default App;
