import GameManage from './mvc/controller/game_manage.js';

class App {
  async play() {
    const baseballGame = new GameManage();
    await baseballGame.printGameStart();
  }
}

export default App;