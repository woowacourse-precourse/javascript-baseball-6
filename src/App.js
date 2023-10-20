import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  createRandomNumber() {
    // 문제출제
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    const problem = this.createRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const result = await Console.readLineAsync('숫자를 입력해주세요 : ');

      const numberTest = /^[1-9]{3}$/g;
      // 예외 처리
      if (!numberTest.test(result) || [...new Set(result)].length !== 3) {
        throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
      }
      /**
       * 힌트
       * 1. 같은 수가 같은 자리에 있으면 스트라이크
       * 2. 다른 자리에 있으면 볼
       * 3. 같은 수가 전혀 없으면 낫싱
       */
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < problem.length; i++) {
        if (problem[i] === Number(result[i])) strike += 1;
        else {
          if (problem.includes(Number(result[i]))) ball += 1;
        }
      }

      if (strike === 3) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const input = await Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        );
        if ('1' === input) {
          this.play();
        }
        break;
      } else {
        let hint = '';
        if (ball === 0 && strike === 0) {
          hint = '낫싱';
        } else {
          if (ball > 0 && strike > 0) {
            hint += `${ball}볼 ${strike}스트라이크`;
          } else if (strike > 0) {
            hint += `${strike}스트라이크`;
          } else {
            hint += `${ball}볼`;
          }
        }
        Console.print(hint);
      }
    }
  }
  startGame(answer) {}
}

export default App;

const app = new App();
app.play();
