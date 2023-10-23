import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Game {
  constructor(App) {
    this.app = App;
  }

  randomNum() {
    const COMPUTER_NUM = [];

    while (COMPUTER_NUM.length < 3) {
      const Numbers = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(Numbers)) COMPUTER_NUM.push(Numbers);
    }

    return COMPUTER_NUM;
  }

  userNumber(message) {
    let Number;

    try {
      Number = MissionUtils.Console.readLineAsync(message);
    } catch (e) {
      throw Error(e.message);
    }

    return Number;
  }

  async numberValidChk() {
    const USER_NUMBER = await this.userNumber(`숫자를 입력해주세요 : `);
    const IS_NUMBER = /^[1-9]+$/.test(USER_NUMBER);

    try {
      if (!IS_NUMBER || USER_NUMBER.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (e) {
      this.app.isPlaying = false;
      throw Error(e.message);
    }

    const USER = Array.from(USER_NUMBER).map(Number);

    return USER;
  }

  getComparisonBall(data) {
    let strike = 0;
    let ball = 0;

    const obj = {};
    const { me, com } = data;

    com.forEach((el, idx) => {
      if (el === me[idx]) strike++;
      else if (me.includes(el)) ball++;
    });

    if (ball > 0) obj["ball"] = ball;
    if (strike > 0) obj["strike"] = strike;
    obj["com"] = com;

    const RESULT = this.isNumberSame(obj);

    return RESULT;
  }

  isNumberSame(data) {
    const answer = [];
    const { strike, ball, com } = data;

    // if (strike + ball === 0) {
    //   Console.print("낫싱");

    //   return { state: "FAIL", com };
    // }

    // if (strike !== 3) {
    //   if (ball === 0) {
    //     Console.print(`${strike}스트라이크`);

    //     return { state: "FAIL", com };
    //   }

    //   if (strike === 0) {
    //     Console.print(`${ball}볼`);

    //     return { state: "FAIL", com };
    //   }

    //   Console.print(`${ball}볼 ${strike}스트라이크`);

    //   return { state: "FAIL", com };
    // }

    // if (strike === 3) {
    //   Console.print("3스트라이크");

    //   return "WIN";
    // }

    if (!ball && !strike) {
      Console.print("낫싱");
      return { state: "FAIL", com };
    }

    if (ball) answer.push(`${ball}볼 `);
    if (strike && strike === 3) {
      Console.print(`${strike}스트라이크`);
      return "WIN";
    }
    if (strike && strike !== 3) answer.push(`${strike}스트라이크`);

    const ANSWER = Array.from(answer).join("");
    Console.print(ANSWER);
    return;
  }

  async handleGameStatus() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    try {
      const USER_NUM = await this.userNumber(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (USER_NUM === "2") {
        Console.print("게임 종료");
        this.app.isPlaying = false;

        return;
      }
      if (USER_NUM === "1") {
        this.app.isPlaying = true;
        this.app.Computer = this.randomNum();

        return;
      }

      throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
    } catch (error) {
      throw Error(error.message);
    }
  }
}

export default Game;
