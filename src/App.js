import { Console } from "@woowacourse/mission-utils";
import Player from "./model/Player.js";
import Computer from "./model/Computer.js";

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
    Console.print("숫자 야구 게임을 시작합니다.");

    try {
      const getPlayerInput = await this.playerInput();
      this.#player.setPlayerNumber(getPlayerInput);
      this.test();
      this.compare();
    } catch (error) {
      Console.print("에러:", error);
    }
  }

  async playerInput() {
    try {
      return Console.readLineAsync("숫자를 입력해주세요 : ");
    } catch (error) {
      return Console.print(error);
    }
  }

  compare() {
    const result = this.output();
    console.log("result: ", result);

    if (result.strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
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
