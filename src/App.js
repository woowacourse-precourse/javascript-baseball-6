import Validator from '../utils/Validator.js';
import ComputerNumber from './ComputerNumber.js';
import InputView from './InputView.js';

class App {
  #isStart;
  #computerNumber;
  async play() {
    this.#computerNumber = ComputerNumber.generateComputerNumber();
    const answer = await InputView.readUserInput();
    const input = Validator.validateUserInput(answer);
  }
}

const app = new App();
app.play();
export default App;
