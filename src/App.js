import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
    try {
      await this.startGame();
    } catch (e) {
      throw new Error(`[ERROR] ${e}`);
    }
  }

  //컴퓨터 숫자 랜덤 생성
  getComputerInput() {
    let computer = [];
    while (computer.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  //사용자 숫자 입력받기 & 유효성 검사
  async getUserInput() {
    let userInput;
    try {
      userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      let validateInput = this.checkUserInput(userInput);
      if (!validateInput) {
        return;
      }
      return validateInput;
    } catch (e) {
      throw new Error(`[ERROR] ${e}`);
    }
  }

  //입력값 유효성 확인
  checkUserInput(input) {
    let checkLength = input.length;
    let checkIsNumber = isNaN(input);
    let checkDuplicated = new Set(input.split("")).size;

    //예외 처리
    if (checkIsNumber !== false) {
      throw new Error("[ERROR] 숫자의 형태로 입력하세요.");
    }
    if (checkLength !== 3) {
      throw new Error("[ERROR] 3자리 정수로 입력하세요.");
    }
    if (checkDuplicated < 3) {
      throw new Error("[ERROR] 숫자의 중복이 없도록 입력하세요.");
    }
    return input;
  }

  //사용자 입력받은 값 배열로 변환
  splitUserInput(num) {
    let numToString = num.toString();
    let numArray = numToString.split("").map(Number);
    return numArray;
  }

  //컴퓨터 랜덤숫자, 사용자 입력숫자 비교
  compareInput(computerInput, userInput) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput[i] === userInput[i]) strike++;
      if (
        computerInput[i] !== userInput[i] &&
        userInput.includes(computerInput[i])
      )
        ball++;
    }

    //출력 형태
    if (ball === 0 && strike === 0) return "낫싱";
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    if (ball !== 0 && strike !== 0) return `${ball}볼 ${strike}스트라이크`;
  }

  //게임 재시작
  async restartGame() {
    let restartChoice = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (restartChoice === "1") {
      this.startGame(); // 게임을 다시 시작
    } else if (restartChoice === "2") {
      return; // 게임을 종료
    } else {
      throw new Error("[ERROR] 잘못된 입력입니다. 게임을 종료합니다.");
      return; // 게임을 종료
    }
  }

  //게임 플레이(시작)
  async startGame() {
    let computerInput = this.getComputerInput();
    let userInput;
    let splitedUserInput;

    do {
      userInput = await this.getUserInput();
      if (userInput) {
        splitedUserInput = this.splitUserInput(userInput);
        let isSame = this.compareInput(computerInput, splitedUserInput);
        MissionUtils.Console.print(isSame);
        if (isSame === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          this.restartGame();
          break;
        }
      }
    } while (true);
  }
}

export default App;
