import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

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
}

const app = new App();
app.play();

export default App;
