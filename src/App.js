import { Console } from '@woowacourse/mission-utils';
import generateQuestion from './generateQuestion';
import { parseAnswer, parseKeepPlaying } from './parseInput';
import { scoreAnswer } from './scoreAnswer';
import { formatScore } from './formatScore';

class App {
  constructor() {
    /** @type {number} */
    this.questionSize = 3;
    /** @type {ReturnType<typeof parseAnswer>} */
    this.parseAnswer = parseAnswer(this.questionSize);
  }

  resetAnswer() {
    /** @type {ReadonlySet<number>} this.answer */
    this.answer = generateQuestion(this.questionSize);
    /** @type {ReturnType<typeof scoreAnswer>} */
    this.scoreAnswer = scoreAnswer(this.answer);
  }

  async playRound() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const parsed = this.parseAnswer(input);
    if (parsed === null) {
      Console.print('숫자가 잘못된 형식입니다.');
      throw new Error('[ERROR]');
    }
    // @ts-expect-error: 느긋하게 초기화했기 때문에 null이 될 수 없습니다.
    const score = this.scoreAnswer(parsed);
    return score;
  }

  async playGame() {
    this.resetAnswer();
    while (true) {
      const score = await this.playRound();
      Console.print(formatScore(score));
      if (score.strikes === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (true) {
      await this.playGame();

      const keepPlaying = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.').then(parseKeepPlaying);
      if (keepPlaying === null) {
        Console.print('입력이 없습니다.');
        throw new Error('[ERROR]');
      }
      if (!keepPlaying) {
        break;
      }
    }
  }
}

export default App;
