import {Random, Console} from '@woowacourse/mission-utils';
import {GameMessages} from './GameMessages.js';
import Pitcher from './models/Pitcher.js';

class App {
  constructor() {
    this.catcherNumbers = this.getCatcherNumbers();
    this.pitcherNumbers = [];
  }

  async play() {
    Console.print(GameMessages.GAME_START);

    while (true) {
      this.pitcherNumbers = await this.getPitcherNumbers();
      const judgmentResult = this.getResultOfJudgment(this.pitcherNumbers);

      if (judgmentResult === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        if (await this.decideToContinueGame()) {
          this.catcherNumbers = this.getCatcherNumbers();
        } else {
          return;
        }
      }
    }
  }

  getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers.length < 3) {
      const catcherNumber = Random.pickNumberInRange(1, 9);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    console.log(catcherNumbers);
    return catcherNumbers;
  }

  async getPitcherNumbers() {
    const throwBalls = await Console.readLineAsync('숫자를 입력해주세요: ');
    Pitcher.parsePitchBalls(throwBalls);
  }

  getResultOfJudgment(inputPitcherNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (inputPitcherNumbers[i] === this.catcherNumbers[i]) {
        strikes += 1;
      } else if (this.catcherNumbers.includes(inputPitcherNumbers[i])) {
        balls += 1;
      }
    }
    let result = '';

    if (balls > 0) {
      result = `${balls}볼 `;
    }

    if (strikes > 0) {
      result += `${strikes}스트라이크`;
    }

    if (result === '') {
      result = '낫싱';
    }

    Console.print(result);
    return result;
  }

  async decideToContinueGame() {
    const choice = parseInt(
      await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'),
    );

    if (choice === 1) {
      return true;
    }

    if (choice === 2) {
      return false;
    }

    throw new Error('1 또는 2를 입력해주세요');
  }
}

const app = new App();
app.play();

export default App;

