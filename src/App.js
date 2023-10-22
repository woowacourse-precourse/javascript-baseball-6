import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.constans.js';

class App {
  constructor() {
    this.matchNumber = 0; // 사용자가 맞추어야 할 숫자
  }

  /**
   * 시작 문구를 출력해주는 메서드
   */
  startPhrase() {
    console.log(MESSAGE.start);
  }

  /**
   * 사용자가 맞추어야 할 숫자를 세팅하는 메서드
   */
  setMatchNumber() {
    const computer = [];
    // 3자리 숫자를 세팅
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.matchNumber = computer.join('');
  }

  /**
   * 입력에 따라 힌트를 반환하는 메서드
   */
  inputToHint(number) {
    const matching = { ball: 0, strike: 0 };

    const matchingNumberArray = [...this.matchNumber];
    const inputNumberArray = [...String(number)];

    inputNumberArray.forEach((num, index) => {
      // 스트라이크인 경우
      if (
        matchingNumberArray.includes(num) &&
        matchingNumberArray.indexOf(num) === index
      ) {
        matching.strike += 1;
      }

      // 볼인 경우
      if (
        matchingNumberArray.includes(num) &&
        matchingNumberArray.indexOf(num) !== index
      ) {
        matching.ball += 1;
      }
    });

    // 같은 수가 전혀 없는 경우 -> 낫싱
    if (!matching.ball && !matching.strike) {
      console.log(MESSAGE.hint.nothing);
      return;
    }

    // 볼과 스트라이크 둘 다 있을 때 -> N볼 M스트라이크
    if (matching.ball && matching.strike) {
      console.log(
        `${matching.ball}${MESSAGE.hint.ball} ${matching.strike}${MESSAGE.hint.strike}`,
      );
      return;
    }

    // 볼만 있을 경우 -> N볼
    if (matching.ball && !matching.strike) {
      console.log(`${matching.ball}${MESSAGE.hint.ball}`);
      return;
    }

    // 스트라이크만 있을 경우 -> M볼
    if (matching.strike && !matching.ball) {
      console.log(`${matching.strike}${MESSAGE.hint.strike}`);
    }
  }

  readyGame() {
    this.startPhrase();
    this.setMatchNumber();
  }

  playingGame() {}

  async play() {
    this.readyGame();
    this.inputToHint(356); // 확인용
  }
}

export default App;
