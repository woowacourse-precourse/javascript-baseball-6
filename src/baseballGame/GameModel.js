import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../Message";

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

  // 랜덤숫자 생성함수
  // array를 사용하는경우
  // generateRandomNumber() {
  //   const randomNumbers = new Array();
  //   while (randomNumbers.length < 3) {
  //     const number = MissionUtils.Random.pickNumberInRange(1, 9);
  //     if (!randomNumbers.includes(number)) {
  //       randomNumbers.push(number);
  //     }
  //   }
  //   return randomNumbers;
  // }

  // Set을 사용하는 경우
  generateRandomNumber() {
    const randomNumbers = new Set();
    while (randomNumbers.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(number);
    }
    return Array.from(randomNumbers);
  }

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

    return RESULT;
  }

  // 중복검사 함수
  inputValidator(userInput) {
    // 중복검사를위한 객체 생성
    const isDuple = new Set(userInput).size;

    if (userInput.length !== 3) {
      // 인풋의 길이가 3이상이면 LENTH_ERROR 반환
      throw new Error(ERROR_MESSAGE.LENTH_ERROR);
    } else if (isDuple !== 3) {
      // isDuple의 size가 3이 아니면 중복된 값이 있었기 때문에 DUPLE_ERROR 반환
      throw new Error(ERROR_MESSAGE.DUPLE_ERROR);
    } else if (/\D/.test(userInput)) {
      // 인풋값을 정수로 파싱후 Number.isInterger을사용해 정수인지 확인하여 false면 TYPE_ERROR 반환
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }
}

export default GameModel;
