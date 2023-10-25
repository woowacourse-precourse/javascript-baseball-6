import { stringToIntArrayConvertor } from '../utils/stringToIntArrayConvertor';
import {
  playerNumbersValidator,
  playerGameCodeValidator,
} from '../utils/playerInputValidator';
import { GAME_CODE } from '../constants/constants';

class Player {
  #numbers;
  #gameCode;

  constructor() {
    this.#numbers = [];
    this.#gameCode = '';
  }

  #setNumbers(inputNumbers) {
    playerNumbersValidator(inputNumbers);
    this.#numbers = stringToIntArrayConvertor(inputNumbers);
  }

  #setGameCode(inputGameCode) {
    playerGameCodeValidator(inputGameCode);
    this.#gameCode = inputGameCode;
  }

  getNumbers() {
    return this.#numbers;
  }

  getGameCode() {
    return this.#gameCode;
  }

  resetNumbers(inputNumbers) {
    this.#setNumbers(inputNumbers);
  }

  resetGameCode(inputGameCode) {
    this.#setGameCode(inputGameCode);
  }

  isRestart() {
    return this.#gameCode === GAME_CODE.restart;
  }
}

export default Player;
