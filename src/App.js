import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from './Constant.js';
import { Numbers } from './Numbers.js';


class App {
  constructor() {
    this.answer = new Numbers();
    this.isFinished = false;
    MissionUtils.Console.print(MESSAGES.GAME_START);
  }

  // 게임 시작
  // async play() {

  // }
}

  // 라운드 입력
  async roundInput() {
    try {
      const guessNumbers = await MissionUtils.Console.readLineAsync(MESSAGES.ASK_GUESS);
      if (!/^[1-9]{3}$/.test(guessNumbers) || new Set(guessNumbers.split('')).size !== 3) {
        throw Error
      } else {
        return guessNumbers;
      }
    } catch (e) {
      MissionUtils.Console.print(MESSAGES.ERROR_GUESS);
    }
  }



export default App;
