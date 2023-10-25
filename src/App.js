import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getUserInput,
  getRandomNumber,
  getResult,
  checkValidation,
  setGame,
} from './components';

class App {
  _computedNumbers = [];
  _userNumbers = [];

  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this._computedNumbers = getRandomNumber();
    this._userNumbers = await getUserInput();
    checkValidation(this._userNumbers);
    const result = getResult(this._computedNumbers, this._userNumbers);
    setGame(result);
  }
}

export default App;
