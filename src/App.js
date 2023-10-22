import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    let user;
    try { 
      user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      if (!Number(user)) {
        throw new Error("숫자 이외의 문자는 입력하실 수 없습니다.");
      }

      if (user.length !== 3) {
        throw new Error("세 자리 숫자만 입력이 가능합니다.");
      }

      if (user.split("").length !== [...new Set(user.split(""))].length) {
        throw new Error("중복된 숫자는 입력하실 수 없습니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      return;
    }

    MissionUtils.Console.print(`사용자 입력 : ${user}`);
  }
}

const app = new App();
app.play();

export default App;
