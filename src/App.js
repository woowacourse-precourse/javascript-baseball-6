import { MissionUtils } from "@woowacourse/mission-utils";

class LengthError extends Error {
  constructor(message) {
    super(message);
    this.name = "LengthError";
  }
}

class RepetitionError extends Error {
  constructor(message) {
    super(message);
    this.name = "RepetitionError";
  }
}

class RangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "RangeError";
  }
}

class NaNError extends Error {
  constructor(message) {
    super(message);
    this.name = "NaNError";
  }
}

class App {
  async play() {
    let firstplayStart = true;
    const RANDOMS = [];
    const ANSWERCHANGETONUMBER = [];

    await getPlayerNumber();

    //  상대방(컴퓨터) 생성값 + 플레이어 입력값 + 플레이어 입력값 오류처리 + 결과함수 실행
    async function getPlayerNumber() {
      return new Promise(async (resolve, reject) => {
        if (firstplayStart === true) {
          MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
          firstplayStart = false;
        }
        try {
          if (RANDOMS.length === 0) {
            while (RANDOMS.length < 3) {
              const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
              if (!RANDOMS.includes(NUMBER)) {
                RANDOMS.push(NUMBER);
              }
            }
          }

          const ANSWERS = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
          );
          const ANSWER = [...ANSWERS];
          const ANSWERINNUMBER = ANSWER.map(Number);
          if (ANSWERCHANGETONUMBER.length === 0) {
            ANSWERCHANGETONUMBER.push.apply(
              ANSWERCHANGETONUMBER,
              ANSWERINNUMBER
            );
          } else if (ANSWERCHANGETONUMBER.length === 3) {
            ANSWERCHANGETONUMBER.length = 0;
            ANSWERCHANGETONUMBER.push.apply(
              ANSWERCHANGETONUMBER,
              ANSWERINNUMBER
            );
          }

          if (ANSWERCHANGETONUMBER.length !== 3) {
            // 배열의 길이가 3이 아닐 때
            throw new LengthError("[ERROR]");
          } else if (
            // 반복되는 숫자가 있을 때
            ANSWERCHANGETONUMBER[0] === ANSWERCHANGETONUMBER[1] ||
            ANSWERCHANGETONUMBER[1] === ANSWERCHANGETONUMBER[2] ||
            ANSWERCHANGETONUMBER[0] === ANSWERCHANGETONUMBER[2]
          ) {
            throw new RepetitionError("[ERROR]");
          } else if (
            // 0을 입력했을 때 중간 값을 입력하지 않아 0이 반환되었을 때
            ANSWERCHANGETONUMBER[0] === 0 ||
            ANSWERCHANGETONUMBER[1] === 0 ||
            ANSWERCHANGETONUMBER[2] === 0
          ) {
            throw new RangeError("[ERROR] ");
          } else if (
            // 배열 문자열이 숫자로 변환되었을 때 NaN 발생할 때
            isNaN(ANSWERCHANGETONUMBER[0]) ||
            isNaN(ANSWERCHANGETONUMBER[1]) ||
            isNaN(ANSWERCHANGETONUMBER[2])
          ) {
            throw new NaNError("[ERROR]");
          }
          await gameResult(
            strikeCount(ANSWERCHANGETONUMBER),
            ballCount(ANSWERCHANGETONUMBER)
          );
          resolve(); // Resolve the promise when the function execution is successful
        } catch (error) {
          console.log(error + ` 숫자가 잘못된 형식입니다.`);
          reject(new Error("[ERROR]"));
        }
      });
    }

    // strike 수 count 함수
    function strikeCount(number) {
      let strike = 0;
      for (let i = 0; i < number.length; i++) {
        if (RANDOMS[i] === number[i]) {
          strike++;
        }
      }
      return strike;
    }

    // ball 수 count 함수
    function ballCount(number) {
      let ball = 0;
      for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number.length; j++) {
          if (i !== j) {
            if (RANDOMS[i] === number[j]) ball++;
          }
        }
      }
      return ball;
    }

    // strike, ball 수 출력 및 게임 종료 함수
    async function gameResult(strikeNumber, ballNumber) {
      try {
        const STRIKE = strikeNumber;
        const BALL = ballNumber;
        if (STRIKE === 3 && BALL === 0) {
          MissionUtils.Console.print("3스트라이크");
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          const GAMEEND = await MissionUtils.Console.readLineAsync("");
          const GAMEAFTER = GAMEEND;
          if (GAMEAFTER == 1) {
            RANDOMS.length = 0;
            getPlayerNumber();
          } else if (GAMEAFTER == 2) {
            return;
          }
        } else if (STRIKE > 0 || BALL > 0 || (STRIKE > 0 && BALL > 0)) {
          if (BALL === 0) {
            MissionUtils.Console.print(`${STRIKE}스트라이크`);
            getPlayerNumber();
          } else if (STRIKE === 0) {
            MissionUtils.Console.print(`${BALL}볼`);
            getPlayerNumber();
          } else if (STRIKE > 0 && BALL > 0) {
            MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
            getPlayerNumber();
          }
        } else if (STRIKE === 0 && BALL === 0) {
          MissionUtils.Console.print("낫싱");
          getPlayerNumber();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
