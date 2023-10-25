import gameStart from './controller/game-controller';

class App {
  async play() {
    await gameStart();
  }
}
export default App;
