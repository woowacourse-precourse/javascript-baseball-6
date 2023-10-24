import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  // 램덤 숫자 생성하는 함수
  createRandomNumber() {
    const RANDOM_NUMBER = [];
    while (RANDOM_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RANDOM_NUMBER.includes(NUMBER)) {
        RANDOM_NUMBER.push(NUMBER);
      }
    }
    return RANDOM_NUMBER.join('');
  }

  // 유효한 숫자인지 확인하는 함수
  isValidInput(guess) {
    if (guess.length !== 3) {
      return false;
    }
    if (new Set(guess).size !== 3) {
      return false;
    }
    if (Number.isNaN(Number(guess))) {
      return false;
    }
    if (guess.includes(0)) {
      return false;
    }
    return true;
  }

  async play() {
    // 1로 초기화
    let playAgain = 1;

    // MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (playAgain === 1) {
      let answer = this.createRandomNumber();

      while (true) {
        // MissionUtils.Console.print('숫자를 입력해주세요:'); // 사용자 입력 안내 메시지
        const GUESS = await MissionUtils.Console.readLineAsync();

        if (!this.isValidInput(GUESS)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        const RESULT = this.checkBallsAndStrikes(GUESS, answer);

        MissionUtils.Console.print(RESULT);

        if (RESULT === '3스트라이크') {
          // MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');
          playAgain = await MissionUtils.Console.readLineAsync();
          if (playAgain === '2') {
            MissionUtils.Console.print('게임 종료');
            return;
          } else if (playAgain === '1') {
            answer = this.createRandomNumber();
          }
        }
      }
    }
  }

  // 볼인지 스트라이크인지 확인하는 함수
  checkBallsAndStrikes(guess, answer) {
    let balls = 0;
    let strikes = 0;
    let result = '';

    for (let i = 0; i < 3; i++) {
      if (guess[i] === answer[i]) {
        strikes++;
      } else if (answer.includes(guess[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      result = '3스트라이크';
    } else if (strikes > 0 && balls > 0) {
      result = `${balls}볼 ${strikes}스트라이크`;
    } else if (strikes > 0) {
      result = `${strikes}스트라이크`;
    } else if (balls > 0) {
      result = `${balls}볼`;
    } else {
      result = '낫싱';
    }

    return result;
  }
}

export default App;
