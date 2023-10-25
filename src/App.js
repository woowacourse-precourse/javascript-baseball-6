import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // (최초 1번) 게임 시작 문구
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = getComputerNum();
    await this.startRound(computer);
  }

  async startRound(computer) {
    while (true) {
      // console.log("🎈현재 com", computer);
      // 사용자 입력 받기
      const playerInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const player = checkPlayerInput(playerInput);
      const { ballCnt, strikeCnt } = getGameResult(computer, player);

      if (ballCnt > 0) {
        resultStr += `${ballCnt}볼 `;
      }

      if (strikeCnt > 0) {
        resultStr += `${strikeCnt}스트라이크`;
      }

      if (ballCnt === 0 && strikeCnt === 0) {
        resultStr += "낫싱";
      }

      MissionUtils.Console.print(resultStr);

      if (strikeCnt === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
    restartRound();
  }
}

// async function playGame() {
//   // 게임 시작 문구
//   MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

//   // 게임 세팅
//   let computer = [];

//   computer = getComputerNum();
//   // console.log("COM", computer);
//   let isGamePlaying = true;
//   let player = [];

//   while (isGamePlaying) {
//     // console.log("🎈현재 com", computer);
//     // 사용자 입력 받기
//     async function getPlayerNum() {
//       const playerInput = await MissionUtils.Console.readLineAsync(
//         "숫자를 입력해주세요 : "
//       );
//       try {
//         // 사용자 입력 값이 정상인지 검사
//         player = checkPlayerInput(playerInput);
//       } catch (error) {
//         MissionUtils.Console.print("[ERROR] " + error.message);

//         // MissionUtils.CError("[ERROR] " + error.message);
//         // MissionUtils.Console.Error("[ERROR] " + error.message);
//         return Promise.reject("[ERROR]");
//       }
//     }
//     // 입력값에 따른 게임 결과 알아보기
//     const gameResult = getGameResult(computer, player);
//     const ballCnt = gameResult[0];
//     const strikeCnt = gameResult[1];

//     let resultStr = "";

//     if (ballCnt > 0) {
//       resultStr += `${ballCnt}볼 `;
//     }

//     if (strikeCnt > 0) {
//       resultStr += `${strikeCnt}스트라이크`;
//     }

//     if (ballCnt === 0 && strikeCnt === 0) {
//       resultStr += "낫싱";
//     }

//     MissionUtils.Console.print(resultStr);

//     if (strikeCnt === 3) {
//       MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
//       // console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
//       const isAgainInput = await MissionUtils.Console.readLineAsync(
//         "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : "
//       );
//       let isAgain;

//       try {
//         // 사용자 입력 값이 정상인지 검사
//         isAgain = checkIsAgainInput(isAgainInput);
//       } catch (error) {
//         MissionUtils.Console.print("[ERROR] " + error.message);
//         return Promise.reject("[ERROR]");
//       }

//       if (isAgain) {
//         //새로 시작
//         computer = getComputerNum();
//         // console.log("COM", computer);
//         player = [];
//         continue;
//       } else {
//         // console.log("완전 끝!@");
//         break;
//       }
//     }
//   }
// }

function getComputerNum() {
  // 1. 1 ~ 9 사이어야 함.
  // 2. 서로 다른 3자리의 수여야 함.
  let computerNum = [];
  while (computerNum.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(randomNumber)) {
      computerNum = [...computerNum, randomNumber];
    }
  }
  return computerNum;
}

// async function getPlayerNum() {}

async function checkPlayerInput(input) {
  if (input === null) {
    throw new Error("[ERROR] 입력은 숫자만 가능합니다.");
  }

  if (isNaN(input)) {
    throw new Error("[ERROR] 입력은 숫자만 가능합니다.");
  }

  if (input.length !== 3) {
    // console.log("개수 문제!");
    throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
  }

  if (input.includes("0")) {
    // console.log("0 포함!");
    throw new Error("[ERROR] 1이상 9이하 숫자로 구성해주세요.");
  }

  const inputNum = input.split("").map(Number);
  const inputSet = new Set(inputNum);

  if (inputSet.size < 3) {
    // console.log("중복된 값 있음");
    throw new Error("[ERROR] 중복되지 않는 숫자로 구성해주세요.");
  }
  // console.log("test", inputSet);
  return inputNum;
}

async function getGameResult(arrComputer, arrPlayer) {
  let strike = [];
  let ball = 0;

  // 스트라이크 먼저 검사
  for (let idx = 0; idx < 3; idx++) {
    if (arrPlayer[idx] === arrComputer[idx]) {
      strike = [...strike, idx];
    }

    if (!strike.includes(idx) && arrComputer.includes(arrPlayer[idx])) {
      ball += 1;
    }
  }

  const result = [ball, strike.length];
  return result;
}

async function restartRound() {
  const isAgainInput = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : "
  );

  if (isAgainInput === "1") {
    await this.play();
  } else {
    if (isAgainInput !== "2") {
      throw new Error("[ERROR] 1 또는 2를 입력하세요.");
    }
  }
}

// const checkIsAgainInput = (input) => {
//   if (input === "1") {
//     await this.play()
//   } else if (input === "2") {
//     return false;
//   } else {
//     throw new Error("1 또는 2를 입력하세요.");
//   }
// };

const app = new App();
app.play();

export default App;
