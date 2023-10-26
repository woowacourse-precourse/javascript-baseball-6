import Baseball from './Baseball.js';

class App {
  async play() {
    const BaseballGame = new Baseball();
    await BaseballGame.start();
  }
}


export default App;
