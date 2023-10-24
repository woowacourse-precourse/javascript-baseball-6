import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  generateRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumbers = this.generateRandomNumbers();
  }
}

const app = new App();
app.play();

export default App;
