import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

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

  test() {
    console.log("player: ", this.#player.getPlayerNumber());
    console.log("computer: ", this.#computer.getComputerNumber());
  }
}

// [저장] 컴퓨터 랜덤숫자
export class Computer {
  #computerNumber;

  constructor() {
    this.createRandomNumber();
  }

  createRandomNumber() {
    const randomNumber = new Set();

    while (randomNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.has(number)) {
        randomNumber.add(number);
      }
    }
    this.#computerNumber = [...randomNumber];
  }

  getComputerNumber() {
    return this.#computerNumber;
  }
}

// [저장] 플레이어 입력
export class Player {
  #playerNumber;

  getPlayerNumber() {
    return this.#playerNumber;
  }

  setPlayerNumber(playerNumber) {
    this.#playerNumber = playerNumber;
  }
}

const app = new App();
app.play();
