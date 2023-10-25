import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  constructor() {
    this.computer = this.generateRandomNumbers();
    this.ISGAMERUNNING = true;
  }

  async play() {
    //console.log('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (this.ISGAMERUNNING) {
      try {
        const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        if (!this.isValidInput(userInput)) {
          this.ISGAMERUNNING = false; // 게임을 종료하도록 플래그를 설정
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        const [strike, ball] = this.getScore(userInput);
        if (strike === 3) {
          MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          if (restart === '1') {
            this.resetGame();
          } else if (restart === '2') {
            this.ISGAMERUNNING = false; // 게임 완전 종료
          }
        } else if (ball === 0 && strike === 0) {
          MissionUtils.Console.print('낫싱');
        } else {
          MissionUtils.Console.print(`${ball ? ball + '볼 ' : ''}${strike ? strike + '스트라이크' : ''}`.trim());
        }
      } catch (error) {
        this.ISGAMERUNNING = false;
        throw error; // 예외를 다시 던짐
      }
    }
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  isValidInput(input) {
    if (input.length !== 3) return false;
    const digits = new Set(input.split(''));
    return digits.size === 3 && [...digits].every(digit => digit >= '1' && digit <= '9');
  }

  getScore(userInput) {
    const userNumbers = userInput.split('').map(Number);
    let strike = 0, ball = 0;

    userNumbers.forEach((number, idx) => {
      if (this.computer.includes(number)) {
        if (this.computer[idx] === number) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    });

    return [strike, ball];
  }

  async resetGame() {
    this.computer = this.generateRandomNumbers();
    this.ISGAMERUNNING = true;
    try {
      await this.play(); // 비동기 실행을 기다림
    } catch (error) {
      // console.error('게임 재시작 중 에러 발생:', error.message);
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
