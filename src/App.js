import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  checkstrikeball(answer, temp) {
    let strike = 0,
      ball = 0;

    String(temp)
      .split("")
      .forEach((e, idx) => {
        let v = Number(e);
        if (answer.indexOf(v) === idx) strike++;
        else if (answer.includes(v)) ball++;
      });

    if (strike === 3) return `${strike}스트라이크`;
    else if (ball === 3) return `${ball}볼`;
    else if (strike === 0 && ball === 0) return "낫싱";
    else return `${ball}볼 ${strike}스트라이크`;
  }
  async startgame() {
    // 서로 다른 3자리의 랜덤 수 생성
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    while (true) {
      let temp = await MissionUtils.Console.readLineAsync(
        `숫자를 입력해주세요 : `
      );
      // 입력값 검증
      if (temp.length !== 3 || Number(temp)!=temp) {
        throw new Error("[ERROR]");
      }

      // 스트라이크 볼 확인
      let str = this.checkstrikeball(answer, temp);
      MissionUtils.Console.print(str);
      if (str === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      await this.startgame();

      let again = await MissionUtils.Console.readLineAsync(
        `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
      );
      if (again == 2) break;
    }
  }
}

export default App;

const app = new App();
app.play();
