import { MissionUtils } from "@woowacourse/mission-utils";
let Console = MissionUtils.Console;
let Random = MissionUtils.Random;
function makeAnswer() {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}
function checkError(number) {
  return false;
}
let score = {
  볼: 0,
  스트라이크: 0,
  낫싱: 0,
  성공: 0,
};

function review(answer, number) {
  //컴퓨터의 숫자를 순회하여 사용자의 숫자와 비교한다
  //findindex 로 스트라이크 갯수 변수와 볼 변수 낫싱 변수를 체크한다.
  //세변수 모두 0이라면 3개의 숫자를 모두 맞히셨습니다! 게임 종료 출력하고
  score.성공 = 1;
}
class App {
  async play() {
    //게임 시작문구를 출력한다.
    Console.print("숫자 야구 게임을 시작합니다.");
    //컴퓨터는 1~9까지 서로다른 임의수 3개를 선택
    const answer = makeAnswer();

    while (!score.성공) {
      //사용자에게 서로다른 숫자 3개를 입력받는다. 숫자를 입력해주세요 :
      Console.readLine("숫자를 입력해주세요 :", (number) => {
        let isError = checkError(number);
        if (!isError) {
          review(answer, number);
        }
      });
    }

    // 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 것을 출력한다.
    //입력받은 수가 1이면 시작 2를 하면 종료를 한다.
  }
}

export default App;

const app = new App();
app.play();
