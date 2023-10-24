import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computer = computer;
    return 0;
  }

  async playerNumber() {
    const PLAYER_NUMBER = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (
      Number(PLAYER_NUMBER) != PLAYER_NUMBER ||
      PLAYER_NUMBER.length != 3 ||
      PLAYER_NUMBER.includes(0)
    ) {
      throw new Error("[ERROR]");
    } else {
      let arr = [];
      for (let i = 0; i < 3; i++) arr.push(Number(PLAYER_NUMBER.split("")[i]));
      return arr;
    }
  }
  async baseball() {
    const PLAYER_NUMBER = await this.playerNumber();
    const COMPUTER_NUMBER = [...this.computer];
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (COMPUTER_NUMBER.includes(PLAYER_NUMBER[i])) ball++;
    }
    for (let i = 0; i < 3; i++) {
      if (COMPUTER_NUMBER[i] == PLAYER_NUMBER[i]) strike++;
    }
    ball = ball - strike;
    await this.result(strike, ball);
    if (strike == 3) return this.end();
    else return this.baseball();
  }
  async end() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (INPUT == 1) {
      this.computerNumber();
      return this.baseball();
    } else if (INPUT == 2) {
      MissionUtils.Console.print("게임 종료");
      return;
    } else {
      throw new Error("[ERROR]");
    }
  }
  async result(strike, ball) {
    let str = ""
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
    else if (strike === 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼`);
    else if (strike !== 0 && ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else if (strike !== 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    return;
  }
  async play() {
    this.computerNumber();
    return this.baseball();
  }
}

export default App;
