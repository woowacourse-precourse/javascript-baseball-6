import constants from "../utils/constants.js";
import randomNumGenerator from "../utils/randomNumGenerator.js";

class Game {
  #answerArr;
  #ballStrike;

  constructor() {
    this.createAnswer(); // 게임이 시작되면 컴퓨터가 답을 생성
    this.#ballStrike = {};
  }

  createAnswer() {
    const { MIN_NUM, MAX_NUM, NUM_COUNT } = constants;
    this.#answerArr = randomNumGenerator(MIN_NUM, MAX_NUM, NUM_COUNT); // 1~9까지 서로 다른 숫자 3개를 생성
    // console.log("answer is : ", this.#answerArr);
  }

  getBallStrike() {
    return this.#ballStrike;
  }

  checkResult(inputArr) {
    this.#ballStrike = {}; // 그전의 결과 초기화
    this.checkStrike(inputArr);
    this.checkBall(inputArr);
  }

  checkStrike(inputArr) {
    // 숫자가 같고 인덱스도 같으면 스트라이크
    for (let i = 0; i < constants.NUM_COUNT; i++) {
      if (this.#answerArr[i] === inputArr[i]) {
        this.#ballStrike[constants.STRIKE] =
          (this.#ballStrike[constants.STRIKE] || 0) + 1;
      }
    }
  }

  checkBall(inputArr) {
    // 숫자는 같지만 인덱스가 다르면 볼
    const ballCount = this.#answerArr.filter((answer, index) => {
      const inputIndex = inputArr.indexOf(answer);
      return (
        inputArr.includes(answer) && inputIndex !== -1 && index !== inputIndex
      );
    }).length;
    this.#ballStrike[constants.BALL] = ballCount;
  }

  getStrike() {
    return this.#ballStrike[constants.STRIKE]; // 스트라이크 갯수 반환
  }
}
export default Game;
