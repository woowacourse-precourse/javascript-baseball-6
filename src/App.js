import { Console } from "@woowacourse/mission-utils";
import Player from "./model/Player.js";
import Computer from "./model/Computer.js";
import { playerInput, restartInput, printResult, printStart, printEnd } from "./view/View.js";
import { GAME_NUMBER, GAME_END } from "./constants/ConfigGame.js";

export class App {
  #player;
  #computer;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
    printStart();
  }

  async play() {
    this.init();
  }

  async init() {
    const getPlayerInput = await playerInput();
    this.#player.setPlayerNumber(getPlayerInput);
    this.test();
    this.compare();
  }

  compare() {
    const result = this.output();

    printResult(result);
    if (result.strike === GAME_NUMBER.three) {
      printEnd();
      return this.restart();
    }

    return this.init();
  }

  async restart() {
    const getRestartInput = await restartInput();
    if (getRestartInput === GAME_END.restart) {
      this.#computer.createRandomNumber();
      this.#player.setPlayerNumber("");
      return this.play();
    }
  }

  output() {
    const playerNumberArray = [...this.#player.getPlayerNumber()].map((v) => Number(v));
    const computerNumberArray = this.#computer.getComputerNumber();

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

  test() {
    console.log("player: ", this.#player.getPlayerNumber());
    console.log("computer: ", this.#computer.getComputerNumber());
  }
}

const app = new App();
app.play();
