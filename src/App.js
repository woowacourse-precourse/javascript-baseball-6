import { MissionUtils } from "@woowacourse/mission-utils";

// 정답 생성 함수
function generateComputeNum(){
  const computerNum = [];
  while (computerNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9).toString();
    if (!computerNum.includes(number)) {
      computerNum.push(number);
    }
  }
  return computerNum;
}

// 사용자 숫자 입력 함수
async function inputUserNum(){
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  return userNum;
}

// 사용자 입력 숫자 확인
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

// 정답과 사용자 값 비교 및 판단 함수
function compareNum(computerNum, userNum){
  let strike = 0;
  let ball = 0;

  for(let i=0; i<3; i++){
    if(computerNum[i] === userNum[i]){
      strike += 1;
    }else if(computerNum.includes(userNum[i])){
      ball += 1;
    }
  }

  if(strike === 3){
    MissionUtils.Console.print(strike + "스트라이크");
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
    return false;
  }else{
    MissionUtils.Console.print("낫싱");
    return false;
  }
}

// 재시작 및 종료 값 입력 함수
async function inputRestartNum(){
  const restartNum  = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  return restartNum;
}

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let computerNum = generateComputeNum();

    while(true){
      let userNum = await inputUserNum();
      
      if(!checkUserNum(userNum)){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if(compareNum(computerNum, userNum)){ // 3 스트라이크인 경우
        let restartNum = await inputRestartNum();

        if(restartNum === "1"){ // 1이면 재시작
          computerNum = generateComputeNum();
        }else if(restartNum === "2"){ // 2이면 종료
          break;
        }else{ // 이외는 에러 처리
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
  }
}

export default App;
