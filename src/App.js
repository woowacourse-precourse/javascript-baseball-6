import LottoController from './controllers/LottoController.js';

class App {
  async play() {
    const lottoController = new LottoController();
    lottoController.runLottoProgram();
  }
}

export default App;
