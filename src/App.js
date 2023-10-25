import { Console, Random } from "@woowacourse/mission-utils";

class App {
  // #1 랜덤으로 3개의 숫자 생성
  async setComputerNum() {
    const setNum = [];
    for (let i = 0; i < 3; i++) {
      let pickOneNumber = Random.pickNumberInRange();
      if (!setNum.includes(pickOneNumber)) setNum.push(pickOneNumber);
    }
    this.setNum = setNum;
    return;
  }

  // #2 사용자의 숫자를 입력받음
  async getPlayerNum() {
    const inputNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    // inputNum 예외처리
    if (isNaN(inputNum) || inputNum.length !== 3 || inputNum.includes(0)) {
      throw new Error("[ERROR]");
    } else {
      return Array.from(inputNum).map(Number);
    }
  }
  // #3 사용자의 숫자와 생성한 숫자와 비교
  async compareNum() {
    const computerNum = [...this.setNum];
    const playerNum = await this.getPlayerNum();

    let strike = 0;
    let ball = 0;

    // case1. strike
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] === playerNum[i]) strike++;
    }
    // case2. ball
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum.includes(playerNum[i]) && computerNum[i] !== playerNum[i])
        ball++;
    }
    await this.printResult(strike, ball);

    // 3스트라이크가 아니면 다시 비교, 맞으면 endGamePoint() 호출
    if (strike !== 3) return this.compareNum();
    else return this.endGamePoint();
  }

  // #4 3의 결과 출력
  async printResult(strike, ball) {
    if (strike === 3) {
      Console.print("3스트라이크");
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    } else if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return;
  }

  // #5 3스트라이크 시 재시작/종료 구분하는 메세지 출력 및 실행
  async endGamePoint() {
    try {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const endGameInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (endGameInput === "1") {
        return this.play();
      } else {
        Console.print("숫자 야구 게임을 종료합니다.");
        return;
      }
    } catch (error) {
      throw error;
    }
  }
  // #0 게임 실행
  async play() {
    Console.print("숫자 야구 게임을 시작합니다");
    this.setComputerNum();
    return this.compareNum();
  }
}

export default App;
