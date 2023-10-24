import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';

class BaseBallGame {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = new Computer();
  }

  async start() {
    this.computer.createRandomNumber();
  }
}

export default BaseBallGame;
