import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {}

  // 랜덤한 숫자 3개를 생성
  createAnswerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  }
}

export default App;
