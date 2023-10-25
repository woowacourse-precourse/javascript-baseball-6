import { Random, Console } from "@woowacourse/mission-utils";

const ERROR_MESSAGE = "[ERROR] 숫자가 잘못된 형식입니다.";
const VALID_INPUT_REGEX = /^[1-9]+$/;
const RESTART_SIGN = "1";
const END_SIGN = "2";
class App {
  constructor() {
    // data
    this.answer = "";
    this.is_asking = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.init_answer();
    this.start_asking();
    while (this.is_asking) {
      const number = await this.ask_user("숫자를 입력해주세요 : ");
      const valid_number = this.check_number_validity(number);
      const { ball_cnt, strike_cnt } = this.calculate_point(valid_number);
      this.print_point(ball_cnt, strike_cnt);
      if (strike_cnt === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        const sign = await this.ask_user(
          `게임을 새로 시작하려면 ${RESTART_SIGN}, 종료하려면 ${END_SIGN}를 입력하세요.\n`
        );
        const valid_sign = this.check_ending_sign_validity(sign);
        if (valid_sign === RESTART_SIGN) {
          this.init_answer();
        }
        if (valid_sign === END_SIGN) {
          this.end_asking();
        }
      }
    }
  }

  calculate_point(number) {
    let ball_cnt = 0;
    let strike_cnt = 0;
    let tmpAnswerArr = [...this.answer];
    for (let i = 0; i < 3; i++) {
      if (this.answer[i] === number[i]) {
        strike_cnt++;
        tmpAnswerArr[i] = "s";
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j || tmpAnswerArr[j] === "s") {
          continue;
        }
        if (tmpAnswerArr[j] === number[i]) {
          ball_cnt++;
          tmpAnswerArr[j] = "b";
          break;
        }
      }
    }
    return { ball_cnt, strike_cnt };
  }
  print_point(ball_cnt, strike_cnt) {
    if (strike_cnt === 0 && ball_cnt === 0) {
      Console.print("낫싱");
      return;
    }
    Console.print(
      (ball_cnt > 0 ? `${ball_cnt}볼` : "") +
        (ball_cnt > 0 && strike_cnt > 0 ? " " : "") +
        (strike_cnt > 0 ? `${strike_cnt}스트라이크` : "")
    );
    return;
  }
  init_answer() {
    let tmp_str = "";
    const number_set = new Set();
    while (number_set.size < 3) {
      number_set.add(Random.pickNumberInRange(1, 9));
    }
    this.answer = [...number_set].join("");
    return tmp_str;
  }
  start_asking() {
    this.is_asking = true;
  }
  end_asking() {
    this.is_asking = false;
  }
  check_number_validity(str) {
    const is_no_dup_size_3 = (() => {
      const set = new Set([...str]);
      return set.size === 3;
    })();

    const condition = is_no_dup_size_3 && VALID_INPUT_REGEX.test(str);
    if (!condition) {
      throw new Error(ERROR_MESSAGE);
    }
    return str;
  }
  check_ending_sign_validity(sign) {
    if (!(sign === RESTART_SIGN || sign === END_SIGN)) {
      throw new Error(ERROR_MESSAGE);
    }
    return sign;
  }
  async ask_user(question) {
    const reply = await Console.readLineAsync(question);
    return reply;
  }
}

export default App;
