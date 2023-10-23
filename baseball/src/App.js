import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    printStart();
    const baseballNums = makeRandomNum();
    console.log("컴터숫자", baseballNums);
    inputNum(baseballNums);
  }
}
// 1. 시작문구 출력
const printStart = () => {
  Console.print("숫자 야구 게임을 시작합니다.");
};

// 2. 1~9 사이 숫자 랜덤으로 3개 만들기

const makeRandomNum = () => {
  let numbers = Random.pickUniqueNumbersInRange(1, 9, 3);

  return numbers;
};

// 3. 사용자에게 숫자 입력받기
const inputNum = (baseballNums) => {
  Console.readLine("숫자를 입력해주세요 :", (answer) => {
    const userNum = answer.split("").map(Number);
    validationNum(userNum);
    const result = checkNum(userNum, baseballNums);
    checkCorrectAnswer(result, baseballNums);
  });
};

// 4. 숫자 유효성검토(숫자인지, 3개의 숫자인지)
const validationNum = (num) => {
  if (num.length > 3 || num.length < 3 || num.some(isNaN)) {
    throw new Error("[ERROR] 입력값이 잘못되었습니다. 게임을 종료합니다.");
  }
};

// 5. 정답유무 확인
const checkNum = (num, baseballNums) => {
  let answer = "";
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < baseballNums.length; i++) {
    if (baseballNums[i] === num[i]) {
      strike++;
    } else if (baseballNums.includes(num[i])) {
      ball++;
    }
  }

  if (strike === 0 && ball === 0) return Console.print("낫싱");
  if (ball > 0) answer += `${ball}볼 `;
  if (strike > 0) answer += `${strike}스트라이크`;

  Console.print(answer);
  return answer;
};

// 6. 최종정답 확인
const checkCorrectAnswer = (result, baseballNums) => {
  if (result === "3스트라이크") {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    replayGame();
  } else {
    inputNum(baseballNums);
  }
};

// 7. 게임 계속할지 물어보기
const replayGame = () => {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      if (answer === "1") app.play();
      return;
    }
  );
};

const app = new App();
app.play();
export default App;
