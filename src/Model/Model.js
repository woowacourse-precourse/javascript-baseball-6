import compareNum from '../utils/compareNum.js';
import mkOpponentNum from '../utils/mkOpponentNum.js';

export default class Model {
  #opponentNum;

  #playerNum;

  #ball;

  #strike;

  constructor() {
    this.#opponentNum = mkOpponentNum();
    this.#playerNum = '';
    this.#ball = 0;
    this.#strike = 0;
  }

  savePlayerNum(input) {
    this.#playerNum = input;
    this.ballStrike();
  }

  ballStrike() {
    const opponentArray = this.#opponentNum.split('');
    const playerArray = this.#playerNum.split('');
    const strikeBall = compareNum(opponentArray, playerArray);
    this.#ball = strikeBall.ball;
    this.#strike = strikeBall.strike;
  }

  getOpponentNum() {
    return this.#opponentNum;
  }

  getPlayerNum() {
    return this.#playerNum;
  }

  getBall() {
    return this.#ball;
  }

  getStrike() {
    return this.#strike;
  }
}
