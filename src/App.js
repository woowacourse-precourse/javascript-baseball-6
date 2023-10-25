import Baseball from './components/Baseball.js';

class App {
  async play() {
    const baseball = new Baseball();
    await baseball.startGame();
  }
}

export default App;
