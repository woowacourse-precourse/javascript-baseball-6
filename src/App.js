import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getUserInput,
  getRandomNumber,
  getResult,
  checkValidation,
  getGameCommand,
} from './components';
import { GAME_MESSAGE } from './constants';

class App {
  _computedNumbers = [];
  _userNumbers = [];
  _gameState = true;

  constructor() {
    MissionUtils.Console.print(GAME_MESSAGE.GAME_START_MESSAGE);
  }

  async setGameState() {
    const command = await getGameCommand();
    if (command === '1') {
      await this.play();
    }
    if (command === '2') {
      this._gameState = false;
      return;
    }
    if (command !== '1' && command !== '2')
      throw new Error('[ERROR] 잘못된 게임 커맨드 입력으로 게임이 종료됩니다.');
  }

  async play() {
    this._computedNumbers = getRandomNumber();

    while (this._gameState) {
      this._userNumbers = await getUserInput();
      checkValidation(this._userNumbers);
      const result = getResult(this._computedNumbers, this._userNumbers);
      if (result) await this.setGameState();
    }
  }
}

export default App;
