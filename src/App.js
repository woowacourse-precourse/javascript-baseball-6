import NumberBaseball from "./NumberBaseball.js";
import NumberBaseballConsole from "./NumberBaseballConsole.js";
import NumberBaseballUmpire from "./NumberBaseballUmpire.js";
import NumberBaseballUmpireIndicator from "./NumberBaseballUmpireIndicator.js";
import RandomNumbersGenerator from "./RandomNumbersGenerator.js";

class App {
  async play() {
    const numberBaseball = new NumberBaseball(
      new NumberBaseballConsole(1, 9, 3, 1, 2),
      new NumberBaseballUmpire(new NumberBaseballUmpireIndicator(3)),
      new RandomNumbersGenerator(1, 9, 3)
    );
    await numberBaseball.start();
  }
}

// const app = new App(); // 개발용
// app.play(); // 개발용

export default App;
