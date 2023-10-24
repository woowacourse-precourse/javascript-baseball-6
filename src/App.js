import View from './View.js';
import Validate from './Validate.js';
import PickRandomNumbers from './PickRandomNumbers.js';
import Judge from './Judge.js';

class App {
  ball = 0;
  strike = 0;

  constructor() {
    this.view = new View();
    this.view.infoPrint('숫자 야구 게임을 시작합니다.');
    this.validate = new Validate();
  }

  async play() {
    try {
      await this.game();
    } catch (error) {
      this.view.infoPrint(error.message);
      throw error;
    }
  }

  async game() {
    let judgeResult = '';
    const computerNumbers = PickRandomNumbers();
    while (judgeResult !== '3스트라이크') {
      const userPickValue = await this.view.userInput('숫자를 입력해주세요 : ');
      this.validate.userPickNumbers(userPickValue);
      const userNumbers = userPickValue.split('').map((element) => +element);
      [this.ball, this.strike] = new Judge().counter(
        computerNumbers,
        userNumbers,
      );
      judgeResult = new Judge().result(this.ball, this.strike);
      this.view.infoPrint(judgeResult);
    }
    this.view.infoPrint('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const userRestartValue = await this.view.userInput(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
    );
    this.validate.restartOrExit(userRestartValue);
    if (userRestartValue === '1') this.game();
    if (userRestartValue === '2') {
      this.view.infoPrint('숫자 야구 게임을 종료합니다.');
      return;
    }
  }
}

export default App;

const app = new App();
app.play();
