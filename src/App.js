import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  DIGIT = 3;
  computer = [];

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let playAgain = true;

    while (playAgain) {
      this.computer = [];
      
      while (this.computer.length < this.DIGIT) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
  
        if (!this.computer.includes(number)) {
          this.computer.push(number);
        }
      }

      playAgain = await this.userPlay();
    }
  }

  async userPlay() {
    const ALL_STRIKE = 3;

    while (true) {
      let user = "";

      try {
        user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

        if (!/^[1-9]{3}$/.test(user)) {
          throw new Error("[ERROR] 1부터 9까지의 세 자리 숫자만 입력하실 수 있습니다.");
        }        

        if (/(.).*?\1/.test(user)) {
          throw new Error("[ERROR] 중복된 숫자는 입력하실 수 없습니다.");
        }

        let ball = 0;
        let strike = 0;

        const userNumbers = user.split("").map((num) => Number(num));

        for (let i = 0; i < this.DIGIT; i++) {
          if (userNumbers[i] === this.computer[i]) {
            strike = strike + 1;
          }

          if (userNumbers[i] !== this.computer[i] && this.computer.includes(userNumbers[i])) {
            ball = ball + 1;
          }
        }

        let result = "낫싱";

        if (ball > 0 && strike > 0) {
          result = `${ball}볼 ${strike}스트라이크`;
        } else if (ball === 0 && strike > 0) {
          result = `${strike}스트라이크`;
        } else if (ball > 0 && strike === 0) {
          result = `${ball}볼`;
        }

        MissionUtils.Console.print(result);

        if (strike === ALL_STRIKE) {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

          const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");

          if (restart !== "1" && restart !== "2") {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }

          return restart === "1" ? true : false;
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
}

export default App;
