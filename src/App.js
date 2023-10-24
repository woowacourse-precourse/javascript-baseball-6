import { Console } from "@woowacourse/mission-utils";
import Player from "./model/Player.js";
import Computer from "./model/Computer.js";
import { playerInput } from "./view/inputView.js";
import { GAME_NUMBER, GAME_END } from "./constants/gameConfig.js";
import { MESSAGE_INFO, MESSAGE_STATE } from "./constants/Message.js";

export class App {
  #player;
  #computer;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
  }

  async play() {
    this.init();
  }

  async init() {
    Console.print(MESSAGE_INFO.gameStart);

    try {
      const getPlayerInput = await playerInput();
      this.#player.setPlayerNumber(getPlayerInput);
      this.test();
      this.compare();
    } catch (error) {
      Console.print("에러:", error);
    }
  }

  compare() {
    const result = this.output();

    console.log("result: ", result);

    if (result.strike === GAME_NUMBER.three) {
      Console.print(MESSAGE_INFO.gameEnd);
      Console.print(MESSAGE_INFO.gameRestart);
      return;
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
