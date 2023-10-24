import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Judge {
  constructor(App) {
    this.app = App;
  }

  randomNumber() {
    const COMPUTER_NUM = [];

    while (COMPUTER_NUM.length < 3) {
      const NUMBERS = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(NUMBERS)) COMPUTER_NUM.push(NUMBERS);
    }

    return COMPUTER_NUM;
  }

  userNumber(message) {
    return Console.readLineAsync(message);
  }

  async validNumber() {
    const USER_NUMBER = await this.userNumber(`숫자를 입력해주세요 : `);

    if (!/^[1-9]{3}$/.test(USER_NUMBER)) {
      Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
      this.app.PLAYER_ON = false;
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return Array.from(USER_NUMBER, Number);
  }

  compareScore(data) {
    const { ME, COM } = data;

    let strike = 0;
    let ball = 0;

    COM.forEach((el, idx) => {
      if (el === ME[idx]) strike++;
      else if (ME.includes(el)) ball++;
    });

    const SCORE = this.scoreTable({ strike, ball, COM });

    return SCORE;
  }

  scoreTable(data) {
    const { strike, ball, com } = data;

    if (!strike && !ball) {
      Console.print("낫싱");
      return { state: "LOSE", com };
    }

    if (strike !== 3) {
      let message = "";
      if (ball === 0) {
        message = `${strike}스트라이크`;
      } else if (strike === 0) {
        message = `${ball}볼`;
      } else {
        message = `${ball}볼 ${strike}스트라이크`;
      }
      Console.print(message);
      return { state: "LOSE", com };
    }

    if (strike === 3) {
      Console.print("3스트라이크");
      return "WIN";
    }
  }

  async gameStatus() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    try {
      const USER_NUM = await this.userNumber(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (USER_NUM === "1") {
        this.app.PLAYER_ON = true;
        this.app.Computer = this.randomNumber();

        return;
      }

      if (USER_NUM === "2") {
        Console.print("게임 종료");
        this.app.PLAYER_ON = false;

        return;
      }

      throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
    } catch (error) {
      throw Error(error.message);
    }
  }
}

export default Judge;
