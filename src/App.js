import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computer = [];
    let result = [0, 0];

    // 컴퓨터 랜덤수 띄우는 함수 호출
    computer = getComputerNumber();

    while (true) {
      // 유저 입력값 저장
      const human = await getUserNumber();

      // 유저 입력값 유효성 검사
      if (!regExpUserNumber(human)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      // 컴퓨터와 유저의 값 비교
      result = comparison(computer, human);

      // 비교한 결과값에 따라 화면에 출력 문구 결정
      resultPrint(result[0], result[1]);

      // 게임을 더 시작할지 말지 결정하는 코드
      if (result[1] === 3) {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        MissionUtils.Console.print(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
        );
        const res = await getUserisContinued();

        if (!regExpUserisContinue(res)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if (res === "1") {
          computer = getComputerNumber();
          continue;
        }
        break;
      }
    }
  }
}

// 결과 화면 출력값
function resultPrint(ball, strike) {
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (ball === 0 && strike !== 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

// 컴퓨터 랜덤수
function getComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

// 유저 입력값
async function getUserNumber() {
  try {
    const userNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return userNumber;
  } catch (error) {
    // reject 되는 경우
  }
}

// 새로 시작하려면 1, 종료하려면 2
async function getUserisContinued() {
  try {
    const isContinued = await MissionUtils.Console.readLineAsync("");
    return isContinued;
  } catch (error) {
    // reject 되는 경우
  }
}

// 유저 입력값 유효성검사
function regExpUserNumber(str) {
  const uniqueStr = [...new Set(str)].join("");
  if (uniqueStr.length !== 3) {
    return false;
  } else if (isNaN(+uniqueStr)) {
    return false;
  }
  return true;
}

// 유저 입력값 유효성검사 1 인지 2인지 검사
function regExpUserisContinue(num) {
  if (num === "1" || num === "2") {
    return true;
  }
  return false;
}

// 유저 입력값과 컴퓨터값 비교
// 스트라이크인 경우 -> ball을 -1 하고 스트라이크를 +1
// ball 인 경우 -> ball + 1
// 마지막에 최종적으로 검사해서 숫자가 0인건 출력하지 않게 함
function comparison(computer, human) {
  let ball = 0;
  let strike = 0;
  let humanArr = [];

  for (let i = 0; i < human.length; i++) {
    humanArr.push(+human[i]);
  }

  // 스트라이크 검사
  computer.forEach((v, i) => {
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

const app = new App();
app.play();

export default App;
