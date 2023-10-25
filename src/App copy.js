import { Console, MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {

    
    // // 성공
    // MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    // MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    // const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
    // let n = 0;
    // while(n < 5) {
    //   MissionUtils.Console.print(messages[n]);
    //   MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    //   MissionUtils.Console.print("erv");
    //   MissionUtils.Console.print("evev");
    //   MissionUtils.Console.print("숫자rverv.");
    //   n++;
    // }
    // console.log(systemNumber);
    
    
    /*
    try {
      // 일부 로직 수행
      // let numberLengthError = false; 
      // let game = true; // 변수 이름 수정할 것
      // console.log("숫자 야구 게임을 시작합니다.");
      // while (game) {
      //   let userNum = await getUserNumber();

      //   baseballNumberCompare(userNum, systemNumber);
        
        
      //   console.log(userNum); 
      //   if (userNum.length != 3) {
      //     numberLengthError = true;
      //     game = false;
      //   }
      //   // console.log(userNum);
      //   if (numberLengthError) {
      //     throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      //   }
      // }
      // // console.log("after get user number");


      let gameRestart = true;
      // let userNumberLengthError = false;
      let invaildInputError = false;

      while(gameRestart) {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

        let isWinGame = false;
        

        while(isWinGame == false) {
          
          if (invaildInputError == true) {
            gameRestart = false;
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            // break;
          }
          invaildInputError = false;
          isWinGame = gameStart(invaildInputError);
          // isWinGame = true; // 게임에서 승리했다고 가정
        }

        if (invaildInputError == false) {
          let restart = await getUserNumber();
          if (restart == "2") {
            gameRestart = false;
          } else if (restart == "1") {
            gameRestart = true;
          } else {
            gameRestart = false;
            invaildInputError = true;
          }
        }
      }



  
      
  
      // 나머지 로직
    } catch (error) {
      // 예외 처리 로직 (예외 발생 시)
      console.error('오류:', error.message);
      throw error; // 다시 예외 던지기 (선택 사항)
    }
    
    */
    ////////////////////
    //test
    // ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
    // recordPrint(0, 0);
    // recordPrint(3, 0);
    // recordPrint(1, 1);
    // recordPrint(3, 0);
    // MissionUtils.Console.print("게임 종료");

    // MissionUtils.Console.print("hello ");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    /*
    let gameRestart = true;
    while (gameRestart) {
      gameStart();
      const userChoice = await MissionUtils.Console.readLineAsync('1 또는 2를 입력해주세요.');
      console.log("user choice", userChoice);
      if (userChoice == "2") {
        MissionUtils.Console.print("게임 종료");
        gameRestart = false;
      }
    }
    */
   try {
    let gameOver = await gameStart();
    if(gameOver == false) { // 게임 종료와 오류 구분 필요
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    while (gameOver){
      const gameRestart =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (isValidNumber(gameRestart, 1)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      // console.log("gr ", gameRestart);
      if (gameRestart == "1") {
        gameOver = await gameStart();
        if(gameOver == false) { // 게임 종료와 오류 구분 필요
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        // console.log("go ", gameOver);
      } else if (gameRestart == "2"){
        MissionUtils.Console.print("게임 종료");
        gameOver = false;
      }
    }
  } catch (error) {
    console.error('오류:', error.message);
    throw error; // 다시 예외 던지기 (선택 사항)
  }


/**
 * 
 *    let gameOver = await gameStart();
   while (gameOver){
    const gameRestart =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    // console.log("gr ", gameRestart);
    if (gameRestart == "1") {
      gameOver = await gameStart();
      // console.log("go ", gameOver);
    } else if (gameRestart == "2"){
      MissionUtils.Console.print("게임 종료");
      gameOver = false;
    }
   }
 * 
 */
  }
}

function generateRandomNumber() {
  let computer = [-1, -1, -1];
  let leng = 0;
  while (leng < 3) {
    // const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    let number = MissionUtils.Random.pickNumberInRange(1, 9); // 중복되지 않는 수로 수정할 것.
    if (!computer.includes(number)) {
      computer[leng] = number;
      leng++;
    }
    // leng++;
  }


  // const answer = [];
  // while (answer.length < 3) {
  //   const number = MissionUtils.Random.pickNumberInRange(1, 9);
  //   if (!answer.includes(number)) answer.push(number);
  // }
  // return answer.join("");

  return computer;

}

async function getUserNumber() {
  const userNumber = await MissionUtils.Console.readLineAsync('세자리 숫자를 입력해주세요.');
  // console.log("in get user number");
  // MissionUtils.Console.print(userNumber);
  return userNumber;
}
function baseballNumberCompare(userNum, sysNum) {
  // console.log(userNum, sysNum);
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
  // console.log(systemNumber);
  // let systemNumber = [1, 3, 5];
  
  // MissionUtils.Console.print("game start", systemNumber, userNum);
  // console.log(systemNumber);

  /*
    isValidNumber(userNum) -> true 인 경우만 game start 가능 
  */

  // valid number 라고 가정

  let missionComplete = false;
  while (missionComplete == false) {
    let userNum = await getUserNumber();
    if (isValidNumber(userNum, 0)) {
      // throw error
      return false;
    }
    // console.log("usernum", userNum, "sysNum", systemNumber);
    let record = baseballNumberCompare(userNum, systemNumber);
    let strike = record[0];
    let ball = record[1];
    // MissionUtils.Console.print("record : ",  record[0], record[1]);
    // console.log(strike, ball);
    recordPrint(strike, ball);


    if (strike == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      missionComplete = true;
      return true;
    }
  }
  return false;
  
  // MissionUtils.Console.print("game end ");


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
function fakeprint() {
  const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
  let n = 0;
  while (n < 5) {
    MissionUtils.Console.print(messages[n]);
    n++;
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