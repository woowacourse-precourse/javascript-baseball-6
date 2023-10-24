import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let computerNumbers = this.generateComputerNumbers();

    while (true) {
      MissionUtils.Console.print("숫자를 입력해주세요 : ");
      const userGuess = await MissionUtils.Console.readLineAsync();
      MissionUtils.Console.print(userGuess);

      if (this.isValidInput(userGuess)) {
        const result = this.calculateResult(userGuess, computerNumbers);
        MissionUtils.Console.print(result);

        if (result === "3스트라이크") {
          MissionUtils.Console.print(
            `3개의 숫자를 모두 맞히셨습니다! 게임 종료`
          );
          MissionUtils.Console.print(
            "정답 = " + computerNumbers + " 입력 한 값 = " + userGuess
          );
          break;
        }
      } else {
        throw new Error("[ERROR] 유효하지 않은 입력입니다.");
      }
    }

    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const choice = await MissionUtils.ㅈ;
    MissionUtils.Console.print(choice);

    if (choice === "1") {
      this.play(); // 게임 재시작
    } else if (choice === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
      process.exit(0); // 프로그램 종료
    } else {
      throw new Error("[ERROR] 잘못된 선택입니다.");
    }
  }

  generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  isValidInput(input) {
    // 입력값의 길이가 3인지 확인
    if (input.length !== 3) {
      return false;
    }

    // 입력값이 숫자인지 확인
    if (isNaN(input)) {
      return false;
    }

    // 입력값의 각 자리 수가 1에서 9까지인지 확인
    const digits = input.split("").map(Number);
    const validDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return digits.every((digit) => validDigits.includes(digit));
  }

  calculateResult(userGuess, computerNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userGuess.length; i++) {
      if (userGuess[i] === computerNumbers[i]) {
        strike++;
      } else if (computerNumbers.includes(userGuess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return "3스트라이크";
    } else if (strike > 0 || ball > 0) {
      return `${ball > 0 ? `${ball}볼 ` : ""}${
        strike > 0 ? `${strike}스트라이크` : ""
      }`;
    } else {
      return "낫싱";
    }
  }
}

export default App;
