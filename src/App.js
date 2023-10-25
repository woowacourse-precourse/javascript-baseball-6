import { MissionUtils, Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  Start: '숫자 야구 게임을 시작합니다.',
};
class App {
  async play() {
    Console.print(MESSAGE.Start);
  }
}

export default App;
