import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_LIMIT = 3;

class App {

  constructor() {
    this.computer = [];
  }

  async play() {
    this.startGame();
  }

  startGame() {
    Console.print('숫자 야구 게임을 시작합니다.');

    this.setRandomNumbers();
    this.predicition();

  }

  async predicition() {
    
    let line = await Console.readLineAsync('숫자를 입력해주세요 : ');
    line = line.trim().split('');

    if (line.length === INPUT_LIMIT) {
      const numbers = this.convertStringToNumbers(line);
      const rightAnswers = this.computer;

      //onsole.log(rightAnswers);

      const { strike, ball } = this.getResult(numbers, rightAnswers);

      const hint = this.getHint(strike, ball);
      Console.print(hint);

      if (strike === INPUT_LIMIT) {
        this.endGame();
      }
      else {
        this.predicition();
      }
    } else {
      throw new Error('[ERROR]');
    }

  };

  setRandomNumbers() {
    const randomNumbers = this.getRandomNumbers();
    this.computer = randomNumbers;

  }

  getRandomNumbers() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  getResult(answers, rightAnswers) {
    if (answers.length !== rightAnswers.length) {
      throw new Error('[ERROR]');
    }

    let strike = 0;
    let ball = 0;

    for (const idx in answers) {
      if(answers[idx] === rightAnswers[idx])
      {
        strike += 1;
        continue;
      }
      if (rightAnswers.includes(answers[idx]))
      {
        ball += 1;
      }
    }


    return {strike, ball};
  }

  async endGame() {

    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    const number = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');

    if (number === '1') {
      this.startGame();
    }
    else if (number === '2') {
      return;
    }
    else {
      throw new Error('[ERROR]');
    }

    return;
  }

  convertStringToNumber(str) {
    const res = Number(str);

    return res;
  }

  convertStringToNumbers(answers) {
    return answers.map((str) => this.convertStringToNumber(str));
  }

  getHint(strike, ball) {

    if(strike ===0 && ball === 0) {
      return '낫싱';
    }

    let result = '';

    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }

    return result;

  }

}

const app = new App();
app.play();

export default App;
