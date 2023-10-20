import { MissionUtils } from "@woowacourse/mission-utils";
// let Console = MissionUtils.Console;
// let Random = MissionUtils.Random;
function makeAnswer() {
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
async function getNumber() {
  try {
    const number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 :"
    );
    return number;
  } catch (error) {
    throw error;
  }
}

function checkError(number) {
  return false;
}
let SCORE = {
  볼: 0,
  스트라이크: 0,
};
function review(answer, number) {
  //컴퓨터의 숫자를 순회하여 사용자의 숫자와 비교한다
  //findindex 로 스트라이크 갯수 변수와 볼 변수 낫싱 변수를 체크한다.
  //세변수 모두 0이라면 3개의 숫자를 모두 맞히셨습니다! 게임 종료 출력하고
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
  // if (SCORE.볼 === 0 && SCORE.스트라이크 === 0) {
  //   SCORE.낫싱++;
  //   return;
  // }
  // if (SCORE.스트라이크 === 3) {
  //   score.성공 = 1;
  //   return;
  // }
  return SCORE;
}
class App {
  constructor() {
    this.answer = answer;
  }
  async play() {
    //게임 시작문구를 출력한다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    //사용자에게 서로다른 숫자 3개를 입력받는다. 숫자를 입력해주세요 :
    let number = getNumber();
    number
      .then((num) => {
        let isError = checkError(num);
        if (!isError) {
          return num;
        }
      })
      .then((num) => {
        console.log("검증통과");
        review(answer, num);
      });
    //컴퓨터는 1~9까지 서로다른 임의수 3개를 선택
    const answer = makeAnswer();

    // MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    // 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 것을 출력한다.
    //입력받은 수가 1이면 시작 2를 하면 종료를 한다.
  }
}

export default App;

const app = new App();
app.play();
