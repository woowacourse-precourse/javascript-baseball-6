
import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.targetNumbers = computer;
  }

  async play() {
    while (true) {
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      const guess = input.trim().split('').map(Number);

      // 예외 처리: 1에서 9까지 서로 다른 숫자 3개를 입력하지 않은 경우
      if (guess.length !== 3) {
        throw new Error("[ERROR] 1에서 9까지 서로 다른 숫자 3개를 입력해야 합니다.");
      }

      const result = this.checkGuess(guess);
      const [strikes, balls, outs] = this.countStrikesAndBalls(result);

      if (strikes === 3) {
        MissionUtils.Console.print('3스트라이크');
        //MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return;
      } else if (outs === 3) {
        MissionUtils.Console.print('낫싱');
      } else {
        MissionUtils.Console.print(`${balls > 0 ? `${balls}볼` : ''} ${strikes > 0 ? `${strikes}스트라이크` : ''}`);
      }
    }
  }

  checkGuess(guess) {
    const result = [];
    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.targetNumbers[i]) {
        result.push('스트라이크');
      } else if (this.targetNumbers.includes(guess[i])) {
        result.push('볼');
      } else {
        result.push('아웃');
      }
    }
    return result;
  }

  countStrikesAndBalls(result) {
    let strikes = 0;
    let balls = 0;
    let outs = 0;
    result.forEach((item) => {
      if (item === '스트라이크') {
        strikes++;
      } else if (item === '볼') {
        balls++;
      } else if (item === '아웃') {
        outs++;
      }
    });
    return [strikes, balls, outs];
  }
}

class App {
  constructor() {
    this.computer = new Computer();
  }

  async restartGame() {
    //MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');
    const input = await MissionUtils.Console.readLineAsync();
    const inputTrim = input.trim();
    // 예외 처리
    if (inputTrim === '1') {
      this.computer.generateRandomNumbers();
      return true;
    } else if (inputTrim === '2') {
      MissionUtils.Console.print('게임 종료');
      return false;
    } else {
      throw new Error("[ERROR]");
    }
  }

  async play() {
    //MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let isPlaying = true;

    while (isPlaying) {
      await this.computer.play().then(async () => {
        isPlaying = await this.restartGame();
      });
    }
  }
}

export default App;
