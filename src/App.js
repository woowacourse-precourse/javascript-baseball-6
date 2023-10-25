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
}

export default App;
