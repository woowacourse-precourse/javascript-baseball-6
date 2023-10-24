import { Console } from '@woowacourse/mission-utils';
import printMsg from '../utils/printMsg';
import BaseBallGame from './baseBallGame';

class App {
  constructor() {
    this.methods = BaseBallGame;
    this.isPlaying = false;
  }

  async play() {
    let computer = this.methods.getRandomArray(); // 사용자가 맞추어야 할 숫자
    this.isPlaying = true; // 게임 시작
    printMsg('숫자 야구 게임을 시작합니다.');

    // 종료될 때까지 계속 반복
    while (this.isPlaying) {
      const inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');

      // 입력이 유효한 경우에만
      if (this.methods.checkValidInput(inputNumber)) {
        const ballAndStrikeCount = this.methods.getBallAndStrikeCount(
          computer,
          inputNumber,
        );
        this.methods.printHint(ballAndStrikeCount);

        // 3스트라이크라면 게임 종료 -> 재시작 여부를 물어봄
        if (ballAndStrikeCount.strike === 3) {
          let answer;
          while (answer !== '1' && answer !== '2') {
            answer = await Console.readLineAsync(
              '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n',
            );
            if (answer === '1') {
              computer = this.methods.getRandomArray();
              this.isPlaying = true;
            } else if (answer === '2') {
              printMsg('게임 종료');
              this.isPlaying = false;
            }
          }
        }
      }
    }
  }
}

export default App;
