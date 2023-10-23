import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  // 램덤 숫자 생성하는 함수
  createRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer; // computer 배열을 반환
  }

  // 유효한 숫자인지 확인하는 함수
  isValidInput(guess) {
    if (/^\d{3}$/.test(guess)) {
      const uniqueDigits = new Set(guess);
      if (uniqueDigits.size === 3) {
        return true;
      }
    }
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  async play() {
    // 1로 초기화
    let playAgain = 1;

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (playAgain === 1) {
      // 랜덤으로 생성한 정답
      const answer = this.createRandomNumber();

      while (true) {
        // 사용자가 입력해서 추측하는 숫자
        const guess =
          await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        // guess의 형식 체크
        this.isValidInput(guess);

        const result = this.checkBallsAndStrikes(guess, answer);

        if (result.strikes === 3) {
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');

          playAgain = await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
          );

          if (playAgain === 2) {
            MissionUtils.Console.print('게임 종료');
            return;
          }
        }
      }
    }
  }

  // 볼인지 스트라이크인지 확인하는 함수
  checkBallsAndStrikes(guess, answer) {
    let balls = 0;
    let strikes = 0;
    for (let i = 0; i < 3; i++) {
      if (guess[i] === answer[i]) {
        strikes++;
      } else if (answer.includes(guess[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return '3스트라이크';
    } else if (strikes > 0 && balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else if (strikes === 0 && balls > 0) {
      return `${balls}볼`;
    } else if (strikes > 0 && balls === 0) {
      return `${strikes}스트라이크`;
    } else {
      return '낫싱';
    }
  }
}

export default App;
