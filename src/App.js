import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = this.setComputerNumbers();
    this.attempts = 0;
  }

  setComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");  // 사용자 값 입력
      if (!this.checkInput(userInput)) {  // 조건에 만족하지 않는 수 입력
        MissionUtils.Console.print("올바른 숫자를 입력해주세요.");
        continue;
      }

      this.attempts++;
      const result = this.countResult(userInput);
      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");  // 게임 재시작 여부
        if (restart.trim() === '1') {  // 새로 시작
          this.computerNumbers = this.setComputerNumbers();  // 난수 재생성
          this.attempts = 0;  // attempts 초기화
          MissionUtils.Console.print("게임을 다시 시작합니다.");
        } else {  // 종료
          MissionUtils.Console.print("게임을 종료합니다.");
          break;
        }
      }
    }
  }

  // 입력이 1부터 9까지의 세 자릿수로 이루어진 문자열인지를 확인 -> 필요한가?
  checkInput(input) {
    return /^[1-9]{3}$/.test(input);
  }

  countResult(userInput) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userInput[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return "3스트라이크";
    } else if (strikes > 0 || balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else {
      return "낫싱";
    }
  }
}

const app = new App();
app.play();
