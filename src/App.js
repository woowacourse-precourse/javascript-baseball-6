import Controller from "./controllers/Controller.js";

/**
 * 숫자 야구 게임 애플리케이션
 */
class App {
  /**
   * 애플리케이션을 시작한다
   */
  async play() {
    const controller = new Controller();
    const isRestart = await controller.run();
    if (isRestart) {
      await this.play();
    }
  }
}

export default App;
