import baseball from "./Controller/BaseBall.js";

class App {
  async play() {
    try {
      baseball.init();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
