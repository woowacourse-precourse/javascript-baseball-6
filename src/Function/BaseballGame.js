import Message from "../View/Message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  constructor() {}

  // 사용자가 맞출 상대방(컴퓨터)의 수를 생성
  static createRandomNumber() {
    let numbers = new Set();

    // 중복되지 않는 1~9로 이루어진 3자리 수를 생성
    while (numbers.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.has(randomNumber)) {
        numbers = add(randomNumber);
      }
    }
    return [...numbers];
  }

  // 사용자가 입력한 수가 정상적인 수인지 확인
  static checkRightNumber(userNumber) {
    const number = String(userNumber)
      .split("")
      .map(n => parseInt(n, 10));

    // 에러 확인
    if (!number.every(() => isNaN)) { // 숫자를 입력했는가?
      throw new Error(Message.ERROR_NAN);
    } else if (!number.every(n => /[1-9]/.test(n))) { // 0을 제외한 1~9사이 숫자를 입력했는가?
      throw new Error(Message.ERROR_RANGE);
    } else if (number.length !== 3) { // 3자리 숫자를 입력했는가?
      throw new Error(Message.ERROR_LENGTH);
    } else if (new Set(number).size !== 3) { // 중복되는 숫자는 없었는가?
      throw new Error(Message.ERROR_DUPLICATE);
    }

    return true;
  }

  // 사용자가 입력한 수와 컴퓨터의 수를 비교하여 결과 출력
  static compareNumber(userNumber, computerNumber) {
    const userNumberArray = String(userNumber)
    .split("")
    .map(n => parseInt(n, 10));

    const computerNumberArray = String(computerNumber)
    .split("")
    .map(n => parseInt(n, 10));

    // 게임 결과를 담을 변수
    let ball = 0;
    let strike = 0;
    let gameResult = "";

    for (let i = 0; i < 3; i++) {
      if (userNumberArray[i] === computerNumberArray[i]) {
        strike += 1;
      } else if (computerNumberArray.includes(userNumberArray[i])) {
        ball += 1;
      }
    }

    if (ball > 0) {
      gameResult += `${ball}볼 `;
    }

    if (strike > 0) {
      gameResult += `${strike}스트라이크`;
    }

    if (ball === 0 && strike === 0) {
      gameResult = '낫싱';
    }
  }
};

export default BaseballGame;
