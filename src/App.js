import { Console, MissionUtils } from "@woowacourse/mission-utils";

function startGame() {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function cpuPickNum() {
  const cpuNumArr = [];

  while (cpuNumArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!cpuNumArr.includes(number)) {
      cpuNumArr.push(number);
    }
  }
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

function compareNumber() {
  const cpu = cpuPickNum();
  const user = userPickNum();

  let strike = 0;
  let ball = 0;

  for(let i = 0; i < cpu.length; i++){
    if(countStrike(cpu[i], user[i])) strike++;
    else if(countBall(cpu, cpu[i], user[i])) ball++;
  }
}

function countStrike(cpu, user){
  if(cpu === user){
    return true;
  }
}

function countBall(cpuArr, cpu, user){
  if(cpu !== user && cpuArr.includes(user)){
    return true;
  }
}

class App {
  async play() {
    startGame();

    // await userPickNum();
  }
}

const app = new App();

app.play();

export default App;
