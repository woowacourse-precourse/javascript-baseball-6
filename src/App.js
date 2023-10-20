import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    startGameTitle();
    gamePlay(createComputerNumber());
  }
}

async function gamePlay(computerNumber) {
  const userNumber = await createUserNumber();
  countResult(userNumber,computerNumber);
  if(!numbersEqual(userNumber,computerNumber)) return gamePlay(computerNumber);
  await gamePlayResult();
}

async function gamePlayResult() {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const gameEnd = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  if(gameEnd === '1') {
    return gamePlay(createComputerNumber());
  }
}

function numbersEqual(userNumber, computerNumber) {
  return userNumber.length === computerNumber.length && userNumber.every((number, index) => number === computerNumber[index]);
}

function startGameTitle() {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function createComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
  }
}
  return computer;
}

async function createUserNumber() {
  const createNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
  const userNumber = Array.from(createNumber).map((value) => Number(value));

  return userNumber;
}

function countStrike(userNumber,computerNumber) {
  const length = computerNumber.length;
  let strike = 0;
  for(let i = 0; i < length; i++) {
    if(computerNumber[i] === userNumber[i]) {
      strike++;
    }
  }
  return strike;
}

function countBall(userNumber,computerNumber) {
  const length = computerNumber.length;
  let ball = 0;
  for(let i = 0; i < length; i++) {
    if(computerNumber[i] !== userNumber[i] && userNumber.includes(computerNumber[i])) {
      ball++;
    }
  }
  return ball;
}

function countResult(userNumber,computerNumber) {
  const strike = countStrike(userNumber,computerNumber);
  const ball = countBall(userNumber,computerNumber);

  if (strike > 0 && ball > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike > 0) {
    Console.print(`${strike}스트라이크`);
  } else if (ball > 0) {
    Console.print(`${ball}볼`);
  } else {
    Console.print(`낫싱`);
  }
}

const app = new App();
app.play();
export default App;
