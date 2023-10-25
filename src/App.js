import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = null;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateAnswer();
    await this.runGame();
  }

  async restart() {
    this.answer = this.generateAnswer();
    await this.runGame();
  }

  generateAnswer() {
    let answer = [];
    while (answer.length < 3) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join('');
  }

  async runGame() {
    let gameContinue = true;
    while (gameContinue) {
      const playerInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.validateInput(playerInput);

      const { strike, ball } = this.compareWithAnswer(playerInput);

      if (strike === 3) {
        Console.print(
          `3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        gameContinue = await this.askForRestart();
      } else {
        Console.print(this.buildResultMessage({ strike, ball }));
      }
    }
  }

  validateInput(input) {
    if (
      input.length !== 3 ||
      new Set(input).size !== 3 ||
      !/^[1-9]+$/.test(input) ||
      input.includes(' ')
    ) {
      throw new Error(
        `[ERROR] 서로 다른 수로 이루어진 세 자리 숫자를 입력해야 합니다. (0은 제외)`
      );
    }
  }

  compareWithAnswer(input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === this.answer[i]) {
        strike++;
      } else if (this.answer.includes(input[i])) {
        ball++;
      }
    }

    return { strike, ball };
  }

  buildResultMessage({ strike, ball }) {
    const resultArr = [];
    if (ball > 0) {
      resultArr.push(`${ball}볼`);
    }
    if (strike > 0) {
      resultArr.push(`${strike}스트라이크`);
    }
    return resultArr.length === 0 ? '낫싱' : resultArr.join(' ');
  }

  async askForRestart() {
    let input;
    while (true) {
      input = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. '
      );

      if (input === '1' || input === '2') {
        break;
      }
    }

    if (input === '1') {
      this.answer = this.generateAnswer();
      return true;
    }

    if (input === '2') {
      Console.print('게임을 종료합니다.');
      return false;
    }
  }
}

export default App;
