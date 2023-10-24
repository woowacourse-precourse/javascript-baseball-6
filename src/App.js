import { MissionUtils } from "@woowacourse/mission-utils";

class App {

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

  async getInput(query) {
    const number = await MissionUtils.Console.readLineAsync(query);
    return number;
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

  async playRound() {
    const computer = this.createComputerNumbers(3);
    //MissionUtils.Console.print(computer);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const input = await this.getInput("숫자를 입력해주세요 : ");
      const playerNumbers = this.extractPlayerNumbers(input);

      let strike = 0;
      let ball = 0;
      let nothing = 0;

      for (var i = 0; i < playerNumbers.length; i++) {
        if (computer.indexOf(playerNumbers[i]) == i) {
          strike++;
        } else if (computer.indexOf(playerNumbers[i]) != -1) {
          ball++;
        } else {
          nothing++;
        }
      }

      if (strike == 3) {
        MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료")
        return;
      } else {
        let output = "";
        if (ball != 0) output += ball + "볼 ";
        if (strike != 0) output += strike + "스트라이크";
        if (nothing == 3) output = "낫싱";
        MissionUtils.Console.print(output);
      }
    }
  }

  async play() {
    let sign;
    do {
      await this.playRound();

      sign = await this.getInput("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      this.validateFinishSign(sign);
    } while (sign == 1);
  }
}

export default App;

const app = new App();
app.play();
