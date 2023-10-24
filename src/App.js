import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #answerArray;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.#answerArray = createRandomAnswer();
  }
}

function createRandomAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export default App;
