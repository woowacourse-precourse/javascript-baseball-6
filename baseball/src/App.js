import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    printStart();
    const baseballNums = makeRandomNum();
    console.log("컴터숫자", baseballNums);
    await inputNum(baseballNums);
  }
}
// 1. 시작문구 출력
const printStart = () => {
  Console.print("숫자 야구 게임을 시작합니다.");
};

// 2. 1~9 사이 숫자 랜덤으로 3개 만들기

const makeRandomNum = () => {
  let numArr = [];
  while (numArr.length < 3) {
    let num = Random.pickNumberInRange(1, 9);
    if (!numArr.includes(num)) {
      numArr.push(num);
    }
  }

  return numArr;
};

// 3. 사용자에게 숫자 입력받기
const inputNum = async (baseballNums) => {
  try {
    const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const userNum = answer.split("").map(Number);
    validationNum(userNum);
    const result = checkNum(userNum, baseballNums);
    checkCorrectAnswer(result, baseballNums);
  } catch (error) {
    console.error("[ERROR] 입력값이 잘못되었습니다. 게임을 종료합니다.");
    throw error;
  }
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
const replayGame = async () => {
  try {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (answer === "1") {
      app.play();
    } else if (answer === "2") {
      return;
    } else {
      throw new Error("[ERROR] 잘못된 입력값입니다.");
    }
  } catch (error) {
    console.error("[ERROR] 잘못된 입력값입니다.");
    throw error;
  }
};

const app = new App();
app.play();
export default App;
