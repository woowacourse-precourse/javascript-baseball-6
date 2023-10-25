import { Console, MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
   
   try {
    let gameOver = await gameStart();

    if(gameOver == false) { 
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    while (gameOver){
      // gameOver에 따라 다음 게임 여부 결정
      const gameRestart =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (isValidNumber(gameRestart, 1) == false) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (gameRestart == "1") {
        gameOver = await gameStart();

        // 세자리 숫자가 아닌 경우
        if(gameOver == false) { 
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      } else if (gameRestart == "2"){
        MissionUtils.Console.print("게임 종료");
        gameOver = false;
      }
    }
  } catch (error) {
    console.error('오류:', error.message);
    throw error; // 다시 예외 던지기 (선택 사항)
  }
  

  }
}

// 중복되지 않는 세 숫자를 뽑는 함수
function generateRandomNumber() {
  let computer = [-1, -1, -1];
  let leng = 0;
  while (leng < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9); 
    if (!computer.includes(number)) {
      computer[leng] = number;
      leng++;
    }
  }

  return computer;

}

// 유저의 세자리 숫자를 입력받는 함수
async function getUserNumber() {
  const userNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
  return userNumber;
}

// 유저의 수와 생성된 수를 비교하는 함수
function baseballNumberCompare(userNum, sysNum) {

  let strike = 0, ball = 0;
  userNum.split('').forEach((e, idx) => {
    let digit = Number(e);
    if(digit === sysNum[idx]) {
      strike++;
    } 
    else if(sysNum.includes(digit)) {
      ball++;
    }
  })
  return [strike, ball];

}

async function gameStart() {
  let systemNumber = generateRandomNumber();

  let missionComplete = false;

  while (missionComplete == false) {
    let userNum = await getUserNumber();
    if (isValidNumber(userNum, 0) == false) {
      // throw error // false로 리턴시 에러 발생
      return false;
    }

    let record = baseballNumberCompare(userNum, systemNumber);
    let strike = record[0];
    let ball = record[1];
    recordPrint(strike, ball);

    if (strike == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      missionComplete = true;
      return true;
    }
  }
  return false;


}

function recordPrint(strike, ball) {
  if(strike == 0 && ball == 0) {
    MissionUtils.Console.print("낫싱");
  } else if(strike == 0) {
    const str = ball+'볼';
    MissionUtils.Console.print(str);
  } else if (ball == 0) {
    const str = strike+'스트라이크';
    MissionUtils.Console.print(str);
  } else {
    const str =  ball+'볼 ' + strike +'스트라이크';
    MissionUtils.Console.print(str);
    
  }
  
}


function isValidNumber(number, mode) {
  if (mode == 0) { // 3 자리 수 vaild 체크
    const validLength = number.length === 3;
    const validNumber = number.match(/[1-9]{3}/g);
    const checkOverlap = new Set(number.split("")).size === 3;
  
    return validLength && validNumber && checkOverlap;

  } else if (mode == 1) { // 1자리 수 vaild 체크
    const validLength = number.length === 1;
    const validNumber = number.match(/[1-2]/g);

    return validLength && validNumber;
  }

}
export default App;