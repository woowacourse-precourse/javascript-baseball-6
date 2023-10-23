import { MissionUtils } from "@woowacourse/mission-utils";

class Test {
  constructor() {
    this.computer = [];
    this.isPlaying = true;
  }
  startNewGame() {
    // 게임 시작 메시지 출력
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터가 선택한 서로 다른 3자리 수를 생성
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    // 게임 플레이 시작
    this.playGame();
  }
  playGame() {
    while (this.isPlaying) {
      const userGuess = this.getUserInput();
      const result = this.checkGuess(userGuess);

      // 3스트라이크인 경우 게임 종료 및 재시작 여부 확인
      if (result === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.askToRestart();
        break;
      }

      // 사용자의 추측 결과 출력
      Console.print(result);
    }
  }
  async play() {}
}
