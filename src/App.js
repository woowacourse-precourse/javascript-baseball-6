import { MissionUtils } from "@woowacourse/mission-utils";

function generateComputeNum(){
  const computerNum = [];
  while (computerNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(number)) {
      computerNum.push(number);
    }
  }
  return computerNum;
}

async function inputUserNum(){
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  return userNum;
}

function checkUserNum(userNum){
  const userNumSet = new Set(userNum);

  // 1~9까지의 숫자, 3자리 수 검사
  if (!/^[1-9]{3}$/.test(userNum)) {
    return false;
  }

  // 숫자 중복 검사
  if(userNumSet.size !== userNum.length){
    return false;
  }
  return true;
}

function compareNum(computerNum, userNum){
  let strike = 0;
  let ball = 0;

  for(let i=0; i<3; i++){
    if(computerNum[i] === Number(userNum[i])){
      strike += 1;
    }else if(computerNum.includes(Number(userNum[i]))){
      ball += 1;
    }
  }

  if(strike === 3){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return true;
  }else if(strike !== 0 || ball !== 0){
    if(ball === 0){
      MissionUtils.Console.print(strike + "스트라이크");
    }else if(strike === 0){
      MissionUtils.Console.print(ball + "볼");
    }else{
      MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
    }
  }else{
    MissionUtils.Console.print("낫싱");
  }
}

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let computerNum = generateComputeNum();
    MissionUtils.Console.print(computerNum);

    let userNum = await inputUserNum();
    
    if(!checkUserNum(userNum)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    compareNum(computerNum, userNum);

  }
}

const app = new App();
app.play();

export default App;
