import Baseball from './Baseball.js';
class App {
  async play() {
    const game = new Baseball();
    game.makeGameResult();
  }
}
const app = new App();
app.play();
export default App;
