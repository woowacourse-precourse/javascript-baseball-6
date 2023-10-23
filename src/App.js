import { MissionUtils } from '@woowacourse/mission-utils';

// TODO: Mission 1: 메세지 출력 함수 구현
function printMessage(message = {}) {
  MissionUtils.Console.print(message);
}

// TODO: Mission 2: 메세지 입력 함수 구현
async function inputMessage(message = {}) {
  return await MissionUtils.Console.readLineAsync(message);
}

// TODO: Mission 3: 상대방(컴퓨터)의 3자리 랜덤 숫자 생성 함수 구현
function getComputerNumber() {
  const computerNumberList = [];
  while (computerNumberList.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumberList.includes(randomNumber)) {
      computerNumberList.push(randomNumber);
    }
  }
  return computerNumberList;
}

// TODO: Mission 4: 사용자(인터페이스)가 입력한 수를 리스트로 출력하는 함수 구현
async function getUserNumber() {
  const userNumber = await inputMessage('숫자를 입력해주세요 : ');
  if (userNumber.length !== 3) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  const userNumberList = userNumber.split("").map(Number);
  return userNumberList;
}

// TODO: Mission 5: 스트라이크, 볼 계산 함수 구현
function calculateScore(computer = {}, user = {}) {
  let strikeCount = 0;
  let ballCount = 0;
  computer.map((computerItems, computerIndex) => {
    user.map((userItems, userIndex) => {
      if (computerItems === userItems) {
        if (computerIndex === userIndex) {
          strikeCount++;
        } else {
          ballCount++;
        }
      }
    });
  });
  return { strikeCount, ballCount };
}

// TODO: Mission 6: 스트라이크, 볼 계산 후 문구 출력하는 함수 구현
function printScore(strike = {}, ball = {}) {
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

// TODO: Mission 7: 게임 재시작 또는 종료 처리 함수 구현
async function gameStartOver() {
  const startOver = Number(
    await inputMessage(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`)
  );
  return startOver !== 1;
}

// TODO: Mission 8: "3스트라이크"이면, 게임 종료 하는 함수 구현
async function isThreeStrike(computerList = {}) {
  let endPoint = false;
  while (!endPoint) {
    const userList = await getUserNumber(computerList);
    const { strikeCount, ballCount } = calculateScore(computerList, userList);
    printScore(strikeCount, ballCount);
    if (strikeCount === 3) {
      printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return gameStartOver();
    }
  }
}

// TODO: Mission 9: 전체 함수들을 실행 시켜주는 메인 함수 구현
async function main() {
  let endPoint = false;
  while (!endPoint) {
    printMessage("숫자 야구 게임을 시작합니다.");
    const computer = getComputerNumber();
    endPoint = await isThreeStrike(computer);
  }
}

class App {
  async play() {
    await main();
  }
}

export default App;
