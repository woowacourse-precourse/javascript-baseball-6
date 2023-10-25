import { MissionUtils } from "@woowacourse/mission-utils"; //@woowacourse/mission-utils 모듈에서 MissionUtils 값을 호출

export default class App {
  constructor() {
    this.computerNumbers = [];
    this.shouldRun = true;
    this.attempts = 0;
  }

  generateRandomNumbers() { // 사용자가 입력한 값과 비교를 수행하기 위한 기준값 computerNumber를 3자리 수로 생성
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  getGameResult(computerNumbers, userNumbers) { // 게임에 사용될 strikes와 balls변수를 생성하고 결과를 반환하는 구문
    // 231025 수정 메소드에 userNumbers만 매개변수로 지정한 뒤 computerNumbers는 this 선택자로 호출하였으나, 해당 부분이 npm test 시 오류를 반환하는 것으로 예상되어 computerNumbers라는 매개변수를 추가하여 this 사용 X
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < computerNumbers.length; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        strikes++;
      } else if (computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes === 3) {
      return '3스트라이크\n축하합니다. 3자리 모두 맞히셨습니다. 게임 종료'; // 231025 기능 요구 사항 예시처럼 수정
    } else {
      let result = "";
      if (balls > 0) {
        result += `${balls}볼 `;
      }
      if (strikes > 0) {
        result += `${strikes}스트라이크`;
      }
      return result.trim();
    }
  }


  async startNewGame() { // 플레이 할 게임의 로직을 구성하는 부분
    this.shouldRun = true;
    this.attempts = 0;
    this.generateRandomNumbers(); // generateRandomNumbers 함수를 먼저 호출합니다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (this.shouldRun) {
      try {
        this.attempts++;
        const userInput = await MissionUtils.Console.readLineAsync(
          "서로 다른 3자리의 숫자를 입력하거나 게임을 재시작하려면 1, 종료하려면 2을 입력하세요: "
        );
        const userNumbers = userInput.trim().split("").map((num) => parseInt(num));

        if (userInput === "1") {
          MissionUtils.Console.print("게임을 재시작합니다.");
          this.attempts = 0;
          this.generateRandomNumbers(); // 재시작 시에도 generateRandomNumbers 함수를 호출합니다.
          continue;
        }

        if (userInput === "2") {
          MissionUtils.Console.print("게임 종료");
          this.shouldRun = false;
        } else if (userNumbers.length == 3 && userNumbers.some((num, index) => userNumbers.indexOf(num) !== index)
          && userNumbers.every(num => !isNaN(num))) { // 3자리는 입력하였으나 입력값에 중복이 있는지를 검사
          throw new Error("[ERROR] 잘못된 값을 입력하였습니다. 서로 다른 3자리의 숫자를 입력하세요.");
        } else if (userNumbers.length > 3 && userNumbers.every(num => !isNaN(num))) { // 입력된 값이 3자리를 초과할 경우
          throw new Error("[ERROR] 입력된 값이 3자리를 넘었습니다.");
        } else if (userNumbers.length < 3 && userNumbers.every(num => !isNaN(num))) { // 입력된 값이 3자리 미만일 경우
          throw new Error("[ERROR] 숫자 3자리를 입력하세요.");
        } else if (userNumbers.some(num => isNaN(num))) {
          throw new Error('[ERROR] 숫자만 입력하세요')

        } else {
          const result = this.getGameResult(this.computerNumbers, userNumbers); // computerNumbers 배열을 전달합니다.
          MissionUtils.Console.print(result);

          // if (result.includes("축하합니다")) {
          //   this.shouldRun = false;
          // }
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }


  async play() { // startNewGame()을 play하여 App 클래스가 정상적으로 만들어질 수 있도록 구현
    await this.startNewGame();
  }
}

const baseballGame = new App(); // 생성한 App클래스를 play할 수 있도록 구현
baseballGame.play();
