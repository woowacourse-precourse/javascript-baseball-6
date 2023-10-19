import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

const Message = {
  printGameStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printEnterNumbers() {
    return MissionUtils.Console.readLineAsync(MESSAGE.ENTER_NUMBER);
  },

  printResult(strike, ball) {
    const message =
      strike === 0 && ball === 0
        ? '낫싱'
        : `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`;
    MissionUtils.Console.print(message);
  },

  printGameOver() {
    MissionUtils.Console.print(MESSAGE.GAME_OVER);
  },

  printReset() {
    return MissionUtils.Console.readLineAsync(MESSAGE.GAME_RESET);
  },
};

export default Message;
