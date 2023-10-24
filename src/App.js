import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.ANSWER = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const random_number = async () => {
      const NUM_ARR = [];
      for (let i = 0; NUM_ARR.length < 3; i++) {
        let n = Random.pickNumberInRange(1, 9);
        if (!NUM_ARR.includes(n)) NUM_ARR.push(n);
      }
      this.ANSWER = NUM_ARR;
    };

    const user_number = async () => {
      const USER_ANSWER = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (
        isNaN(USER_ANSWER) ||
        USER_ANSWER.length !== 3 ||
        USER_ANSWER.includes("0")
      ) {
        throw new Error("[ERROR]");
      } else {
        return Array.from(USER_ANSWER).map(Number);
      }
    };

    const result = async (strike, ball) => {
      if (strike === 0 && ball === 0) {
        Console.print("낫싱");
      } else if (strike === 0 && ball !== 0) {
        Console.print(`${ball}볼`);
      } else if (strike !== 0 && ball === 0) {
        Console.print(`${strike}스트라이크`);
      } else if (strike !== 0 && ball !== 0) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    };

    const compare_random_and_user = async () => {
      const RANDOM_ANSWER = [...this.ANSWER];
      const USER_ANSWER = await user_number();
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < USER_ANSWER.length; i++) {
        if (USER_ANSWER[i] === RANDOM_ANSWER[i]) {
          strike++;
          USER_ANSWER.splice(i, 1);
          RANDOM_ANSWER.splice(i, 1);
          i--;
        }
      }

      for (let i = 0; i < USER_ANSWER.length; i++) {
        if (RANDOM_ANSWER.includes(USER_ANSWER[i])) ball++;
      }

      await result(strike, ball);

      if (strike !== 3) {
        return compare_random_and_user();
      } else {
        return finish_game();
      }
    };

    const finish_game = async () => {
      const RESTART_CHOICE = await Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (RESTART_CHOICE === "1") {
        random_number();
        return compare_random_and_user();
      } else if (RESTART_CHOICE === "2") {
        Console.print("게임 종료");
      } else {
        throw new Error("[ERROR]");
      }
    };

    await random_number();
    return compare_random_and_user();
  }
}

export default App;
