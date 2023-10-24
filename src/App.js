import Controller from './controller/Controller.js';
import View from './view/View.js';
import { ERROR } from './constant/constant.js';

class App {

  constructor() {
    this.view = new View();
    this.view.showInitialMessage();
  }

  async play() {
    this.controller = new Controller();    
    await this.controller.gameStart();
    const userInput = await this.showRestartNumberInput();

    if (userInput === '1') {
      return this.play(); 
    } else if (userInput === '2') {
      this.view.showExitMessage();
    }
  }

  async showRestartNumberInput() {
    const userInput = await this.view.showRestartRequest();
    if (userInput !== '1' && userInput !== '2') {
      throw new Error(ERROR.INVALID_USER_INPUT);
    }
    return userInput;
  }
}

export default App;

const app = new App();
app.play();