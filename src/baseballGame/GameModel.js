import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_TEXT } from "../Message";

class GameModel {
  constructor() {
    this.GAME_OVER = false;
    this.COMPUTER = [];
  }

  // 게임 초기 셋팅
  startNewGame() {
    this.GAME_OVER = false;
    this.COMPUTER = this.generateRandomNumber();
  }

  // Set을 사용하는 경우
  generateRandomNumber() {
    const randomNumbers = new Set();
    while (randomNumbers.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(number);
    }
    return Array.from(randomNumbers);
  }

  // 결과 계산
  calculateResult(userInput) {
    const RESULT = { STRIKES: 0, BALLS: 0 };

    // 3개의 숫자로 이루어진 게임으로 3번 순환하며 비교
    for (let i = 0; i < 3; i++) {
      if (this.COMPUTER[i] === userInput[i]) {
        // 숫자와 자리 모두 일치하면 STRIKE에 1추가
        RESULT.STRIKES += 1;
      } else if (this.COMPUTER.includes(userInput[i])) {
        // 일치하는 숫자가 존제하면 BALL에 1추가
        RESULT.BALLS += 1;
      }
    }

    if (RESULT.STRIKES === 3) {
      this.GAME_OVER = true;
    }

    return this.formatGameResultMessage(RESULT);
  }

  // 게임 결과 표시
  formatGameResultMessage(result) {
    // 변수 선언
    let resultMessage = "";
    // 3스트라이크인경우 게임 종료
    if (result.STRIKES === 3) {
      this.GAME_OVER = true;
    }
    if (result.STRIKES === 0 && result.BALLS === 0) {
      // 하나도 일치하지 않는경우 "낫싱" 출력
      resultMessage = GAME_TEXT.NOTHING;
    } else {
      // 스트라이크와 볼이 몇개인지 출력
      resultMessage = `${result.BALLS > 0 ? result.BALLS + "볼" : ""} ${
        result.STRIKES > 0 ? result.STRIKES + "스트라이크" : ""
      }`;
    }
    // 게임 메시지 출력
    return resultMessage;
  }
}

export default GameModel;
