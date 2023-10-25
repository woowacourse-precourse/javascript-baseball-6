import { MissionUtils } from "@woowacourse/mission-utils";

//컴퓨터 숫자 생성
function makeNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}

//입력 유효성 확인
function isInvalid(number) { 
  const numSet = new Set(number);
  const reg = new RegExp(/[1-9]{3}/);
  return number.length !== 3 || numSet.size !== 3 || !reg.test(number);
}

//사용자 입력
async function getInput() {
  const input = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (isInvalid(input)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return input;
}

//스트라이크, 볼 세기
function cntStrikeBall(num1, num2) {
  let strike = 0, ball = 0;
  for (let i = 0; i < 3; i++) {
    if (num1[i] === num2[i]) {
      strike++;
    } else if (num1.includes(num2[i])) {
      ball++;
    }
  }
  return [strike, ball];
}

//새로운 게임 시작 입력
async function askNewGame() {
  const chosenNum = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (chosenNum === "1") {
    playGame();
  } else if (chosenNum === "2") {
    MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
  } else {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
}

async function playGame() {
  const answer = makeNumber();
  while(true){
    const userValue = await getInput();
    const [strike, ball] = cntStrikeBall(answer, userValue);
    let result = "";
    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (!ball && !strike) {
      result = "낫싱";
    }
    MissionUtils.Console.print(result);
  
    if (strike == 3) {
      break;
    } 
  }

  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  askNewGame();
}

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    playGame();
  }
}

export default App;
