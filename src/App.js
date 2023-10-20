import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.RANDOM_NUMBERS = [];
  }

  generateRandomNumbers() {
    while (this.RANDOM_NUMBERS.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.RANDOM_NUMBERS.includes(NUMBER)) {
        this.RANDOM_NUMBERS.push(NUMBER);
      }
    }
  }

  async play() {
    this.generateRandomNumbers();
  
    // 1. 생성된 무작위 숫자를 로그로 출력
    console.log("Generated Random Numbers:", this.RANDOM_NUMBERS);
  
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  
    while (true) {
      const USER_INPUT = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  
      // 2. 사용자 입력값을 로그로 출력
      console.log("User Input:", USER_INPUT);
  
      // 유효성 검사: 3자리 숫자가 아니면 예외 발생
      if (USER_INPUT.length !== 3 || isNaN(USER_INPUT) || new Set(USER_INPUT.split('')).size !== 3) {
        throw new Error("[ERROR]");
      }
  
      const RESULT = this.compareNumbers(USER_INPUT);
  
      // 3. compareNumbers의 결과를 로그로 출력
      console.log("Comparison Result:", RESULT);
  
      MissionUtils.Console.print(RESULT);
  
      // 3스트라이크면 게임 종료
      if (RESULT === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const RESTART = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        if (RESTART === '1') {
          this.RANDOM_NUMBERS = [];
          this.generateRandomNumbers();
          MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        } else if (RESTART === '2') {
          break;
        } else {
          throw new Error("[ERROR] 잘못된 입력입니다.");
        }
      }
    }
  }

  compareNumbers(USER_INPUT) {
    let STRIKES = 0;
    let BALLS = 0;

    for (let i = 0; i < 3; i++) {
      if (USER_INPUT[i] === String(this.RANDOM_NUMBERS[i])) {
        STRIKES++;
      } else if (this.RANDOM_NUMBERS.includes(Number(USER_INPUT[i]))) {
        BALLS++;
      }
    }

    const STRIKE_MESSAGE = STRIKES > 0 ? `${STRIKES}스트라이크` : '';
    const BALL_MESSAGE = BALLS > 0 ? `${BALLS}볼` : '';

    if (STRIKES === 0 && BALLS === 0) {
      return "낫싱";
    } else if (STRIKES === 3) {
      return "3스트라이크";
    } else {
      return [BALL_MESSAGE, STRIKE_MESSAGE].filter(Boolean).join(' ').trim();
    }
    }
}

export default App;
