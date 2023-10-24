import { Console } from '@woowacourse/mission-utils';
import { BaseballService } from './Baseball.service.js';

class App {
  #baseballService;

  constructor() {
    this.#baseballService = new BaseballService();
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.#baseballService.baseballQuery();
  }
}

export default App;
