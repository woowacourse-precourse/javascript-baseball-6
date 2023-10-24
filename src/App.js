import { Console, Random } from "@woowacourse/mission-utils";

const SCORE = {
  ball: 0, //볼 스트라이크같은 출력 문자열이니 메세지로 가는게 맞지 않나?
  strike: 0,
  success: false,
};
const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.", //속성 네이밍도 대문자로 해야하나?
  INPUTREQUEST: "숫자를 입력해주세요 :",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",

  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
  SUCCESS: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};
function makeRandom() {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number + "")) {
      answer.push(number + "");
    }
  }
  console.log(answer);
  return answer;
}

async function getUserInput(message) {
  try {
    const number = await Console.readLineAsync(message);
    return number;
  } catch (error) {
    throw new Error(MESSAGE.ERROR);
  }
}

function checkError(number) {
  if (number.length !== 3) {
    return false;
  }
  for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
      //console.log(number[i], isNaN(number[i]));
      return false;
    }
  }
  let set = new Set([...number]);
  //console.log(set.size);

  if (set.size !== 3) {
    return false;
  }

  return true;
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
      SCORE.strike++;
    }
    if (index >= 0 && index !== i) {
      SCORE.ball++;
    }
  }
  printResult();
}
function resetScore() {
  SCORE.ball = 0;
  SCORE.strike = 0;

  // console.log(SCORE);
}
function printResult() {
  // console.log(SCORE);
  //해당 SCORE 에 여러 조건에 따라 출력문이 달라지는 거니 해당 조건에대해 출력조건을 작성하는 로직을 분리하고
  // 그 출력조건에 따라 출력을 달리하는 식으로 switch 문을 써서 가독성을 높인다.
  if (SCORE.ball === 0 && SCORE.strike === 0) {
    Console.print(MESSAGE.NOTHING);
    return;
  }
  if (SCORE.strike === 3) {
    Console.print(MESSAGE.SUCCESS);
    SCORE.success = true;
    return;
  }
  if (SCORE.ball && SCORE.strike) {
    // console.log("ball과 strike");
    let text = `${SCORE.ball}${MESSAGE.BALL} ${SCORE.strike}${MESSAGE.STRIKE}`;
    Console.print(text);
    return;
  }
  // console.log("ball또는strike");
  let text = SCORE.ball
    ? SCORE.ball + MESSAGE.BALL
    : SCORE.strike + MESSAGE.STRIKE;
  Console.print(text);
  return;
}

class App {
  async play() {
    Console.print(MESSAGE.START);
    let answer = makeRandom();

    while (!SCORE.success) {
      let num = await getUserInput(MESSAGE.INPUTREQUEST);
      if (!checkError(num)) {
        throw new Error(MESSAGE.ERROR);
      }

      review(answer, num);
      if (!SCORE.success) {
        resetScore();
      }
    }

    let number = await getUserInput(MESSAGE.RESTART);
    if (!checkedError(number)) {
      throw new Error(MESSAGE.ERROR);
    }

    if (number === "1") {
      resetScore();
      SCORE.success = false;
      return this.play();
    }

    return;
  }
}

export default App;

const app = new App();
app.play();
