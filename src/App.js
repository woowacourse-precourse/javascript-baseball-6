// class App {
//   async play() {
//     MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
//     let computerNum = this.makeComputerNum(); // 컴퓨터 랜덤 숫자 만들기

//     try {
//       let result = this.startGame(computerNum); // 게임 시작
//       if (result === "3스트라이크") {
//         MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
//         let resultNum = this.endGame();
//         if (resultNum === "1") {
//           // let computer = this.makeComputerNum();
//           this.startGame(this.makeComputerNum());
//         }
//       }
//       else {
//         this.startGame(computerNum);
//       }
//     } catch(error) {
//       MissionUtils.Console.print(error.message);
//     }

//   }

//   makeComputerNum() {
//     const computer = [];
//     while (computer.length < 3) {
//       const num = MissionUtils.Random.pickNumberInRange(1, 9);
//       if (!computer.includes(num)) {
//         computer.push(num);
//       }
//     }
//     return computer;
//   }

//   async startGame(computerNum) {
//     const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
//     if (userNum.length === 0) { // 예외: 사용자가 입력해야 하는 부분에서 입력 없이 엔터를 친 경우
//       throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
//     }
//     else if (this.isValidInput(userNum)) { // 올바른 상황: 사용자가 서로 다른 3개의 수를 입력한 경우
//       const result = this.checkGuess(userNum, computerNum); // result 변수에 결과 대입
//       await MissionUtils.Console.print(result); // 결과 출력
//       return result;
//     } else { // 예외: 사용자가 3자리의 수를 입력하지 않았거나, 3자리의 수를 입력했어도 3개의 수가 모두 다르지 않은 경우
//       throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
//     }
//   }

//   isValidInput(input) {
//     return /^[1-9][1-9][1-9]$/.test(input) && !/(.).*\1/.test(input);
//   }

//   checkGuess(userNum, computerNum) {
//     const inputNum = userNum.split("").map(Number); // 문자열을 문자 단위의 분리된 배열로, 배열의 요소를 숫자로 바꿈
//     let strikeCount = 0;
//     let ballCount = 0;

//     for (let i = 0; i < 3; i++) {
//       if (inputNum[i] === computerNum[i]) {
//         strikeCount++;
//       } else if (computerNum.includes(inputNum[i])) {
//         ballCount++;
//       }
//     }

//     if (strikeCount === 3) {
//       return "3스트라이크";
//     }

//     const result = [];
//     if (ballCount > 0) {
//       result.push(`${ballCount}볼`);
//     }
//     if (strikeCount > 0) {
//       result.push(`${strikeCount}스트라이크`);
//     }
//     if (strikeCount === 0 && ballCount === 0) {
//       result.push("낫싱");
//     }
//     return result.join(" ");
//   }

//   async endGame() {
//     const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
//     if (choice.length === 0) {
//       throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
//     } else if (choice.trim() === "1") {
//       return "1";
//     } else if (choice.trim() === "2") {
//       return "2";
//     } else {
//       throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
//     }
//   }
// }

// const app = new App();
// app.play();

// export default App;

import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameFinished = false;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

    while (!this.gameFinished) {
      const computerNum = this.makeComputerNum();
      let isGameFinished = false;

      while (!isGameFinished) {
        try {
          const result = await this.startGame(computerNum);

          if (result === "3스트라이크") {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            const resultNum = await this.endGame();

            if (resultNum === "1") {
              isGameFinished = true;
            } else if (resultNum === "2") {
              isGameFinished = true;
              this.gameFinished = true;
            }
          }
        } catch (error) {
          MissionUtils.Console.print(`[ERROR] ${error.message}`);
          isGameFinished = true;
          this.gameFinished = true;
        }
      }
    }
  }

  makeComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async startGame(computerNum) {
    const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (userNum.length === 0) {
      throw new Error("숫자가 잘못된 형식입니다.");
    } else if (this.isValidInput(userNum)) {
      const result = this.checkGuess(userNum, computerNum);
      await MissionUtils.Console.print(result);
      return result;
    } else {
      throw new Error("숫자가 잘못된 형식입니다.");
    }
  }

  isValidInput(input) {
    return /^[1-9][1-9][1-9]$/.test(input) && !/(.).*\1/.test(input);
  }

  checkGuess(userNum, computerNum) {
    const inputNum = userNum.split("").map(Number);
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (inputNum[i] === computerNum[i]) {
        strikeCount++;
      } else if (computerNum.includes(inputNum[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 3) {
      return "3스트라이크";
    }

    const result = [];
    if (ballCount > 0) {
      result.push(`${ballCount}볼`);
    }
    if (strikeCount > 0) {
      result.push(`${strikeCount}스트라이크`);
    }
    if (strikeCount === 0 && ballCount === 0) {
      result.push("낫싱");
    }
    return result.join(" ");
  }

  async endGame() {
    const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (choice.length === 0) {
      throw new Error("숫자가 잘못된 형식입니다.");
    } else if (choice.trim() === "1") {
      return "1";
    } else if (choice.trim() === "2") {
      this.gameFinished = true;
      return "2";
    } else {
      throw new Error("숫자가 잘못된 형식입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;
