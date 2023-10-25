import BaseballGame from './BaseballGame';

class App {
  async play() {
    await new BaseballGame().play();
  }
}

export default App;
