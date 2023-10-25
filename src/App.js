import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  //랜덤 숫자 받아오기
  computerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  //사용자 입력 값 낫싱, 스트라이크, 볼 판별
  async process(computer) {
    let answer = "";
    let strike = 0;
    let ball = 0;

    let number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    //잘못된 입력값 ERROR 처리
    if (number.length !== 3 || !/^(?!.*(.).*\1)[1-9]{3}$/.test(number)) {
      throw new Error("[ERROR]");
    }

    for (let i = 0; i < computer.length; i++) {
      if (computer[i] === Number(number[i])) strike++;
      else if (computer.includes(Number(number[i]))) ball++;
    }

    if (!ball && !strike) answer = "낫싱";
    if (ball && strike) answer = `${ball}볼 ${strike}스트라이크`;
    if (ball && !strike) answer = `${ball}볼`;
    if (!ball && strike) answer = `${strike}스트라이크`;

    return answer;
  }

  //3스트라이크시 종료 및 재시작
  async restart() {
    while (true) {
      const computer = this.computerNumber();
      let answer = "";

      while (answer !== "3스트라이크") {
        answer = await this.process(computer);
        await MissionUtils.Console.print(answer);
      }

      await MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );

      const finish = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (finish === "2") {
        await MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }

  // 게임 시작
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.restart();
  }
}

export default App;

//게임 실행시켜보기
const app = new App();
app.play();
