import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() { 
    // 초기 설정
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    NumberGame();
  }
}

// 2. 게임을 위한 랜덤 숫자야구 생성해주는 함수
function NewRandomAnswer() {
  const CORRECT_ANSWER = [];

  while (CORRECT_ANSWER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!CORRECT_ANSWER.includes(number)) {
      CORRECT_ANSWER.push(number);
    }
  }
  return CORRECT_ANSWER;
};

async function InputAnswer() {
  let USER_INPUT;
  let USER_ANSWER;

  USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

  if (USER_INPUT.length !== 3) {
    throw new Error("[ERROR] 세 자리가 아니면 안됩니다.")
  }
  if (isNaN(parseInt(USER_INPUT))) {
    throw new Error("[ERROR] 숫자가 아닌 문자를 입력하시면 안됩니다.")
  }

  USER_ANSWER = Array.from(USER_INPUT).map(Number);

  if (new Set(USER_ANSWER).size !== USER_ANSWER.length) {
    throw new Error("[ERROR] 중복된 숫자를 입력하시면 안됩니다.");
  }

  if (USER_ANSWER.some(num => num < 1 || num > 9)) {
    throw new Error("[ERROR] 1에서 9 사이의 숫자만 입력해야 합니다.");
  }

  return USER_ANSWER;
}

function CheckBallStrike(computerAnswer,userAnswer) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < computerAnswer.length; i++){
    if (computerAnswer[i] === userAnswer[i]) {
      strike++;
    }
    else if (userAnswer.includes(computerAnswer[i])) {
      ball++;
    }
  }
  return [strike, ball];
}

async function NumberGame() {
  let ResultMessage = "";
  const CORRECT_ANSWER = NewRandomAnswer();
    while (true) {
      const USER_ANSWER = await InputAnswer();
      const [strike, ball] = CheckBallStrike(CORRECT_ANSWER, USER_ANSWER);

      if (ball > 0) {
        ResultMessage += `${ball}볼 `;
      }
      if (strike > 0) {
        ResultMessage += `${strike}스트라이크`;
      }
      if (!strike && !ball) {
        ResultMessage = "낫싱"
      }
      MissionUtils.Console.print(ResultMessage);
      
      if (strike == 3) {
        break;
      }
  }
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  NewGame();
}

async function NewGame() {
  const SELECT_NUMBER = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  if (SELECT_NUMBER === "1") {
    NumberGame();
  }
  else if (SELECT_NUMBER === "2") {
    MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
  }
  else {
    throw new Error("[ERROR] 정의되지 않은 입력값입니다. ");
  }
}
export default App;
