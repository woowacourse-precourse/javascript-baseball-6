import { MissionUtils } from "@woowacourse/mission-utils";

// 설명 : 메세지 출력 함수
// 입력 : 메세지 내용
// 출력 : 메세지를 터미널에 출력
function printMessage(message = {}) {
  MissionUtils.Console.print(message);
}

// 설명 : 메세지 입력 함수
// 입력 : 메세지 내용
// 출력 : 메세지에 대한 답을 입력한 값을 반환.
// 주의사항 : 비동기 함수이기 때문에 동기적으로 사용 하기위해 async, await 구문을 이용할 것.
async function inputMessage(message = {}) {
  return await MissionUtils.Console.readLineAsync(message);
}

// 설명 : 컴퓨터의 랜덤한 수를 얻어냅니다.
// 입력 : X
// 출력 : 랜덤한 3자리 수(랜덤한 값이며 각각 다릅니다.)가 포함된 리스트
function getComputerNum() {
  const computerNumList = [];
  while (computerNumList.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumList.includes(randomNum)) {
      computerNumList.push(randomNum);
    }
  }
  return computerNumList;
}

// 설명 : 유저가 입력한 수를 리스트로 출력해줍니다.
// 입력 : 1. 컴퓨터의 세자리 수
// 출력 : 유저가 입력한 수 리스트로 출력
// 특이사항 : 3자리 수 이상의 자릿수를 입력하면 throw문으로 애플리케이션을 종료시킨다.
async function getUserNum() {
  const userNum = await inputMessage("숫자를 입력해주세요 : ");
  if (userNum.length !== 3) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  const userNumList = userNum.split("").map(Number);
  return userNumList;
}

// 설명 : 컴퓨터와 유저의 세자리 수를 입력받아 스트라이크, 볼의 수를 파악하여 반환한다.
// 입력 : 1. 컴퓨터 세자리 수 List
//        2. 유저 세자리 수 List
// 출력 : 스크라이크 수, 볼 수를 비 구조화 할당에 쓰기위해 오브젝트로 반환
function guessStrike(computer = {}, user = {}) {
  let strikeCount = 0;
  let ballCount = 0;
  computer.map((cItems, cIndex) => {
    user.map((uItems, uIndex) => {
      if (cItems === uItems) {
        if (cIndex === uIndex) {
          strikeCount++;
        } else {
          ballCount++;
        }
      }
    });
  });
  return { strikeCount, ballCount };
}

// 설명 : 입력받는 스트라이크 수와 볼 수에 따라 문구를 출력해준다.
// 입력 : 1. strike 수
//        2. ball 수
// 출력 : 터미널에 문구 출력
function printResult(strike = {}, ball = {}) {
  if (!strike && !ball) {
    printMessage("낫싱");
  } else {
    let output = "";
    if (ball) {
      output += `${ball}볼 `;
    }
    if (strike) {
      output += `${strike}스트라이크`;
    }
    printMessage(output);
  }
}

// 설명 : 게임을 재시작 할지 여부를 리턴에 주는 함수
// 입력 : X
// 출력 : 1을 입력한다면 false를 반환하여 재시작을 하게되고 2를 입력한다면 true를 반환하여 종료하게된다.
async function restartGame() {
  const restart = Number(
    await inputMessage(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`)
  );
  return restart !== 1;
}

// 설명 : 유저의 세자리 수와 컴퓨터의 세자리 수를 비교하여
//        스트라이크, 볼, 낫싱 여부를 판단한 후 화면에 출력 및 게임을 재시작 할지 결정하는 함수
// 입력 : 1. 유저의 세자리 수 리스트
// 출력 : 재식작 할지에 대한 여부
async function getThreeStrike(computerList = {}) {
  let endPoint = false;
  while (!endPoint) {
    const userList = await getUserNum(computerList);
    const { strikeCount, ballCount } = guessStrike(computerList, userList);
    printResult(strikeCount, ballCount);
    if (strikeCount === 3) {
      printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return restartGame();
    }
  }
}

// 설명 : 전체 함수들을 실행 시켜주는 메인 함수
// 입력 : X
// 출력 : X
async function main() {
  let endPoint = false;
  while (!endPoint) {
    printMessage("숫자 야구 게임을 시작합니다.");
    const computer = getComputerNum();
    endPoint = await getThreeStrike(computer);
  }
}

class App {
  async play() {
    await main();
  }
}
export default App;
