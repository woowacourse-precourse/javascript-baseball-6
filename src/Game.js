import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';

class Game {
  constructor() {}

  async play() {
    const computer = Computer.getComputer();
    let user;
    let result = { strike: 0, ball: 0 };

    while (result.strike !== 3) {
      user = await User.getUser();
      result = this.#compareUserToComputer(computer, user);
      this.#printResult(result);
    }
  }

  #compareUserToComputer(computer, user) {
    const strike = this.#countStrikes(computer, user);
    const ball = this.#countBalls(computer, user);

    return { strike, ball };
  }

  #countStrikes(computer, user) {
    return user.filter((u, i) => u === computer[i]).length;
  }

  #countBalls(computer, user) {
    return user.filter((u, i) => u !== computer[i] && computer.includes(u))
      .length;
  }

  #printResult({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return;
    }
    if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return;
    }
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  static async askToRestartGame() {
    const shouldRestartGame = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    return shouldRestartGame;
  }
}

export default Game;
