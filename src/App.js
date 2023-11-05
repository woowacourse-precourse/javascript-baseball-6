import LottoController from './controllers/LottoController';

class App {
  async play() {
    const lottoController = new LottoController();
    lottoController.runMachine();
  }
}

export default App;
