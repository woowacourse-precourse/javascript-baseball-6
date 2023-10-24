import Controller from "./controller/Controller.js";
import View from "./view/View.js";
import { Console } from '@woowacourse/mission-utils';

class App {

  constructor() {
    this.view = new View();
    this.view.showInitialMessage();
    this.controller = new Controller();
  }

  async play() {
    //Controller.js 메서드 호출
    await this.controller.gameStart();
    const userInput = await this.showRestartNumberInput();
    if (userInput === '1') {
      return this.play(); 
    } else if (userInput === '2') {
      Console.print('게임을 종료합니다.');
    } else {
      //에러 처리
    }
  }


  async showRestartNumberInput() {
    const userInput = await this.showRestartRequest();
    if (userInput !== '1' && userInput !== '2') {
      //에러 처리
    }
    return userInput;
  }

  showRestartRequest() {
    return Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  }
}

export default App;

const app = new App();
app.play();