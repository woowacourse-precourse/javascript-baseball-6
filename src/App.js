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
    return computer.join(''); // computer 배열을 반환
  }

  // 유효한 숫자인지 확인하는 함수
  isValidInput(guess) {
    // if (/^\d{3}$/.test(guess)) {
    //   const uniqueDigits = new Set(guess);
    //   if (!uniqueDigits.size === 3) {
    //     throw '[error]';
    //   }
    // }
    // // MissionUtils.Console.print('[ERROR]');
    // // throw '[error]';
    // return true;
    // if (!/^\d+$/.test(guess) || new Set(guess).size !== 3) {
    //   MissionUtils.Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
    //   // throw 'Invalid Input';
    //   throw new Error('error');
    // }

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
        // const guess =
        //   await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        // MissionUtils.Console.print('숫자를 입력해주세요:'); // 사용자 입력 안내 메시지
        const guess = await MissionUtils.Console.readLineAsync();
        // MissionUtils.Console.print(`${guess} ${answer}`); // 사용자가 입력한 숫자 출력

        // try {
        //   this.isValidInput(guess);
        // } catch (error) {
        //   // return;
        //   throw new Error('[ERROR]');
        // }

        if (!this.isValidInput(guess)) {
          throw new Error('[ERROR]');
          // MissionUtils.Console.print('[ERROR]');
          return;
        }

        const result = this.checkBallsAndStrikes(guess, answer);

        MissionUtils.Console.print(result);

        if (result === '3스트라이크') {
          // MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');
          playAgain = await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
          );
          if (playAgain === '2') {
            MissionUtils.Console.print('게임 종료');
            return;
          } else if (playAgain === '1') {
            answer = this.createRandomNumber();
          }
        }

        // if (result.strikes === 3) {
        //   MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');
        //   playAgain = await MissionUtils.Console.readLineAsync(
        //     '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        //   );
        //   if (playAgain === '2') {
        //     MissionUtils.Console.print('게임 종료');
        //     return;
        //   }
        // }
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
