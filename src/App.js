import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async makeComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }

    return computerNumber;
  }

  async checkStrikeAndBall(computerNumber, userNumber) {
    let strike = 0;
    let ball = 0;
    // 스트라이크, 볼, 낫싱 판단
    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userNumber[i]) strike += 1;
      else if (computerNumber.includes(userNumber[i])) ball += 1;
    }

    return [strike, ball];
  }

  async play() {
    let isStart = true;

    Console.print("숫자 야구 게임을 시작합니다.");
    while (isStart) {
      let isCorrect = false;
      const computerNumber = await this.makeComputerNumber();
    }
  }
}

export default App;
