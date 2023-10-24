import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  createComputerNumbers = (count) => {
    const computer = [];
    while (computer.length <count) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  validateThreeDigitNumber = (input) => {
    if(isNaN(input)) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }
    if(input.length != 3) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }
  }

  validateDuplicatedNumber = (player) => {
    const check = new Set();
    check.add(player[0]);
    check.add(player[1]);
    check.add(player[2])
    if(check.size != 3) {
      throw new Error("[ERROR] 서로 다른 세자리 숫자를 입력해주세요.")
    }
  }

  validateFinishSign = (sign) => {
    if(isNaN(sign)) {
      throw new Error("[ERROR] 재시작 또는 종료를 위해 1 또는 2를 입력해주세요");
    }
    if(sign != 1 && sign != 2) {
      throw new Error("[ERROR] 재시작 또는 종료를 위해 1 또는 2를 입력해주세요.")
    }
  }

  async play() {
    while(true) {
      const computer = this.createComputerNumbers(3);
      //MissionUtils.Console.print(computer);
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      while(true) {
        const number = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        this.validateThreeDigitNumber(number);

        const player = [];
        player[0] = Math.floor(number / 100);
        player[1] = Math.floor(number % 100 / 10);
        player[2] = number % 100 % 10;
        this.validateDuplicatedNumber(player);
  
        let strike = 0;
        let ball = 0;
        let nothing = 0;
  
        for(var i = 0; i < player.length; i++) {
          if(computer.indexOf(player[i]) == i) {
            strike++;
          }else if(computer.indexOf(player[i]) != -1) {
            ball++;
          }else{
            nothing++;
          }
        }

        if(strike == 3) {
          MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료")
          break;
        }else{
          var output = "";
          if(ball != 0) output += ball + "볼 ";
          if(strike != 0) output += strike + "스트라이크";
          if(nothing == 3) output = "낫싱";
          MissionUtils.Console.print(output);
        }
      }

      const sign = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      this.validateFinishSign(sign);
      if(sign == 1) {
        continue;
      }else if(sign == 2) {
        break;
      }
    }
  }
}

export default App;

const app = new App();
app.play();
