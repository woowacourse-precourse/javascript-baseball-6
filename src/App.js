import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    let restartGame = true;

    if (restartGame) {
      restartGame = await this.playGame(); // 게임 재시작 여부를 확인
    }
  }

  async playGame() {
    // 컴퓨터가 선택한 임의의 숫자 3개 생성
    const computerNumbers = this.generateRandomNumbers();

    let gameEnd = false;

    while (!gameEnd) {
      if (gameEnd) {
        break; // 게임 종료 조건 충족 시 게임 종료
      }
      // 사용자로부터 3자리 숫자 입력 받기
      const userGuess = await this.getUserInput();

      // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산
      const result = this.calculateResult(userGuess, computerNumbers);

      this.printResult(result); // 결과 출력

      if (result.strikes === 3) { // 게임 종료 조건 확인
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        gameEnd = true;
      }
    }

    // 게임 재시작 여부 확인
    return await this.askForRestart();
  }

  generateRandomNumbers() {
    // 1에서 9까지 서로 다른 임의의 수 3개 선택
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async getUserInput() {
    // "숫자를 입력해주세요" 출력 후 사용자로부터 3자리 숫자 입력 받기
    console.log("숫자를 입력해주세요");

    return await MissionUtils.Console.readLineAsync();
  }

  calculateResult(userGuess, computerNumbers) {
    // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산
    const userDigits = userGuess.split('').map(Number);
    const computerDigits = computerNumbers.map(Number);

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userDigits[i] === computerDigits[i]) {
        strikes++; // 스트라이크인 경우
      } else if (computerDigits.includes(userDigits[i])) {
        balls++; // 볼인 경우
      }
    }
    return { strikes, balls }; // 낫싱인 경우는 별도로 계산할 필요 없음
  }

  printResult(result) {
    // 결과 출력
    if (result.strikes === 0 && result.balls === 0) {
      console.log("낫싱");
    } else {
      let message = "";

      if (result.strikes > 0) {
        message += `${result.strikes}스트라이크`;
      }

      if (result.balls > 0) {
        if (message !== "") {
          message += " ";
        }
        message += `${result.balls}볼`;
      }

      MissionUtils.Console.print(message);
    }
  }

  async askForRestart() { // 게임을 다시 시작할지 종료할지 선택하는 옵션 제공
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    
    async function getRestartOption() {
      return new Promise(async (resolve) => {
        const input = await MissionUtils.Console.readLineAsync();
        if (input === '1') {
          resolve(true);
        } else if (input === '2') {
          resolve(false);
        } else {
          console.log("올바른 옵션을 선택하세요 (1: 재시작, 2: 종료)");
          resolve(await getRestartOption());
        }
      });
    }

    return await getRestartOption();
  }
}

export default App;
