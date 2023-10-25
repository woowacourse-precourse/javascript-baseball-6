import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.generateRandomNumber();
    MissionUtils.Console.print("숫자야구게임 시작");
    return this.game();
  }
  
  async generateRandomNumber() {
    const RandNUM = [];
    while (RandNUM.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandNUM.includes(number)) {
        RandNUM.push(number);
      }
    }
    this.RandNUM = RandNUM;
    return 0;
  }

  async playerGuess() {

    const key_input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const input = key_input.split("").map(Number);
    if ( input.some(isNaN) || input.length != 3 || input.includes(0)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 게임 종료");
    } else {
      let arr = [];
      for (let i = 0; i < 3; i++) arr.push(input[i]);
      return arr;
    }
  }
  async game() {
    const input = await this.playerGuess();
    const ANSWER = [...this.RandNUM];
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (ANSWER.includes(input[i])) ball++;
    }
    for (let i = 0; i < 3; i++) {
      if (ANSWER[i] == input[i]) strike++;
    }
    ball = ball - strike;
    await this.Umpire(strike, ball);
    if (strike == 3) return this.playAgain();
    else return this.game();
  }
  async playAgain() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
    const INPUT = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (INPUT == 1) {
      this.generateRandomNumber();
      return this.game();
    } else if (INPUT == 2) {
      MissionUtils.Console.print("게임 종료");
      return;
    } else {
      throw new Error("[ERROR] 1 또는 2를 입력하세요. 게임 종료");
    }
  }
  async Umpire(strike, ball) {
    let message = "";
  
    if (strike === 0 && ball === 0) {
      message = "낫싱";
    } else {
      if (ball > 0) message += `${ball}볼 `;
      if (strike > 0) message += `${strike}스트라이크`;
    }
    MissionUtils.Console.print(message);
    return;
  }

}

export default App;

