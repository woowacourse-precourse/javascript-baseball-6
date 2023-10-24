import { MissionUtils } from '@woowacourse/mission-utils';
import { CONTINUE, EXIT } from './Constants.js';
import { validateGuessedNumber, validatePlayAgain } from './Valdiation.js';

class Player {
  constructor() {
    this.guessedNumber = [];
  }

  async guessAnswer() {
    const input = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );
    validateGuessedNumber(input);
    this.guessedNumber = Array.from(input, (char) => Number(char));
  }

  async choosePlayAgain() {
    const input = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 ${CONTINUE}, 종료하려면 ${EXIT}를 입력하세요.\n`,
    );
    validatePlayAgain(input);
    return input;
  }
}

export default Player;
