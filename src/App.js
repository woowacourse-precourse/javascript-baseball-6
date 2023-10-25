import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작 문구
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = getComputerNum();
    await this.startRound(computer);
  }

  async startRound(computer) {
    while (true) {
      // 사용자 입력 받기
      let input = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      input = input.split("").map(Number);

      if (input === null) {
        throw new Error("[ERROR] 입력은 숫자만 가능합니다.");
      }

      if (input.includes(NaN)) {
        throw new Error("[ERROR] 입력은 숫자만 가능합니다.");
      }

      if (input.length !== 3) {
        throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
      }

      if (input.includes("0")) {
        throw new Error("[ERROR] 1이상 9이하 숫자로 구성해주세요.");
      }

      const inputSet = new Set(input);

      if (inputSet.size < 3) {
        throw new Error("[ERROR] 중복되지 않는 숫자로 구성해주세요.");
      }

      const gameResult = await getGameResult(computer, input);
      const ballCnt = gameResult[0];
      const strikeCnt = gameResult[1];
      let resultStr = "";

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
    this.restartRound();
  }

  async restartRound() {
    const isAgainInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (isAgainInput === "1") {
      await this.play();
    } else {
      if (isAgainInput !== "2") {
        throw new Error("[ERROR] 1 또는 2를 입력하세요.");
      }
    }
  }
}

function getComputerNum() {
  // 1. 1 ~ 9 사이어야 함.
  // 2. 서로 다른 3자리의 수여야 함.
  const computerNum = [];
  while (computerNum.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(randomNumber)) {
      computerNum.push(randomNumber);
    }
  }
  return computerNum;
}

async function getGameResult(arrComputer, arrPlayer) {
  const strike = [];
  let ball = 0;

  // 스트라이크 먼저 검사
  for (let idx = 0; idx < 3; idx++) {
    if (arrPlayer[idx] === arrComputer[idx]) {
      strike.push(idx);
    }

    if (!strike.includes(idx) && arrComputer.includes(arrPlayer[idx])) {
      ball += 1;
    }
  }

  const result = [ball, strike.length];
  return result;
}

const app = new App();
app.play();

export default App;
