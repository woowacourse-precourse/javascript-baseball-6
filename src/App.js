const MissionUtils = require("@woowacourse/mission-utils");
class App {
  async getUserHit() {
    // 숫자 입력받기
    try {
      this.userHit = "";
      this.userHit = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      if (
        (await this.userHit.length) !== 3 ||
        (await this.userHit.charCodeAt) < 49 ||
        (await this.userHit.charcodeAt) > 57
      ) {
        throw new Error(process.exit(1));
      }
    } catch (error) {
      MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  // 랜덤숫자 생성하기
  async createRandomNumber() {
    try {
      this.randomNumber = [];
      while (this.randomNumber.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!this.randomNumber.includes(number)) {
          this.randomNumber.push(number);
        }
      }
    } catch (error) {
      MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
      process.exit(1);
    }
  }

  //랜덤 숫자와 입력 숫자 비교하기
  async computerVsUser(randomNumber) {
    const userHitArr = await this.userHit.split("").map(Number);
    let strike = 0;
    let ball = 0;

    userHitArr.forEach((num, i) => {
      if (num === randomNumber[i]) {
        strike++;
        return;
      }
      if (this.randomNumber.includes(num)) {
        ball++;
      }
    });

    this.checkStrikeBall = { strike, ball };
  }

  async check() {
    const { strike, ball } = this.checkStrikeBall;
    if (strike === 3) {
      MissionUtils.Console.print(
        `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }
    if (strike > 0 && strike < 3 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    if (strike > 0 && strike < 3 && ball > 0 && ball < 2) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    if (ball > 0 && ball < 4 && strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print(`낫싱`);
    }
  }

  async getNewStartOrNot() {
    try {
      const restartOrEnd = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      if (Number(restartOrEnd) === 1) {
        return true;
      }
      if (Number(restartOrEnd) === 2) {
        Console.print("게임을 종료합니다.");
        Console.close();
      }
      throw new Error(process.exit(1));
    } catch (error) {
      MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      await this.getUserHit();
      this.createRandomNumber();
      await this.computerVsUser(this.randomNumber);
      this.check();
      const restart = await this.getNewStartOrNot();
      if (!restart) {
        break;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
