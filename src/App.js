import { Console, MissionUtils } from "@woowacourse/mission-utils";

function startGame() {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function cpuPickNum() {
  const cpuNumArr = [];

  while (cpuNumArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!new Set(cpuNumArr).has(number)) {
      cpuNumArr.push(number);
    }
  }
  console.log(cpuNumArr);
  return cpuNumArr;
}

async function userPickNum() {
  const userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");

  // checkUserNum(userNum);

  const numArr = userNum.split("");

  const userNumArr = numArr.map(function (e) {
    return Number(e);
  });

  return userNumArr;
}

// function checkUserNum(user){
//   if(user.length !== 3) throw new Error("3자리의 숫자를 입력해주세요.");
//   else if() throw new Error("숫자를 입력해주세요.");
// }

async function playGame() {
  const cpu = cpuPickNum();
  await compareNumber(cpu);
}

async function compareNumber(cpu) {
  const user = await userPickNum();
  const strike = countStrike(cpu, user);
  const ball = countBall(cpu, user);

  compareResult(strike, ball);
  if (strike === 3) {
    // 정답을 맞췄을 때
    await correctNum();
  } else {
    // 못 맞췄을 때
    return compareNumber(cpu);
  }
}

async function correctNum() {
  printResult();
  await startOrExitGame();
}

function printResult() {
  return Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

async function startOrExitGame() {
  const userInput = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
  );

  // TODO - userInput 예외처리 및 2를 입력해서 종료하기
  if (userInput === "1") {
    await playGame();
  }
}

function countStrike(cpu, user) {
  const CPULENGTH = cpu.length;
  let strike = 0;
  for (let i = 0; i < CPULENGTH; i++) {
    if (cpu[i] === user[i]) {
      strike++;
    }
  }
  return strike;
}

function countBall(cpu, user) {
  const CPULENGTH = cpu.length;
  let ball = 0;
  for (let i = 0; i < CPULENGTH; i++) {
    if (cpu[i] !== user[i] && cpu.includes(user[i])) {
      ball++;
    }
  }
  return ball;
}

function compareResult(strike, ball) {
  if (strike > 0 && ball > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (ball > 0) {
    Console.print(`${ball}볼`);
  } else if (strike > 0) {
    Console.print(`${strike}스트라이크`);
  } else {
    Console.print("낫싱");
  }
}

class App {
  async play() {
    startGame();
    await playGame();
  }
}

const app = new App();

app.play();

export default App;
