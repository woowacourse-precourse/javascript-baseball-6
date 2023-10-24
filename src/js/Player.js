import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Player {
  async getNumbers() {
    let numbers = [];
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
      numbers = text
        .replaceAll(' ', '')
        .split('')
        .map(v => Number(v));
    } catch (error) {
      this.throwError(error);
    }
    return numbers;
  }
}

export default Player;
