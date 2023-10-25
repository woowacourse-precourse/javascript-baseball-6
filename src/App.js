import { Console, Random } from "@woowacourse/mission-utils";

const ANSWER_LENGTH = 3;

class App {

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const answer = this.createAnswer();
  }

  createAnswer(){
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }
}

export default App;