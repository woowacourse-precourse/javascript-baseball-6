import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';

class Game {
  constructor() {}

  static async playGame() {
    const computer = Computer.getComputer();
    let user;
    let result = {
      strike: 0,
      ball: 0,
    };

    while (result.strike !== 3) {
      user = await User.getUser();
      result = Game.#compareUserToComputer(computer, user, result);
      Game.#printResult(result);
    }
  }

  static #compareUserToComputer(computer, user, result) {
    let [copyComputer, copyUser] = [[...computer], [...user]];
    const copyResult = { ...result };

    copyResult.strike = Game.#countStrikes(copyComputer, copyUser);
    copyResult.ball = Game.#countBalls(copyComputer, copyUser);

    return copyResult;
  }

  static #countStrikes(computer, user) {
    let strikes = 0;
    user.forEach((u, i) => {
      if (u === computer[i]) strikes++;
    });
    return strikes;
  }

  static #countBalls(computer, user) {
    let balls = 0;
    user.forEach((u, i) => {
      if (u !== computer[i] && computer.includes(u)) balls++;
    });
    return balls;
  }

  static #printResult(result) {
    const { strike, ball } = result;
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
