import { MissionUtils } from "@woowacourse/mission-utils";
// let Console = MissionUtils.Console;
// let Random = MissionUtils.Random;
let SCORE = {
  ball: [0, "볼"],
  strike: [0, "스트라이크"],
  success: false,
};

function makeRandom() {
  const answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number + "")) {
      answer.push(number + "");
    }
  }
  console.log(answer);
  return answer;
}

async function getUserInput(message) {
  try {
    const number = await MissionUtils.Console.readLineAsync(message);

    // return new Promise((resolve, reject) => {
    //   if (number.length === 3 && !isNaN(number)) {
    //     resolve(false);
    //   } else {
    //     reject(new Error("[ERROR]"));
    //   }
    // });
    return number;
  } catch (error) {
    // MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    // throw new Error("[ERROR]");
    throw new Error("[ERROR]");
  }
}

function checkError(number) {
  if (number.length === 3 && !isNaN(number)) {
    return true;
  }

  return false;
}
function checkedError(number) {
  if (number === "1" || number === "2") {
    return true;
  }

  return false;
}

function review(answer, number) {
  // console.log(answer, number);
  // console.log(SCORE);
  for (let i = 0; i < answer.length; i++) {
    // console.log(SCORE);
    let index = answer.findIndex((el) => el === number[i]);
    // console.log(index);
    // console.log(i);
    if (index === i) {
      SCORE.strike[0]++;
    }
    if (index >= 0 && index !== i) {
      SCORE.ball[0]++;
    }
  }
  printResult();
}
function resetScore() {
  SCORE.ball[0] = 0;
  SCORE.strike[0] = 0;

  // console.log(SCORE);
}
function printResult() {
  // console.log(SCORE);
  //스위치문으로 변경할 것
  if (SCORE.ball[0] === 0 && SCORE.strike[0] === 0) {
    MissionUtils.Console.print("낫싱");
    return;
  }
  if (SCORE.strike[0] === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    SCORE.success = true;
    return;
  }
  if (SCORE.ball[0] && SCORE.strike[0]) {
    // console.log("ball과 strike");
    let text = `${SCORE.ball[0]}볼 ${SCORE.strike[0]}스트라이크`;
    MissionUtils.Console.print(text);
    return;
  }
  // console.log("ball또는strike");
  let text = SCORE.ball[0]
    ? SCORE.ball[0] + "볼"
    : SCORE.strike[0] + "스트라이크";
  MissionUtils.Console.print(text);
  return;
}

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let answer = makeRandom();

    while (!SCORE.success) {
      let num = await getUserInput("숫자를 입력해주세요 :");
      if (!checkError(num)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      review(answer, num);
      if (!SCORE.success) {
        resetScore();
      }
    }

    let number = await getUserInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (!checkedError(number)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    if (number === "1") {
      resetScore();
      SCORE.success = false;
      //console.log(SCORE);
      // answer = makeRandom();
      // continue;
      return this.play();
    }

    return;
  }
}

export default App;

const app = new App();
app.play();
