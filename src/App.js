import { MissionUtils } from '@woowacourse/mission-utils';

const NUMBER_LENGTH = 3;

class App {
  answer = [];

  setAnswer() {
    while (this.answer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  async getUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : ',
      );
    } catch (error) {
      console.log(error);
    }
  }
  async play() {
    this.setAnswer();
    await this.getUserInput();
  }
}

const app = new App();
app.play();

export default App;
