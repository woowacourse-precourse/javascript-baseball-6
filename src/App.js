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
    this.#matchComputerNumber(input);
  }

  #matchComputerNumber(userInput) {
    const table = {
      STRIKE_COUNT: 0,
      BALL_COUNT: 0,
    };
    userInput.forEach((userNum, userNumIndex) => {
      if (this.#computerNumber.findIndex((computerNum) => computerNum === userNum) !== -1) {
        const computerNumIndex = this.#computerNumber.findIndex((computerNum) => computerNum === userNum);
        if (userNumIndex === computerNumIndex) {
          table.STRIKE_COUNT += 1;
        } else {
          table.BALL_COUNT += 1;
        }
      }
    });
    return table;
  }
}

const app = new App();
app.play();
export default App;
