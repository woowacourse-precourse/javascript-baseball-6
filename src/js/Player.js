import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Player {
  numbers = [];

  async getNumbers() {
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
      this.numbers = text
        .replaceAll(' ', '')
        .split('')
        .map(v => Number(v));
    } catch (error) {
      this.throwError(error);
    }
  }
}

export default Player;
