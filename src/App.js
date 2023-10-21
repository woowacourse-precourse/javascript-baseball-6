import { MissionUtils } from "@woowacourse/mission-utils";
// let Console = MissionUtils.Console;
// let Random = MissionUtils.Random;
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
    return number;
  } catch (error) {
    throw error;
  }
}

function checkError(number) {
  return false;
}

function review(answer, number) {
  //컴퓨터의 숫자를 순회하여 사용자의 숫자와 비교한다
  //findindex 로 스트라이크 갯수 변수와 볼 변수 낫싱 변수를 체크한다.
  console.log(answer, number);
  for (let i = 0; i < answer.length; i++) {
    let index = answer.findIndex((el) => el === number[i]);
    if (index === i) {
      SCORE.스트라이크++;
    }
    if (index > 0 && index !== i) {
      SCORE.볼++;
    }
  }

  return SCORE;
}
function resetScore() {
  SCORE.볼 = 0;
  SCORE.스트라이크 = 0;
  console.log(SCORE);
}
function printResult(SCORE) {
  console.log(SCORE);
  if (SCORE.볼 === 0 && SCORE.스트라이크 === 0) {
    //낫싱
    MissionUtils.Console.print("낫싱");
    return true;
  }
  if (SCORE.스트라이크 === 3) {
    //성공
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    return false;
  }
  if (!SCORE.볼 && !SCORE.스트라이크) {
    console.log("볼과 스트라이크");
    let text = SCORE.볼 + "볼" + " " + SCORE.스트라이크 + "스트라이크";
    MissionUtils.Console.print(text);
    return true;
  }
  console.log("볼또는스트라이크");
  let text = SCORE.볼 ? SCORE.볼 + "볼" : SCORE.스트라이크 + "스트라이크";
  MissionUtils.Console.print(text);
  return true;
}
async function playGame(answer) {
  //비동기 동작원리를 정확히 파악하지 못하는듯

  while (!SCORE.성공) {
    let num = await getUserInput("숫자를 입력해주세요 :");
    if (!checkError(num)) {
      let result = review(answer, num);
      let isContinue = printResult(result);
      if (isContinue) {
        resetScore();
        getSomting();
      }
      let number = await getUserInput(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (number === "1") {
        app.play();
      }
      //종료
      return;
    }
  }
}
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    //반복되는 구간을 while 로 돌리고 싶은데 비동기때문에 어려움 그래서 일단 함수로 만들어서 자기 호출하는 식으로 만듦
    const answer = makeRandom();

    let SCORE = {
      볼: 0,
      스트라이크: 0,
      성공: false,
    };

    while (!SCORE.성공) {
      let num = await getUserInput("숫자를 입력해주세요 :");
      if (!checkError(num)) {
        let result = review(answer, num);
        let isContinue = printResult(result);
        if (isContinue) {
          resetScore();
        }
        let number = await getUserInput(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );

        if (number === "1") {
          app.play();
        }
        //종료
        return;
      }
    }
    // playGame();

    //비동기 라이브러리쓰니까 입력하는 동안 미리 할 수 잇는 답안 작성하기 하고 싶은데 안됨
    //호이스팅 개념도 흔들리는 중
  }
}

export default App;

const app = new App();
app.play();
