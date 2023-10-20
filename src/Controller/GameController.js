import constants from "../utils/constants.js";
import randomNumGenerator from "../utils/randomNumGenerator.js";

class GameController {
  #answer;
  constructor() {}

  startGame() {
    const { MIN_NUM, MAX_NUM, NUM_COUNT } = constants;
    this.#answer = randomNumGenerator(MIN_NUM, MAX_NUM, NUM_COUNT); // 1~9까지 서로 다른 숫자 3개를 생성
    console.log(this.#answer);
  }
}

export default GameController;
