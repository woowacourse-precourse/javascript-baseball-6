import constants from "../utils/constants.js";
import randomNumGenerator from "../utils/randomNumGenerator.js";

class Game {
  #answer;
  constructor() {
    this.createAnswer(); // 게임이 시작되면 컴퓨터가 답을 생성
  }

  createAnswer() {
    const { MIN_NUM, MAX_NUM, NUM_COUNT } = constants;
    this.#answer = randomNumGenerator(MIN_NUM, MAX_NUM, NUM_COUNT); // 1~9까지 서로 다른 숫자 3개를 생성
  }
}
export default Game;
