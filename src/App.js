import Screen from "./Screen";
import Computer from "./Computer";

class App {
  async play() {
    Screen.printTitle();

    const computer = new Computer();
  }
}

export default App;
