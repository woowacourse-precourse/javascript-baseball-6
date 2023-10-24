import Player from "./model/Player.js";
import Computer from "./model/Computer.js";
import { playerInput, restartInput, printResult, printStart, printEnd } from "./view/View.js";
import { GAME_NUMBER, GAME_END } from "./constants/ConfigGame.js";

export default class BaseballGame {
  #player;
  #computer;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
    printStart();
  }

  async play() {
    const getPlayerInput = await playerInput();
    this.#player.setPlayerNumber(getPlayerInput);
    return this.compare();
  }

  async compare() {
    const playerNumber = this.#player.getPlayerNumber();
    const computerNumber = this.#computer.getComputerNumber();
    const result = this.output(playerNumber, computerNumber);

    printResult(result);
    if (result.strike === GAME_NUMBER.three) {
      printEnd();
      return this.restart();
    }

    return this.play();
  }

  async restart() {
    const getRestartInput = await restartInput();
    if (getRestartInput === GAME_END.restart) {
      this.#computer.createRandomNumber();
      this.#player.setPlayerNumber("");
      return this.play();
    }
    return 0;
  }

  output(playerNumber, computerNumber) {
    const playerNumberArray = Array.from(playerNumber).map((value) => Number(value));
    const computerNumberArray = Array.from(computerNumber);

    const state = {
      strike: 0,
      ball: 0,
    };

    playerNumberArray.forEach((value, idx) => {
      if (computerNumberArray.includes(value) && computerNumberArray[idx] === value) {
        state.strike += 1;
      }
      if (computerNumberArray.includes(value) && computerNumberArray[idx] !== value) {
        state.ball += 1;
      }
    });

    return state;
  }
}
