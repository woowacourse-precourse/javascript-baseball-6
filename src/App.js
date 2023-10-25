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

  getHintString(ball, strike) {
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    if (ball === 0) {
      return `${strike}스트라이크`;
    }
    if (strike === 0) {
      return `${ball}볼`;
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computerNumbers = this.generateRandomNumbers();

    while (true) {
      const userNumbers = await InputProcessor.inputNumber();
      const { ball, strike } = this.compare(computerNumbers, userNumbers);
      Console.print(this.getHintString(ball, strike));

      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
    }
  }
}

const app = new App();
app.play();

export default App;
