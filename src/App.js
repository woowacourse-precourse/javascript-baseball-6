import Screen from "./Screen";
import Computer from "./Computer";

class App {
  async play() {
    Screen.printTitle();

    const computer = new Computer();

    while (!computer.isFinished()) {
      const userNumbers = await Screen.inputUserNumbers();

      computer.calculateResult(userNumbers);
      Screen.printResult(computer);
    }

    Screen.printGameOver();
  }
}

export default App;
