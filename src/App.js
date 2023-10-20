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

  async play() {
    this.setAnswer();
  }
}

const app = new App();
app.play();

export default App;
