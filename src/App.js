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

    // 예외 처리 할때 try/catch 를 loop 안에 넣지 말고 try/catch 안에 loop문 넣기
    try {
      while (true) {
        // 함수 이름에 'Async'가 붙어있으니 async 함수인 것을 힌트로 변수를 저장한다.
        const result = await Console.readLineAsync('숫자를 입력해주세요 : ');

        const numberTest = /^[1-9]{3}$/g;
        // 예외 처리
        if (!result.test(numberMatch)) {
        }
        /**
         * 힌트
         * 1. 같은 수가 같은 자리에 있으면 스트라이크
         * 2. 다른 자리에 있으면 볼
         * 3. 같은 수가 전혀 없으면 낫싱
         */
        let strike = 0;
        let ball = 0;

        // 일단 기능 구현부터하고 코드컨벤션은 리팩토링하기
        for (let i = 0; i < problem.length; i++) {
          if (problem[i] === Number(result[i])) strike++;
          else {
            if (problem.includes(Number(result[i]))) ball++;
          }
        }

        if (strike === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        } else {
          let hint = '';
          if (ball === 0 && strike === 0) {
            hint = '낫싱';
          } else {
            if (ball > 0) {
              hint += `${ball}볼`;
            }
            if (strike > 0) {
              hint += `${strike}스트라이크`;
            }
          }
          Console.print(hint);
        }
      }
    } catch (error) {}
  }
  startGame(answer) {}
}

export default App;

const app = new App();
app.play();
