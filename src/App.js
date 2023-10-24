import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNum = this.makeComputerNum(); // 컴퓨터 랜덤 숫자 만들기
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    try {
      this.startGame(); // 게임 시작
    } catch(error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async startGame() {
    const userNum = MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (userNum.length === 0) { // 예외: 사용자가 입력해야 하는 부분에서 입력 없이 엔터를 친 경우
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (this.isValidInput(userNum)) { // 올바른 상황: 사용자가 서로 다른 3개의 수를 입력한 경우
      const result = this.checkGuess(userNum); // result 변수에 결과 대입
      MissionUtils.Console.print(result); // 결과 출력
      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.endGame(); // 게임 종료 부분으로 이동
      } else {
        await this.startGame(); // 게임 시작 부분으로 이동
      }
    } else { // 예외: 사용자가 3자리의 수를 입력하지 않았거나, 3자리의 수를 입력했어도 3개의 수가 모두 다르지 않은 경우
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  makeComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const computerNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(computerNum)) {
        computer.push(computerNum);
      }
    }
    return computer.join('');
  }

  checkGuess(userNum) {
    const inputNum = userNum.split("").map(Number);
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (inputNum[i] === this.computerNum[i]) {
        strikeCount++;
      } else if (this.computerNum.includes(inputNum[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 3) {
      return "3스트라이크";
    }

    const result = [];
    if (strikeCount > 0) {
      result.push(`${strikeCount}스트라이크`);
    }
    if (ballCount > 0) {
      result.push(`${ballCount}볼`);
    }
    if (strikeCount === 0 && ballCount === 0) {
      result.push("낫싱");
    }

    return result.join(" ");
  }

  isValidInput(input) {
    return /^\d{3}$/.test(input) && !/(.).*\1/.test(input);
  }

  async endGame() {
    try {
      const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      if (choice.length === 0) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else if (choice.trim() === "1") {
        this.computerNum = this.makeComputerNum();
        await this.startGame();
      } else if (choice.trim() !== "2") {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

const app = new App();
app.play();

export default App;


// class App {
//   // async: 비동기 작업 수행(비동기 함수)
//   async play() { // 게임 시작 함수
//     return new Promise(async (resolve) => {
//       console.log(MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')); // 게임 시작
//       const computer = this.randomNum();
//       let ballCount = 0;
//       let strikeCount = 0;

//       while(true) {
//         const user = console.log(await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : '));
//         const result = this.count(user, computer);
//         ballCount = result.ballCount;
//         strikeCount = result.strikeCount;

//         try {
//             if (user.length === 0) {
//                 throw new Error('[ERROR] 아무런 숫자도 입력하지 않았습니다.');
//             } else if (user.length !== 3 || !/^\d{3}$/.test(user)) {
//                 throw new Error('[ERROR] 3자리의 수를 입력하지 않았습니다.');
//             } else if (user[0] === user[1] || user[1] === user[2] || user[2] === user[0]) {
//                 throw new Error('[ERROR] 서로 다른 3자리의 수를 입력하지 않았습니다.');
//             } else if (ballCount === 0 && strikeCount === 0) {
//                 console.log(MissionUtils.Console.print('낫싱'));
//                 continue;
//             } else if (strikeCount === 3) {
//                 console.log(MissionUtils.Console.print('3스트라이크'));
//                 console.log(MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'));
//                 const number = console.log(await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'));
//                 if (number.length === 0) {
//                     throw new Error('[ERROR] 아무런 숫자도 입력하지 않았습니다.');
//                 } else if (number === '1') {
//                     // 랜덤값 생성
//                     this.computer = this.randomNum();
//                     continue;
//                 } else if (number === '2') {
//                     break;
//                 } else {
//                     throw new Error('[ERROR] 1 또는 2를 입력하지 않았습니다.');
//                 }
//             } else {
//                 console.log(MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`));
//                 continue;
//             }
//         } catch (error) {
//             console.log(MissionUtils.Console.print(error.message));
//             break;
//         }
//       }
//       resolve(computer);
//     });
//   }

//   randomNum() { // 컴퓨터 랜덤 숫자 3개 추출 함수
//     const computer = [];
//     while (computer.length < 3) {
//       const number = console.log(MissionUtils.Random.pickNumberInRange(1, 9)); // 1부터 9까지 중에 숫자 하나 반환
//       if (!computer.includes(number)) { // computer 배열에 number가 없는 숫자이면
//         computer.push(number); // number 넣기
//       }
//     }
//     return computer;
//   }

//   count(user, computer) { // 볼, 스트라이크 카운트 함수
//     let ballCount = 0; // 볼 카운트를 저장할 변수
//     let strikeCount = 0; // 스트라이크 카운트를 저장할 변수

//     for (let i = 0; i < user.length; i++) {
//         for (let j = 0; j < computer.length; j++) {
//             if (user[i] === computer[j]) {
//                 ballCount++; // 숫자가 일치하는 경우 볼 카운트를 증가시킴
//                 if (i === j) {
//                     strikeCount++;
//                 }
//             }
//         }
//     }

//     return { ballCount, strikeCount };
//   }
// }

// const app = new App();
// app.play();

// export default App;

// class App {
//   // async: 비동기 작업 수행(비동기 함수)
//   async play() { // 게임 시작 함수
//     console.log(MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')); // 게임 시작
//     const computer = this.randomNum();
//     let ballCount = 0;
//     let strikeCount = 0;

//     while(true) {
//       const user = console.log(await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : '));
//       const result = this.count(user, computer);
//       ballCount = result.ballCount;
//       strikeCount = result.strikeCount;

//       if (user.length === 0) {
//         throw new Error('[ERROR] 아무런 숫자도 입력하지 않았습니다.');
//       } else if (user.length !== 3 || !/^\d{3}$/.test(user)) {
//         throw new Error('[ERROR] 3자리의 수를 입력하지 않았습니다.');
//       } else if (user[0] === user[1] || user[1] === user[2] || user[2] === user[0]) {
//         throw new Error('[ERROR] 서로 다른 3자리의 수를 입력하지 않았습니다.');
//       } else if (ballCount === 0 && strikeCount === 0) {
//         console.log(MissionUtils.Console.print('낫싱'));
//         continue;
//       } else if (strikeCount === 3) {
//           console.log(MissionUtils.Console.print('3스트라이크'));
//           console.log(MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'));
//           const number = console.log(await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'));
//           if (number.length === 0) {
//             throw new Error('[ERROR] 아무런 숫자도 입력하지 않았습니다.');
//           } else if (number === '1') {
//             // 랜덤값 생성
//             this.computer = this.randomNum();
//             continue;
//           } else if (number === '2') {
//             break;
//           } else {
//             throw new Error('[ERROR] 1 또는 2를 입력하지 않았습니다.');
//           }
//       } else {
//         console.log(MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`));
//         continue;
//       }
//     }
//   }

//   randomNum() { // 컴퓨터 랜덤 숫자 3개 추출 함수
//     const computer = [];
//     while (computer.length < 3) {
//       const number = console.log(MissionUtils.Random.pickNumberInRange(1, 9)); // 1부터 9까지 중에 숫자 하나 반환
//       if (!computer.includes(number)) { // computer 배열에 number가 없는 숫자이면
//         computer.push(number); // number 넣기
//       }
//     }
//     return computer;
//   }

//   count(user, computer) { // 볼, 스트라이크 카운트 함수
//     let ballCount = 0; // 볼 카운트를 저장할 변수
//     let strikeCount = 0; // 스트라이크 카운트를 저장할 변수

//     for (let i = 0; i < user.length; i++) {
//         for (let j = 0; j < computer.length; j++) {
//             if (user[i] === computer[j]) {
//                 ballCount++; // 숫자가 일치하는 경우 볼 카운트를 증가시킴
//                 if (i === j) {
//                     strikeCount++;
//                 }
//             }
//         }
//     }

//     return { ballCount, strikeCount };
//   }
// }

// const app = new App();
// app.play();

// export default App;
