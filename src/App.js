import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    gameStart();
    gameProgress();
  }
}

// 1. 게임 시작
const gameStart = () => {
  // 1-1. 게임 시작 문구 출력
  Console.print("숫자 야구 게임을 시작합니다.");

  // 1-2. 컴퓨터의 랜덤값 생성
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 2. 게임 진행
const gameProgress = async () => {
  // 2-1. 사용자의 입력값 받기
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
  // 2-1-(1). 예외처리
  inputValidation(input);
};

// 사용자 입력값에 대한 예외 처리
const inputValidation = (input) => {
  const inputArr = [...input];
  const answerArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // 공백 여부
  if (inputArr.includes(" ")) {
    throw new Error("[ERROR] 공백이 포함되어 있습니다.");
  }
  // 숫자
  for (let i of inputArr) {
    if (!answerArr.includes(i)) {
      console.log("i: ", i);
      throw new Error("[ERROR] 1 ~ 9 사이의 숫자만 입력해 주세요.");
    }
  }
  // 길이
  if (inputArr.length !== 3) {
    throw new Error("[ERROR] 3개의 숫자를 입력해 주세요.");
  }
  // 서로 다른 숫자
  let check = [];
  for (let i of inputArr) {
    if (check.includes(i)) {
      throw new Error("[ERROR] 서로 다른 숫자를 입력해 주세요.");
    } else {
      check.push(i);
    }
  }
};

const app = new App();
app.play();

export default App;
