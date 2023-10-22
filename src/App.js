import baseball from "./Controller/BaseBall.js";

class App {
  async play() {
    try {
      await baseball.init();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
