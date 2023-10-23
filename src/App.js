import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true) {
      const number = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      const first = Math.floor(number / 100);
      const second = Math.floor(number % 100 / 10);
      const third = number % 100 % 10;

      let strike = 0;
      let ball = 0;
      let nothing = 0;

      if(computer.indexOf(first) == 0) {
        strike++;
      }else if(computer.indexOf(first) != -1) {
        ball++;
      }else{
        nothing++;
      }

      if(computer.indexOf(second) == 1) {
        strike++;
      }else if(computer.indexOf(second) != -1) {
        ball++;
      }else{
        nothing++;
      }

      if(computer.indexOf(third) == 2) {
        strike++;
      }else if(computer.indexOf(third) != -1) {
        ball++;
      }else{
        nothing++;
      }

      if(strike == 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
        break;
      }else{
        var output = "";
        if(ball != 0) output += ball + "볼 ";
        if(strike != 0) output += strike + "스트라이크";
        if(nothing == 3) output = "낫싱";
        MissionUtils.Console.print(output);
      }
    }
  }
}

export default App;

const app = new App();
app.play();
