import { getPlayerInput, getRetryInput } from '../view/InputView.js';
import Player from '../model/Player.js';
import Computer from '../model/Computer.js';
import Referee from '../model/Referee.js';
import { GAME_OPTION, GAME_SETTINGS } from '../constants/GameSettings.js';
import {
  printGameEnd,
  printGameStart,
  printGameStatus,
} from '../view/OutputView.js';

export default class BaseballDirector {
  #Player;

  #Computer;

  #Referee;

  constructor() {
    this.#Player = new Player();
    this.#Computer = new Computer();
    this.#Referee = new Referee();
    printGameStart();
  }

  play = async () => {
    const playerNumberInput = await getPlayerInput();

    this.#Player.setSelectNumber(playerNumberInput);
    return this.#getCompareResults();
  };

  #getCompareResults = async () => {
    const playerNumber = this.#Player.getSelectNumber();
    const computerNumber = this.#Computer.getSelectNumber();
    const result = this.#Referee.compareNumbers(playerNumber, computerNumber);

    return this.#printCompareResults(result);
  };

  #printCompareResults = async (result) => {
    printGameStatus(result);
    return this.#checkGameFinish(result);
  };

  #checkGameFinish = async (result) => {
    if (result.strike === GAME_SETTINGS.numberLength) {
      return this.#printGameEnd();
    }
    return this.play();
  };

  #printGameEnd = async () => {
    printGameEnd();
    return this.#checkGameRetry();
  };

  #checkGameRetry = async () => {
    const playerRetryInput = await getRetryInput();

    if (playerRetryInput === GAME_OPTION.retry) {
      return this.#resetGame();
    }
    return 0;
  };

  #resetGame = async () => {
    this.#Computer.generate();
    return this.play();
  };
}
