import { Console, MissionUtils } from '@woowacourse/mission-utils';
import InputProcessor from './InputProcessor.js';

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

  compare(computerNumbers, userNumbers) {
    let strike = 0;
    let ball = 0;

    computerNumbers.forEach((computerNum, computerNumIdx) => {
      userNumbers.forEach((userNum, userNumIdx) => {
        if (computerNum === userNum && computerNumIdx === userNumIdx) {
          strike += 1;
        } else if (computerNum === userNum) {
          ball += 1;
        }
      });
    });

    return { ball, strike };
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computerNumbers = this.generateRandomNumbers();
    const userNumbers = await InputProcessor.inputNumber();

    const { ball, strike } = this.compare(computerNumbers, userNumbers);
  }
}

const app = new App();
app.play();

export default App;
