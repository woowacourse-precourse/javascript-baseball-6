import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    startGameTitle();
  }
}

async function gamePlay() {

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

const app = new App();
app.play();
export default App;
