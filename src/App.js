import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.goalNumber = undefined;

    this.userInput = undefined;
    this.strike = 0;
    this.ball = 0;
  }
  async play() {
    try {
      let isEnd = false;
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
      this.goalNumber = this.randomGoalNumber();
      do {
        this.userInput = await this.start();

        if (this.userInput == false)
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        // 유저의 입력값 받음
        // 실패 시, false 반환

        this.userInput = Number(this.userInput);
        this.matchToGuessNumber();
        // 유저 입력값을 목표값과 비교

        this.printResult(this.strike, this.ball);
        if (this.strike == 3) {
          isEnd = !isEnd;
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          const isRestart = await MissionUtils.Console.readLineAsync(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );

          if (isRestart == "1") {
            isEnd = !isEnd;
            this.goalNumber = this.randomGoalNumber();
          }
        }
        this.strike = 0;
        this.ball = 0;
      } while (!isEnd);

      MissionUtils.Console.print("종료");
    } catch (error) {
      // console.error("예외 발생:", error.message);
      MissionUtils.Console.print(error.message);
      throw new Error(error.message);
    }
  }

  randomGoalNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async start() {
    try {
      MissionUtils.Console.print(`숫자를 입력해주세요 : `);
      let userInput = await MissionUtils.Console.readLineAsync(
        `숫자를 입력해주세요 : `
      );

      if (!this.validation(userInput)) {
        return false;
      }

      return userInput;
    } catch (error) {
      return false;
    }
  }

  validation(userInput) {
    if (userInput.length != 3) return false;
    return true;
  }
  // 유저의 입력값이 올바른 형식인지 검사함

  matchToGuessNumber() {
    const userInputArr = this.userInput.toString().split("").map(Number);
    const goalNumberArr = [...this.goalNumber];

    userInputArr.forEach((userInputElement, userInputIndex) =>
      goalNumberArr.forEach((goalElement, goalElementIndex, goalInnerArr) => {
        if (userInputIndex == goalElementIndex) {
          if (userInputElement == goalElement) {
            this.strike += 1;
            goalInnerArr.splice(goalElementIndex, 1, -1);
          }
          //일치하는 요소를 재검사에서 제외시키는 로직 필요
          return;
        } else {
          if (userInputElement == goalElement) {
            this.ball += 1;
            goalInnerArr.splice(goalElementIndex, 1);
          }
          return;
        }
      })
    );

    return;
  }

  printResult(strike, ball) {
    if (strike + ball < 1) {
      MissionUtils.Console.print("낫싱");

      return;
    }
    MissionUtils.Console.print(
      `${ball == 0 ? "" : `${ball}볼 `}${
        strike == 0 ? "" : `${strike}스트라이크`
      }`
    );

    return;
  }
}

export default App;
