import { Random, Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import GameError from './GameError.js';
import { NUMBER_LENGTH, NUMBER_RANGE_REGEX } from './Constants.js';

class App {
  isAnswerValid(input) {
    if (!NUMBER_RANGE_REGEX.test(input))
      throw new GameError('숫자(1~9)만 입력해야 합니다.');

    if (input.length !== NUMBER_LENGTH)
      throw new GameError(`${NUMBER_LENGTH}개의 숫자를 입력해야 합니다.`);

    if (new Set(input).size !== NUMBER_LENGTH)
      throw new GameError('숫자가 중복되었습니다.');
  }

  async gameLoop() {
    const computer = new Computer();
    computer.generateRandomNumbers(NUMBER_LENGTH);

    while (!computer.isOut) {
      const playerAnswer = await Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );

      this.isAnswerValid(playerAnswer);
      computer.checkAnswer(playerAnswer);
    }
    Console.print(`${NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (true) {
      await this.gameLoop();

      const input = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      if (input === '1') continue;
      else if (input === '2') break;
      else throw new GameError('1이나 2를 입력해야 합니다.');
    }
  }
}

const app = new App();
app.play();
export default App;
