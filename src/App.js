import Screen from "./Screen";
import Computer from "./Computer";

class App {
  async play() {
    Screen.printTitle();

    const computer = new Computer();
    const userNumbers = await Screen.inputUserNumbers();

    computer.calculateResult(userNumbers);
    Screen.printResult(computer);
  }
}

export default App;
