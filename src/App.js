import { Console, MissionUtils, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    const computer = this.generateRandomNumber();
    console.log(`1번 조건 테스트: ${computer}`);
  }

  // 1. 컴퓨터가 1~9까지의 랜덤한 숫자 3개를 선택.
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

export default App;
