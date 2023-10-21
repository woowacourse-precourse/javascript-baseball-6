import { Console } from '@woowacourse/mission-utils';

import RandomNumber from '../core/RandomNumber.js';

class App {
  #basketball;
  #exception;

  constructor() {
    this.#basketball;
    this.#exception;
  }

  // 주어진 문자열을 출력하는 기능
  print(message) {
    Console.print(message);
  }

  end() {
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.enterValue(RandomNumber.createNumber());
  }

  async enterValue(random) {
    try {
      const userFeedback = await Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      // userFeedback에 따라 에러 발생하는 로직 (true면 error 발생)
      // baseball 객체에게 값을 받아야함. 경기 상황을 받아와야함. 그럴려면 랜덤값과 입력값을 전달해야함.(여기로 왔다는 건 랜덤값, 입력값을 보장받은 상태)

      // 만약에 3스트라이크면 게임의 종료와 재시작을 알리는 기능 - Console API를 사용해야함(여기서 함수를 실행하면 콜스택에 함수가 또 올라갈텐데 enterValue 함수의 종료는 어떻게 처리하지?)
      // async의 재귀는 어떻게 구현하지? 기저조건은?
    } catch (error) {
      console.error('[ERROR]', error);
    }
  }
}

const app = new App();
app.play();
export default App;
