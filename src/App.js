import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let restartGame = true;

    while (restartGame) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      restartGame = await this.playGame(); // 게임 재시작 여부를 확인
    }
    MissionUtils.Console.print("게임 종료");
  }

  async playGame() {
    // 컴퓨터가 선택한 임의의 숫자 3개 생성
    const computerNumbers = this.randomNumbers();
    let gameEnd = false;

    while (!gameEnd) {
      const userEnter = await this.userInput(); // 사용자로부터 3자리 숫자 입력 받기
      const result = this.calculateResult(userEnter, computerNumbers); // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산

      this.printResult(result); // 결과 출력

      if (result.strikes === 3) { // 게임 종료 조건 확인
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        gameEnd = true;
      }
    }
    return await this.askForRestart(); // 게임 재시작 여부 확인
  }

  randomNumbers() {
    const computer = []; // 1에서 9까지 서로 다른 임의의 수 3개 선택

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async userInput() {
    // "숫자를 입력해주세요" 출력 후 사용자로부터 3자리 숫자 입력 받기
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");

    if (!input || input.length !== 3 || !/^\d+$/.test(input)) {
      throw new Error("[ERROR]"); // 에러 발생
    }
    const inputDigits = input.split('').map(Number);

    // 입력값이 중복일때 확인
    if (inputDigits.length !== new Set(inputDigits).size) {
      throw new Error("[ERROR]"); // 에러 발생
    }

    return input;
  }

  calculateResult(userEnter, computerNumbers) {
    // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산
    const userDigits = userEnter.split('').map(Number);
    const computerDigits = computerNumbers.map(Number);

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userDigits[i] === computerDigits[i]) { // 같은 숫자가 같은 자릿수에 있다면
        strikes++; // 스트라이크인 경우
      } else if (computerDigits.includes(userDigits[i])) { // 선택한 숫자 중에 포함되어 있는지 확인
        balls++; // 볼인 경우
      }
    }
    return { strikes, balls }; // 낫싱인 경우는 별도로 계산할 필요 없음
  }

  printResult(result) {
    let message = "";
    if (result.strikes === 0 && result.balls === 0) {
      message = "낫싱";
    } else {
      if (result.balls > 0) {
        message += `${result.balls}볼 `;
      }
      if (result.strikes > 0) {
        message += `${result.strikes}스트라이크`;
      }
    }
    MissionUtils.Console.print(message);
  }

  async askForRestart() { // 게임을 다시 시작할지 종료할지 선택하는 옵션 제공
    while (true) {
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const input = await MissionUtils.Console.readLineAsync("");

      if (input === '1') {
        return true;
      } else if (input === '2') {
        return false;
      } else {
        MissionUtils.Console.print("올바른 옵션을 선택하세요 (1: 재시작, 2: 종료)");
      }
    }
  }
}

const app = new App();
app.play();

export default App;