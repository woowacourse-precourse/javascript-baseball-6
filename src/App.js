import { Random, Console } from "@woowacourse/mission-utils";

class App {
  target_length = 0;
  target = [0, 0, 0];

  constructor() {
    this.target_length = 3;
    this.init_secret_number();
  }

  init_secret_number() {
    let secret_numbers = [];

    secret_numbers.push(Random.pickNumberInRange(1, 9));
    while (secret_numbers.length < this.target_length) {
      const candidate = Random.pickNumberInRange(1, 9);
      let is_uniq = true;
      for (let i = 0; i < secret_numbers.length; i++) {
        if (candidate === secret_numbers[i]) {
          is_uniq = false;
          break;
        }
      }
      if (is_uniq) {
        secret_numbers.push(candidate);
      }
    }
    Console.print(secret_numbers);
    this.target = secret_numbers;
  }

  /**
   * 중복 숫자 존재하는지 확인하는 함수
   * @param {[number]} numbers
   * @returns {boolean}
   */
  isDuplicateNumbers(numbers) {
    const origin_length = numbers.length;
    const setNums = new Set(numbers);
    const set_length = [...setNums].length;
    return origin_length === set_length ? false : true;
  }

  check(input_numbers) {
    if (input_numbers.length !== 3 || this.isDuplicateNumbers(input_numbers)) {
      return 1;
    }

    let answer = [];
    for (let i = 0; i < input_numbers.length; i++) {
      const char = input_numbers.charAt(i);
      if (typeof +char !== "number" || isNaN(+char)) {
        return 1;
      }
      answer.push(+char);
    }

    // 스트라이크 체크
    let [strike, ball] = [0, 0];

    for (let i = 0; i < this.target.length; i++) {
      if (this.target[i] === answer[i]) {
        strike++;
        continue;
      }
      if (this.target.includes(answer[i])) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike) {
      Console.print(`${strike}스트라이크`);
    } else if (ball) {
      Console.print(`${ball}볼`);
    }
    return 0;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.\n");

    while (true) {
      const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (this.check(answer)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (answer === this.target.join("")) {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        const retry = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (retry === "1") {
          this.init_secret_number();
        } else if (retry === "2") {
          return;
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
  }
}

const my_app = new App();
my_app.play();

export default App;
