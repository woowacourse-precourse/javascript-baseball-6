import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerNum = this.pickNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    const INPUT_VALID = /^[1-9]{3}$/; // 1에서 9까지의 숫자 3자리 검사하는 정규식
    let INPUT;

    try {
      INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');

      if (!INPUT_VALID.test(INPUT)) {
        if (INPUT.includes(' ')) {
          // 3자리 숫자를 입력했지만 공백이 포함된 경우 error
          throw new Error('[ERROR] 띄어쓰기(공백) 없이 입력해주세요.');
        } else {
          throw new Error('[ERROR] 1부터 9까지의 서로 다른 3자리 숫자를 입력해주세요.');
        }
      }
      // 3자리 수를 입력해서 검사를 통과했지만 중복된 수가 있는 경우
      if ([...new Set(INPUT)].length !== 3) {
        throw new Error('[ERROR] 중복되지 않은 서로 다른 3자리 숫자를 입력해주세요.');
      }

      return this.getHint(this.computerNum, INPUT);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  pickNumber() {
    const answerArr = [];
    while (answerArr.length < 3) {
      const pickNumber = Random.pickNumberInRange(1, 9); // 1~9까지의 숫자 1개 반환
      if (!answerArr.includes(pickNumber)) {
        // 랜덤 선택된 숫자가 이미 선택된 숫자와 중복되지 않는다면, 선택
        answerArr.push(pickNumber);
      }
    }
    const answer = answerArr.join(''); // 배열의 원소를 문자열로 ex) 123

    return answer;
  }

  getHint(keyNums, playerNums) {
    let strikes = 0;
    let balls = 0;

    for (let n = 0; n < 3; n += 1) {
      if (Number(keyNums[n]) === Number(playerNums[n])) {
        strikes += 1;
      }

      if (
        Number(keyNums[n]) !== Number(playerNums[n]) &&
        keyNums.includes(Number(playerNums[n]))
      ) {
        balls += 1;
      }
    }

    if (strikes === 3) {
      Console.print('3스트라이크');
      return this.correctAnswer();
    }

    Console.print(this.printHint(balls, strikes));

    return this.play();
  }

  printHint(balls, strikes) {
    if (balls && strikes) return `${balls}볼 ${strikes}스트라이크`;
    if (balls) return `${balls}볼`;
    if (strikes) return `${strikes}스트라이크`;

    return '낫싱';
  }

  async correctAnswer() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    try {
      const selectNum = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (selectNum === '1') {
        return this.restartGame();
      }
      if (selectNum === '2') {
        return;
      } else {
        throw new Error('[ERROR] 1 또는 2를 입력해야 합니다.');
      }
    } catch (error) {
      Console.print(error.message);
    }
  }

  restartGame() {
    this.computerNum = this.pickNumber();
    this.play();
  }
}

const app = new App();
app.play();

export default App;