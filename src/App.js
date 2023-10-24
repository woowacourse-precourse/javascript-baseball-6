import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    const answer = this.getRandNum();
    const input = await this.getInput();
    await this.checkAnswer(input, answer);
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    const validityCheck = this.validateInput(input);

    await validityCheck
      .catch((e) => { throw new Error(`[ERROR] ${e}`) });

    return input;
  }

  getRandNum() {
    const numList = [];
    while (numList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (numList.indexOf(num) < 0) numList.push(num);
    }
    return numList;
  }

  validateInput(input) {
    return new Promise((resolve, reject) => {
      if (!Number(input)) reject('숫자가 아닙니다.');
      if (input.length !== 3) reject('3자릿수가 아닙니다.');
      if (this.containsDupe(input)) reject('중복되는 숫자가 있습니다.');
      resolve();
    });
  }

  containsDupe(input) {
    const arr = input.toString().split('');
    const set = new Set(arr);
    if (arr.length !== set.size) return true;
    return false;
  }

  checkAnswer(guess, answer) {
    let ball = 0;
    let strike = 0;

    const guessArr = guess.split('').map((x) => { return Number(x) });
    answer.forEach((x, i) => {
      if (x === guessArr[i]) strike++;
      if (x !== guessArr[i] && answer.indexOf(guessArr[i]) >= 0) ball++;
    });

    this.printResult(ball, strike);

    if (strike === 3) return this.endGame();
    return this.continueGame(answer);
  }

  async continueGame(answer) {
    const input = await this.getInput();
    await this.checkAnswer(input, answer);
  }

  async endGame() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const input = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (Number(input) === 1) return this.play();
  }

  printResult(ball, strike) {
    const result = ball > 0 && strike > 0 ? `${ball}볼 ${strike}스트라이크` : ball > 0 ? `${ball}볼` : strike > 0 ? `${strike}스트라이크` : '낫싱';
    MissionUtils.Console.print(result);
  }
}

const app = new App();
app.play();

export default App;
