import Controller from "./controller/Controller.js";
import View from "./view/View.js";
import { Console } from '@woowacourse/mission-utils';
import { ERROR, GAME_PROGRESS_TEXT } from "./constant/constant.js";

class App {

  constructor() {
    this.view = new View();
    this.view.showInitialMessage();
  }

  async play() {
    //Controller.js 메서드 호출
    this.controller = new Controller();    
    await this.controller.gameStart();
    const userInput = await this.showRestartNumberInput();
    if (userInput === '1') {
      return this.play(); 
    } else if (userInput === '2') {
      Console.print('게임을 종료합니다.');
    }
  }


  async showRestartNumberInput() {
    const userInput = await this.showRestartRequest();
    if (userInput !== '1' && userInput !== '2') {
      throw new Error(ERROR.INVALID_USER_INPUT);
    }
    return userInput;
  }

  showRestartRequest() {
    return Console.readLineAsync(GAME_PROGRESS_TEXT.GAME_RETRY_MESSAGE);
  }
}

export default App;

const app = new App();
app.play();