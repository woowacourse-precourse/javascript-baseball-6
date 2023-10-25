import { Console } from "@woowacourse/mission-utils";
import Score from './utils/Score'
import getComputerNum from './utils/ComputerNum';
import getUserNum from './utils/UserNum';
import compareNum from './utils/CompareNum';

class App {
  constructor() {
    this.computerNum = [];
    this.isPlaying = true;
  }

  async play() {

    while (this.isPlaying) {
      this.computerNum = getComputerNum();
      Console.print('숫자 야구 게임을 시작합니다.');
      Score.scoreReset();

      while (Score.score.strike !== 3) { // 3스트라이크가 아닌 경우 비교 실행
        Score.scoreReset();
        const userNum = await getUserNum();
        await compareNum(this.computerNum, userNum);
      }

      Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
      const restart = await Console.readLineAsync();
      Console.print(restart)


      if (restart === '1') {
        this.isPlaying = true;
      } else if (restart === '2') {
        this.isPlaying = false;
      }
    }
  }
}

export default App;
