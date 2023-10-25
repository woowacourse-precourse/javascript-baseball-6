import { BALL, Console, ERROR_TEXT, GAME_START_TEXT, NOTHING, Random, STRIKE } from './Constant';

class App {
  constructor() {
    this.pitcherNumbers = [];
    this.hitterNumbers = [];
    this.score = [0, 0]; // [ball, strike]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.gameStart();
  }

  async gameStart() {
    this.pitcherNumbers = [];
    await this.getPitcherNumbers();
    await this.getHitterNumbers();
  }

  async getPitcherNumbers() {
    while (this.pitcherNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.pitcherNumbers.includes(number)) {
        this.pitcherNumbers.push(number);
      }
    }
  }

  async getHitterNumbers() {
    const answerStr = await Console.readLineAsync(GAME_START_TEXT);
    if (answerStr) {
      await this.hitterValidator(answerStr);
      this.hitterNumbers = answerStr.split('').map(Number);
      await this.compare();
    }
  }

  hitterValidator(answer) {
    if (answer) {
      const answerStrArr = answer.split('');
      const answerNumArr = answerStrArr.map(Number);
      const repeatNumbers = [...new Set(answerNumArr)];
      if (answerNumArr.length !== 3 || answerNumArr.includes(0) || repeatNumbers.length !== 3) {
        throw new Error(ERROR_TEXT);
      }
    }
  }

  async compare() {
    this.score = [0, 0];
    this.hitterNumbers.map((item, index) => {
      if (this.pitcherNumbers[index] === item) {
        this.score[1] += 1;
      } else if (this.pitcherNumbers.includes(item)) {
        this.score[0] += 1;
      }
    });
    await this.printScore();
  }

  async printScore() {
    const ball = this.score[0];
    const strike = this.score[1];
    let scoreText = '';
    if (ball + strike === 0) {
      scoreText = NOTHING;
    }
    if (ball > 0) {
      scoreText += `${ball}${BALL} `;
    }
    if (strike > 0) {
      scoreText += `${strike}${STRIKE}`;
    }
    Console.print(scoreText);
    await this.checkThreeStrike();
  }

  async checkThreeStrike() {
    if (this.score[1] === 3) {
      Console.print(GAME_SUCCESS);
      await this.getRestartStatus();
    } else {
      await this.getHitterNumbers();
    }
  }

  async getRestartStatus() {
    try {
      const answer = await Console.readLineAsync(GAME_RESTART);
      const answerNum = Number(answer);
    } catch (error) {
      throw new Error(ERROR_TEXT);
    }
  }

  restartStatusValidator(answer) {
    if (answer !== 1 && answer !== 2) {
      throw new Error(ERROR_TEXT);
    }
  }
}

export default App;
