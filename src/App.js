import LottoController from './controllers/LottoController.js';

class App {
  async play() {
    const lottoController = new LottoController();

    await lottoController.playGame();
  }
}

export default App;
