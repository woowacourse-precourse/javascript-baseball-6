import Screen from './Screen';
import Computer from './Computer';

class App {
  async play() {
    Screen.printTitle();

    while (true) {
      const computer = new Computer();

      while (!computer.isFinished()) {
        const userNumbers = await Screen.inputUserNumbers();

        computer.calculateResult(userNumbers);
        Screen.printResult(computer);
      }

      Screen.printGameOver();

      const answer = await Screen.askRestart();

      if (answer === '2') {
        break;
      }
    }
  }
}

export default App;
