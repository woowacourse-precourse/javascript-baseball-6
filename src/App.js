import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const COM_NUMBER = this.createNumber();
    let userNumber = this.userNumber();
  }

  createNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join("");
  }

  userNumber() {
    try {
      const USERINPUT = MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      return USERINPUT;
    } catch (error) {
      console.error("숫자만 입력해주세요 : ", error);
    }
  }

  checkNumber(com, user) {
    let strikes = 0;
    let balls = 0;

    for(let i = 0; i < 3; i++) {
      if(com[i] === user[i]) {
        strikes++;
      } else if(com.includes(user[i])) {
        balls++;
      }
    }

    if(strikes === 3) {
      return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    } else if(strikes === 0 && balls === 0) {
      return "낫싱";
    } else if(strikes === 0 && balls > 0) {
      return `${balls}볼`;
    } else if(strikes > 0 && balls === 0) {
      return `${strikes}스트라이크`;
    } else {
      return `${balls}볼 ${strikes}스트라이크`;
    }
  }
}

const app = new App();
app.play();

export default App;
