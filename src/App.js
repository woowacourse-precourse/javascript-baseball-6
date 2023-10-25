import { MissionUtils } from "@woowacourse/mission-utils";
import { messageAllStrike, messageGameEnd, messageGameStart } from "./constant/allPrintMessage";
import { checkForReplay } from "./error/validation";
import generateRandomNumbers from "./computer/generateRandomNumbers";
import getUserGuess from "./user/inputUserNumbers";
import askForReplay from "./user/inputRestartNumber";

class App {
  /**
   * 숫자 야구 게임 플레이
   * 게임 재시작 여부 중 게임 종료의 2를 반환받을 때까지 반복
   */
  async play() {
    MissionUtils.Console.print(messageGameStart);

    while (true) {
      const computer = generateRandomNumbers();
      const gameResult = await this.playGame(computer);

      if (gameResult === "2") {
        MissionUtils.Console.print(messageGameEnd);
        break;
      }
    }
  }

  /**
   * 3스트라이크가 나올 때까지 숫자 야구 게임 반복
   * 3스트라이크가 나올 시, 게임 재시작 여부 확인
   * @param {number} 컴퓨터의 랜덤 숫자
   * @returns 게임재시작 여부 입력 숫자 반환
   */
  async playGame(computer) {
    while (true) {
      const userGuess = await getUserGuess();
      const result = this.checkGuess(computer, userGuess);

      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print(messageAllStrike);
        break;
      }
    }

    const replay = await askForReplay();
    checkForReplay(replay);
    return replay;
  }

  /**
   * @param {number} computer 컴퓨터 무작위 숫자 3자리 수
   * @param {number} userGuess 사용자 입력 숫자 3자리 수
   * @returns 컴퓨터 숫자와 사용자 숫자를 비교하여 게임 결과 반환
   */
  checkGuess(computer, userGuess) {
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
      if (computer[i] === userGuess[i]) {
        strikes++;
      } else if (computer.includes(userGuess[i])) {
        balls++;
      }
    }
    if (strikes === 0 && balls === 0) {
      return "낫싱";
    }
    return `${balls > 0 ? balls + "볼 " : ""}${strikes > 0 ? strikes + "스트라이크" : ""}`;
  }
}

export default App;
