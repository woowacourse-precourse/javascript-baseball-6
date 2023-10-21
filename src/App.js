import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true) {
      // 상대방(컴퓨터)의 수 얻기 - getComputerNumbers() - 구현 완료
      const computerNumbers = this.getComputerNumbers();

      // 숫자 맞추기
      while(true) {
        // 플레이어의 숫자 입력 받기 - getUserInput() - 구현 완료
        const userInput = await this.getUserInput();
        MissionUtils.Console.print("숫자를 입력해주세요 : " + userInput);

        // 숫자로 된 배열로 변경
        const userInputArr = userInput.split('').map(Number);

        /*
          유효성 검사 - 미구현
          입력한 수와 상대방(컴퓨터)수에 대한 결과 - 미구현
        */
        
        break;
      }

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

  // 플레이어의 숫자 입력 받기
  async getUserInput() {
    return await MissionUtils.Console.readLineAsync();
  }
}

export default App;