import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  // 상수
  #MESSAGE = Object.freeze({
    // baseballmessage
    ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
    START: "숫자 야구 게임을 시작합니다.",
    SUCCESS: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    CONTINUE: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
  });

  async play() {
    Console.print(this.#MESSAGE.START);

    // 컴퓨터 랜덤 수 만드는 함수 호출
    let computer = getComputerNumber();

    while (true) {
      // 유저 입력값을 받고 human 변수에 저장
      const human = await getUserGuessValue();

      // 유저 입력값 유효성 검사
      if (!validUserGuessValue(human)) {
        throw new Error(this.#MESSAGE.ERROR);
      }

      // 컴퓨터와 유저의 값 비교
      const [ball, strike] = checkValues(computer, human);

      // 비교한 결과값에 따라 화면에 출력 문구 결정
      resultPrint(ball, strike);

      // 유저가 다 맞췄다면
      if (strike === 3) {
        // 성공 메시지 출력
        Console.print(this.#MESSAGE.SUCCESS);

        // 게임을 더 시작할지 말지 결정하는 코드
        Console.print(this.#MESSAGE.CONTINUE);
        // 재시작 여부 입력값 받고 저장하기
        const res = await getUserIsContinued();

        // 재시작 여부 유효성 검사
        if (!validIsContinue(res)) {
          throw new Error(this.#MESSAGE.ERROR);
        }

        // 1이라면 컴퓨터 랜덤수 재호출, 1이 아니라면 break;
        if (res === "1") {
          computer = getComputerNumber();
          // continue;
        } else {
          break;
        }
      } else {
        // 못 맞춘 경우
      }
    }
  }
}

// 컴퓨터 랜덤수
function getComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

// 유저 입력 받기
async function getUserGuessValue() {
  try {
    const userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return userNumber;
  } catch (error) {
    // reject 되는 경우
  }
}

// 유저 입력값 유효성검사
function validUserGuessValue(str) {
  const uniqueStr = [...new Set(str)].join("");
  if (uniqueStr.length !== 3) {
    return false;
  } else if (isNaN(+uniqueStr)) {
    return false;
  }
  return true;
}

// 유저 입력값과 컴퓨터값 비교
// 스트라이크인 경우 -> ball을 -1 하고 스트라이크를 +1
// ball 인 경우 -> ball + 1
function checkValues(computer, human) {
  let ball = 0;
  let strike = 0;
  let humanArr = [];

  for (let i = 0; i < human.length; i++) {
    humanArr.push(+human[i]);
  }

  computer.forEach((v, i) => {
    // 스트라이크 검사
    if (v === humanArr[i]) {
      strike++;
      ball--;
    }
    // 볼 검사
    if (computer.includes(humanArr[i])) {
      ball++;
    }
  });
  return [ball, strike];
}

// 결과 화면 출력값
function resultPrint(ball, strike) {
  if (ball === 0 && strike === 0) {
    Console.print("낫싱");
  } else if (ball === 0 && strike !== 0) {
    Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball !== 0) {
    Console.print(`${ball}볼`);
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

// 게임 재시작 여부의 유저 입력값
async function getUserIsContinued() {
  try {
    const isContinued = await Console.readLineAsync("");
    return isContinued;
  } catch (error) {
    // reject 되는 경우
  }
}

// 유저 입력값 유효성검사 1 인지 2인지 검사
function validIsContinue(num) {
  if (num === "1" || num === "2") {
    return true;
  }
  return false;
}

const app = new App();
app.play();

export default App;
