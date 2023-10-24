import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = this.setComputerNumbers();
    this.tryGame = 0;  // 사용자가 게임을 시도한 횟수
  }


  // 난수 생성
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


  // 숫자 찾기
  async play() {
    let userInput;
  
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  
    try {
      while (true) {
        userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
        this.checkInput(userInput);
        // 유효한 입력일 때의 코드 계속
        this.tryGame++;  // 시도 횟수 +1
        const result = this.countResult(userInput);  // 결과 확인
        MissionUtils.Console.print(result); 
  
        if (result === "3스트라이크") {
          MissionUtils.Console.print(`${this.tryGame} 번의 시도 끝에, 3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
          if (restart.trim() === '1') {
            this.computerNumbers = this.setComputerNumbers();
            this.attempts = 0;  // 재도전시 시도 횟수 초기화
            MissionUtils.Console.print("게임을 다시 시작합니다.");
          } else {
            MissionUtils.Console.print("게임을 종료합니다.");
            break; // 반복문을 종료하여 프로그램을 종료합니다.
          }
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  

  // 입력이 1부터 9까지의 세 자릿수로 이루어진 문자열인지를 확인
  checkInput(input) {
    if (/^[1-9]{3}$/.test(input)) {
      return true; // 유효한 입력
    } else {
      throw new Error("[Error] 올바른 숫자를 입력해주세요."); // 잘못된 입력일 경우 프로그램 종료
    }
  }
  

  // 결과(스트라이크, 볼, 낫싱)
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
