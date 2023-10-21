import { Random,Console } from "@woowacourse/mission-utils";

class Computer {
  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

class User {
  async guess() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (input.length !== 3) {
      throw new Error("[ERROR] 숫자의 길이가 올바르지 않습니다.");
    }

    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const numbers = input.split("");
    const set = new Set(numbers);
    if (set.size !== 3) {
      throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    }

    return input;
  }
}

class App {
  async play() {
    const com = new Computer();
    const user = new User();
  }
}

export default App;

const app = new App();
app.play();