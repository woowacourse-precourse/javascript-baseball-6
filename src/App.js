import Baseball from './Baseball.js';
class App {
  async play() {
    const game = new Baseball();
    game.gameStart();
  }
}
export default App;
