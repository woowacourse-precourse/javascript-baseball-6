import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const DIGIT = 3;
    const computer = [];
    while (computer.length < DIGIT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    console.log(`==== ${computer} ====`);

    let user;
    try { 
      user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      if (!Number(user)) {
        throw new Error("숫자 이외의 문자는 입력하실 수 없습니다.");
      }

      if (Number(user) < 0) {
        throw new Error("음수는 입력하실 수 없습니다.");
      }

      if (user.split("").includes("0")) {
        throw new Error("숫자 0은 입력하실 수 없습니다.");
      }

      if (user.length !== 3) {
        throw new Error("세 자리 숫자만 입력하실 수 있습니다.");
      }

      if (user.split("").length !== [...new Set(user.split(""))].length) {
        throw new Error("중복된 숫자는 입력하실 수 없습니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      return;
    }

    let ball = 0;
    let strike = 0;

    user = user.split("").map(num => num = Number(num));

    for (let i = 0; i < DIGIT; i++) {
      if (user[i] === computer[i]) {
        strike = strike + 1;
      }

      if (user[i] !== computer[i] && computer.includes(user[i])) {
        ball = ball + 1;
      }
    }

    let result = "낫싱";
    if (ball > 0 && strike > 0) {
      result = `${ball}볼 ${strike}스트라이크`;
    }

    if (ball === 0 && strike > 0) {
      result = `${strike}스트라이크`;
    }

    if (ball > 0 && strike === 0) {
      result = `${ball}볼`;
    }

    MissionUtils.Console.print(result);

    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      
      try {
        const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
        
        if (!(restart === "1" || restart === "2")) {
          throw new Error("숫자가 잘못된 형식입니다.");
        }

        if (restart === "1") {
          this.play();
        }

        if (restart === "2") {
          return;
        }
      } catch (error) {
        MissionUtils.Console.print(`[ERROR] ${error.message}`);
        return;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
