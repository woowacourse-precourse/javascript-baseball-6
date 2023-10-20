import { Console, MissionUtils } from "@woowacourse/mission-utils";

const MAX_SCORE = 3;
const BALL_INDEX = 1;
const STRIKE_INDEX = 0;

class App {
  constructor() {
    this.computers = [];
    this.userInputs = [];
    this.score = [0, 0];
  }

  //재시작시 초기화 함수
  restart() {
    this.computers = []; 
    this.makeComputerRandomNumber();
    this.userInputs = []; 
    this.score = [0, 0];
  }

  //컴퓨터가 서로다른 임의의 수 3개 생성 함수
  makeComputerRandomNumber() {
    while (this.computers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computers.includes(number)) {
        this.computers.push(number);
      }
    }
  }

  //사용자 입력값 숫자로 변환 하는 함수
  userInputDataToNumber(getInputs) {
    return getInputs.split("").map(Number);
  }

  //사용자에게 입력 받는 함수
  async input(Question) {
    let userNumber = await Console.readLineAsync(Question);
    this.userInputs = this.userInputDataToNumber(userNumber);
  }

  // 사용자의 입력값이 모두 숫지인지 확인
  checkUserInputData() {
    for (let i = 0; i < this.userInputs.length; i++) {
      if (isNaN(Number(this.userInputs[i]))) {
        return false;
      }
    }
    return true;
  }

  //사용자의 숫자가 모두 1~9 사이인지 확인
  checkUserInputNumberRange() {
    for (let i = 0; i < this.userInputs.length; i++) {
      if (1 > Number(this.userInputs[i]) || Number(this.userInputs[i]) > 9) {
        return false;
      }
    }
    return true;
  }

  //사용자가 입력한 값이 3개 이하인지 확인
  checkUserInputDataLength() {
    if (this.userInputs.length === MAX_SCORE) {
      return true;
    }
    return false;
  }

  //사용자의 숫자가 모두 다른 수인지 확인
  checkUserInputIsDiff() {
    let uniqueNumber = new Set(this.userInputs);
    if (uniqueNumber.size === this.userInputs.length) {
      return true;
    }
    return false;
  }

  //플레이어 입력값 유효성 검사 함수
  checkUserInput() {
    if (!this.checkUserInputData()) {
      this.score[STRIKE_INDEX] = MAX_SCORE;
      throw new Error("[ERROR] 입력한 값이 모두 숫자가 아닙니다.");
    }
    if (!this.checkUserInputNumberRange()) {
      this.score[STRIKE_INDEX] = MAX_SCORE;
      throw new Error("[ERROR] 입력한 수는 1~9 사이 값이어야 합니다.");
    }
    if (!this.checkUserInputDataLength()) {
      this.score[STRIKE_INDEX] = MAX_SCORE;
      throw new Error(
        "[ERROR] 입력한 수는 3개여야 합니다 (띄어쓰기 빼주세요!)."
      );
    }
    if (!this.checkUserInputIsDiff()) {
      this.score[STRIKE_INDEX] = MAX_SCORE;
      throw new Error("[ERROR] 입력한 값은 서로 다른 수여야 합니다.");
    }
    return true;
  }

  //정답 여부 확인(3스트라이크)
  checkCorrectness(result) {
    if (result === "3스트라이크") {
      Console.print(result);
      return true;
    }
    return false;
  }

  //스코어 할당하는 함수
  checkScore() {
    for (let i = 0; i < this.userInputs.length; i++) {
      if (this.computers[i] === this.userInputs[i]) {
        this.score[STRIKE_INDEX] += 1;
      } else if (this.computers.includes(this.userInputs[i])) {
        this.score[BALL_INDEX] += 1;
      }
    }
  }

  //게임 종료하는 함수 , 사용자에게 재시작 하는지 종료하는지 물어본다.
  async questionRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    if (
      "1" ===
      (await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      ))
    ) {
      this.restart();
      return;
    } else {
      Console.print("게임 종료");
      this.score[STRIKE_INDEX] = 3;
    }
  }

  //결과 값 표출 하는 함수
  playAnswer() {
    this.checkScore();
    let answer = "";
    if (this.score[STRIKE_INDEX] === 0 && this.score[BALL_INDEX] === 0) {
      answer = "낫싱";
    } else if (this.score[STRIKE_INDEX] === 0 && this.score[BALL_INDEX] > 0) {
      answer = `${this.score[BALL_INDEX]}볼`;
    } else if (this.score[STRIKE_INDEX] > 0 && this.score[BALL_INDEX] === 0) {
      answer = `${this.score[STRIKE_INDEX]}스트라이크`;
    } else {
      answer = `${this.score[BALL_INDEX]}볼 ${this.score[STRIKE_INDEX]}스트라이크`;
    }
    this.score = [0, 0];
    return answer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerRandomNumber();
    while (this.score[STRIKE_INDEX] !== MAX_SCORE) {
      try {
        await this.input("숫자를 입력해주세요 : ");
        this.checkUserInput();
        let answer = this.playAnswer();
        if (this.checkCorrectness(answer)) {
          await this.questionRestart();
        } else {
          Console.print(answer);
        }
      } catch (error) {
        this.score[STRIKE_INDEX] = MAX_SCORE;
        throw new Error(error);
      }
    }
  }
}
const APP = new App();
APP.play();
export default App;
