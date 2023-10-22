import {MissionUtils} from "@woowacourse/mission-utils";

/**
 * 컴퓨터는 0~9 사이의 서로 다른 임의의 수 3개를 선택한다.
 */
class Computer {
  constructor() {
    // Computer 클래스가 생성될 때 랜덤한 숫자를 생성한다.
    this.targetNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    // 중복되지 않은 랜덤한 3개의 숫자 배열
    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      // 중복되지 않는 숫자를 뽑기 위해 Array.prototype.includes 로 중복을 체크한다.
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    // 배열을 문자열로 변환하여 리턴
    return numbers.join('');
  }

  getStrikeAndBall(userInput) {
    const targetNumberList = this.targetNumber.split('');
    const userInputList = userInput.split('');

    // 컴퓨터가 생성한 숫자와 유저 입력값을 비교하여 스트라이크와 볼의 개수를 리턴
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < userInput.length; i++) {
      const userNumber = userInputList[i];
      const targetNumber = targetNumberList[i];
      if (userNumber === targetNumber) {
        strikeCount++;
      } else if (targetNumberList.includes(userNumber)) {
        ballCount++;
      }
    }
    return {strikeCount, ballCount};
  }
}

export default Computer;
