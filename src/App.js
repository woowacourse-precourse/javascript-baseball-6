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

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let computerNum = generateComputeNum();
    MissionUtils.Console.print(computerNum);

    let userNum = await inputUserNum();
    
    if(!checkUserNum(userNum)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;
