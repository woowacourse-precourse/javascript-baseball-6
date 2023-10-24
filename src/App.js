import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  RESTART_SIGN = 1;
  EXIT_SIGN = 2;

  createComputerNumbers = (count) => {
    const computer = [];
    while (computer.length < count) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  validateThreeDigitNumber = (input) => {
    if (isNaN(input)) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }
    if (input.length != 3) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }
  }

  validateDuplicatedNumber = (player) => {
    const check = new Set();
    check.add(player[0]);
    check.add(player[1]);
    check.add(player[2])
    if (check.size != 3) {
      throw new Error("[ERROR] 서로 다른 세자리 숫자를 입력해주세요.")
    }
  }

  validateFinishSign = (sign) => {
    if (isNaN(sign)) {
      throw new Error("[ERROR] 재시작 또는 종료를 위해 1 또는 2를 입력해주세요");
    }
    if (sign != 1 && sign != 2) {
      throw new Error("[ERROR] 재시작 또는 종료를 위해 1 또는 2를 입력해주세요.")
    }
  }

  extractPlayerNumbers = (input) => {
    this.validateThreeDigitNumber(input);
    const player = [];
    player[0] = Math.floor(input / 100);
    player[1] = Math.floor(input % 100 / 10);
    player[2] = input % 100 % 10;
    this.validateDuplicatedNumber(player);
    return player;
  }

  countStrike = (computer, player) => {
    let strike = 0;
    for (var i = 0; i < player.length; i++) {
      if (computer.indexOf(player[i]) == i) {
        strike++;
      }
    }
    return strike;
  }

  countBall = (computer, player) => {
    let ball = 0;
    for (var i = 0; i < player.length; i++) {
      const indexOfNumber = computer.indexOf(player[i]);
      if (indexOfNumber != i && indexOfNumber != -1) {
        ball++;
      }
    }
    return ball;
  }

  createResultStatement = (strike, ball) => {
    if (strike == 3) {
      return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    } else {
      let output = "";
      if (ball != 0) output += ball + "볼 ";
      if (strike != 0) output += strike + "스트라이크";
      if (ball == 0 && strike == 0) output = "낫싱";
      return output;
    }
  }

  checkContinued = (strike) => {
    if (strike == 3) {
      return false;
    }
    return true;
  }

  async playRound() {
    const computer = this.createComputerNumbers(3);
    //MissionUtils.Console.print(computer);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let isContinued = true;

    do {
      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      const player = this.extractPlayerNumbers(input);

      let strike = this.countStrike(computer, player);
      let ball = this.countBall(computer, player);

      const result = this.createResultStatement(strike, ball);
      MissionUtils.Console.print(result);
      isContinued = this.checkContinued(strike);
    } while(isContinued);
  }

  async play() {
    let sign;
    do {
      await this.playRound();

      sign = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      this.validateFinishSign(sign);
    } while (sign == this.RESTART_SIGN);
  }
}

export default App;

const app = new App();
app.play();
