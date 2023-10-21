import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true) {
      // 상대방(컴퓨터)의 수 얻기 - getComputerNumbers() - 구현 완료
      const computerNumbers = this.getComputerNumbers();
      MissionUtils.Console.print(computerNumbers);

      /*
        숫자 맞추기 - 미구현
      */

      // 재시작/종료 여부 얻기 - askForRestart() - 미구현
      const restart = 2

      // restart 값이 2일 때, 프로그램 완전 종료
      if (restart === 2) break;
    }
  }

  // 상대방(컴퓨터)의 수 얻기
  getComputerNumbers() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(computer);
  }
}

export default App;