import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 랜덤 값 생성하기
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    const random = computer.join('');

    // 시작 문구 출력
    Console.print('숫자 야구 게임을 시작합니다.');

    while (1) {
      // 사용자 입력 받아서 출력해보기
      const userRandom = await Console.readLineAsync('숫자를 입력해주세요 : ');
      Console.print(userRandom);
    }
  }
}

export default App;
