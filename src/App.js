import { Console, Random } from "@woowacourse/mission-utils";

const SCORE = Object.seal({
  ball: 0, //상수가 아니니 대문자로 쓰는게 아니지 않나?
  strike: 0,
  success: false,
});
const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.", //속성 네이밍도 대문자로 해야하나?
  INPUTREQUEST: "숫자를 입력해주세요 :",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
  SUCCESS: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});
const NUMBERCOUNT = 3; //맞추는 숫자갯수
const RESTART = "1";
// const END = "2";

async function makeRandom() {
  const answer = [];
  while (answer.length < NUMBERCOUNT) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number + "")) {
      answer.push(number + "");
    }
  }
  //console.log(answer);
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

function isInputValid(number) {
  for (let i = 0; i < number.length; i++) {
    //지수형태의 숫자열을 막기위해 한글자씩 비교
    if (isNaN(number[i])) {
      return false;
    }
  }
  if (
    new Set([...number]).size !== NUMBERCOUNT ||
    number.length !== NUMBERCOUNT
  ) {
    return false;
  }

  return true;
}
function isRestartValid(number) {
  //해당 상수를 isRestartValid 와 App 함수에 각각 넣어 작성하면 단일 출처 원칙을 반하지 않나.
  // 전역 변수를 최대한 자제하는 것이 좋은 데 더 나은 방법이 무엇인지 궁금합니다.
  // const RESTART = "1";
  const END = "2";
  if (number === RESTART || number === END) {
    return true;
  }

  return false;
}

function calculateScore(answer, number) {
  for (let i = 0; i < answer.length; i++) {
    let index = answer.findIndex((el) => el === number[i]);

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
}
function printResult() {
  //switch 문, if문, if-else 문 어느것이 더 적절했나
  if (SCORE.ball === 0 && SCORE.strike === 0) {
    Console.print(MESSAGE.NOTHING);
    return;
  }
  if (SCORE.strike === NUMBERCOUNT) {
    Console.print(MESSAGE.SUCCESS);
    SCORE.success = true;
    return;
  }
  if (SCORE.ball && SCORE.strike) {
    let text = `${SCORE.ball}${MESSAGE.BALL} ${SCORE.strike}${MESSAGE.STRIKE}`;
    Console.print(text);
    return;
  }
  let text = SCORE.ball
    ? SCORE.ball + MESSAGE.BALL
    : SCORE.strike + MESSAGE.STRIKE;
  Console.print(text);
  return;
}

class App {
  async play() {
    // const RESTART = "1";

    Console.print(MESSAGE.START);
    const ANSWER = await makeRandom();

    while (!SCORE.success) {
      let num = await getUserInput(MESSAGE.INPUTREQUEST);
      if (!isInputValid(num)) {
        throw new Error(MESSAGE.ERROR);
      }

      calculateScore(ANSWER, num);

      if (!SCORE.success) {
        resetScore();
      }
    }

    let number = await getUserInput(MESSAGE.RESTART);
    if (!isRestartValid(number)) {
      throw new Error(MESSAGE.ERROR);
    }

    if (number === RESTART) {
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
