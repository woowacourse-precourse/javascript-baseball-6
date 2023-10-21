//1. 상대방(컴퓨터)가 가지고 있는 렌덤한 숫자를 만들어준다.
//2. "숫자 야구 게임을 시작합니다."라는 문구를 출력한다.
//3. "숫자를 입력해주세요 : ${숫자}"를 입력받는다. (** 숫자 : 서로 다른 3자리의 수 **)
//4. 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시한다. (${숫자}볼 ${숫자}스트라이크)
//5-1. 만약 다 맞았을 경우에 3개의 숫자를 모두 맞히셨습니다! 게임 종료 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.라는 문구를 출력한다.
//5-2. 1을 눌렀을 경우에 2과정을 생략하고 1~4까지의 과정을 다시 반복한다.
//5-3. 2을 눌렀을 경우 프로그램을 종료한다.
//6-1. ** 만약 입력받은 수가 서로 다른 3자리의 수가 아닐 경우 오류를 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다. **
//6-1의 조건은 1. 세자리 수 이냐 , 서로 다른 수냐 이 2가지를 동시에 만족시켜야 한다.

import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameStart();
  }

  async gameStart() {
    this.createAnswer();
    await this.getUserInput();
  }

  gameOver(strikeCount, ballCount, outCount) {
    let gameOverText = "";

    if (ballCount > 0) gameOverText += `${ballCount}볼 `;

    if (strikeCount > 0) gameOverText += `${strikeCount}스트라이크`;

    if (outCount === 3) gameOverText += "낫싱";

    Console.print(gameOverText);

    if (strikeCount === 3) {
      this.gameRestart();
    } else {
      this.getUserInput();
    }
  }

  async gameRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const data = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    // 들어오는 숫자가 1이라면 다시시작
    if (data === "1") {
      this.gameStart();
    }

    // 들어오는 숫자가 2라면 게임 종료
    else if (data === "2") {
      return;
    }

    // 들어오는 숫자가 1 또는 2가 아니라면 오류 출력
    else {
      throw new Error("[ERROR] 들어오는 숫자가 1또는 2가 아닙니다");
    }
  }

  //랜덤한 숫자를 만드는 함수 (즉 상대방이 가지는 렌덤한 숫자)
  createAnswer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.answer = computer.map((element) => element.toString());
  }

  //유저의 인풋값을 받는 함수
  async getUserInput() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

    this.isUserInputValidate(userInput);
  }

  //유저의 인풋값이 유효한 값인지 확인하는 함수
  isUserInputValidate(userInput) {
    const userInputArr = [...new Set(userInput)];
    const userInputIsNumber = userInputArr.some(function (item) {
      return isNaN(item);
    });

    //서로 다른 세자리수가 들어가는지 확인
    if (userInputArr.length !== 3) {
      throw new Error("[ERROR] 숫자의 길이가 3을 초과합니다");
    }

    //문자가 들어갔는지 확인
    else if (userInputIsNumber) {
      throw new Error("[ERROR] 숫자의 형식에 맞지 않습니다");
    }

    //숫자에 0이 포함되었을 경우
    else if (userInputArr.includes("0")) {
      throw new Error("[ERROR] 숫자에 0이 포함되었습니다");
    }

    //모두 해당이 되지 않을 때
    else {
      this.checkUserInputCount(userInput);
    }
  }

  //유저의 인풋값에서 볼 , 스트라이크 , 아웃이 몇개인지 확인하는 함수
  checkUserInputCount(userInput) {
    let STRIKECOUNT = 0;
    let BALLCOUNT = 0;
    let OUTCOUNT = 0;

    for (let i = 0; i < 3; i++) {
      // 만약에 위치랑 숫자가 모두 같을 때
      if (userInput[i] === this.answer[i]) {
        STRIKECOUNT++;
      }

      // 만약에 위치는 다르지만 숫자가 같을 때
      else if (this.answer.includes(userInput[i])) {
        BALLCOUNT++;
      }

      // 둘다 아닐 때
      else {
        OUTCOUNT++;
      }
    }

    this.gameOver(STRIKECOUNT, BALLCOUNT, OUTCOUNT);
  }
}

export default App;
