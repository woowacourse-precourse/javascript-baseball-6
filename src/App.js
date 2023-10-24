import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // #1 랜덤으로 3개의 숫자 생성
  async setComputerNum() {
    const setNum = [];
    for (let i = 0; i < 3; i++) {
      let pickOneNumber = await MissionUtils.Random.pickNumberInRange();
      if (!setNum.includes(pickOneNumber)) setNum.push(pickOneNumber);
    }
    return this.setNum;
  }
  // #2 사용자의 숫자를 받고 생성한 숫자와 비교
  async compareNum() {
    const computerNum = [...this.setNum];
    const playerNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    let strike = 0;
    let ball = 0;

    //strike
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] === playerNum[i]) strike++;
      computerNum.splice(i, 1);
      playerNum.splice(i, 1);
      i--;
    }
    //ball
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum.includes(playerNum[i])) ball++;
    }
    await printResult();
  }

  // #3 2의 결과 출력
  async printResult() {
    if (this.strike === 0 && this.ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (this.strike !== 0 && this.ball === 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else if (this.strike !== 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
    return;
  }

  // #4 3스트라이크 시 재시작/종료 구분하는 메세지 출력 및 실행
  async endGamePoint() {
    const endGameInput = MissionUtils.Console
      .readLineAsync(`3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);

    if (endGameInput !== 1 || endGameInput !== 2) {
      throw new Error("[ERROR]");
    } else if (endGameInput === 1) {
      return this.play();
    } else if (endGameInput === 2) {
      MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
      return;
    }
  }
  // #0 게임 실행
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
    await this.setComputerNum();
    await this.compareNum();
    await this.printResult();
  }
}

export default App;
