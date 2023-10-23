import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  // 램덤 숫자 생성
  createRamdomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  // 유효한 숫자인지 확인
  isValidInput(guess) {
    if (/^\d{3}$/.test(guess)) {
      const uniqueDigits = new Set(guess);
      if (uniqueDigits.size === 3) {
        return true;
      }
    }
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  async play() {}
}

export default App;
