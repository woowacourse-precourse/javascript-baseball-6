import {MissionUtils} from "@woowacourse/mission-utils";


// ********** "1. 게임 시작 직후 루틴" 구현 **********

// "숫자 야구 게임을 시작합니다." 출력
function introUI() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

/*
  [컴퓨터가 3자리 수를 생성하는 것]을 구현
  랜덤 생성 함수는 우아한테크코스에서 제공하는 예제 코드에 문제가 없기에, 이를 활용
 */
function generateRandomNumber() {
  const computer = [];

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}




// ********** "2. 게임 동작 루틴" 구현 **********

/*
    [/사용자 입력/]로직과 {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 평가 로직 구현
    MissionUtils - 우아한테크코스의 API 사용
    [ERROR] 문구를 제잎 앞에 추가해서 에러 문구 생성
 */
async function userInput() {
  const userNumber = [];
  try {
    let userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

    const tempUserNumber = String(userInput).split("");

    // {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 평가 로직 구현
    if (tempUserNumber.length != 3) {
      throw new Error("[ERROR] 3자리의 수가 입력되지 않음.")
    }
    tempUserNumber.forEach((data)=>{
      let parsedData = parseInt(data);
      if(!parsedData){
        throw new Error("[ERROR] 각 자리에 1부터 9까지의 정수가 입력되지 않음.");
      }
      userNumber.push(parsedData);
    });
    if((userNumber[0] === userNumber[1]) || (userNumber[0] === userNumber[2]) || (userNumber[1] === userNumber[2])){
      throw new Error("[ERROR] 서로 다른 수로 이루어지지 않음.");
    }
  }
  catch (e) {
    MissionUtils.Console.print(e);

    // FIXME :: 에러 종료 방식에 대해 구현
    throw new Error("[ERROR] 에러로 인해 프로그램을 종료합니다."); // 프로그램 종료 방법은 이것과, 어차피 사용자가 나중에 입력한 값에 따라 프로그램을 재실행 할텐데, 그 횟수를 막으면 됨. 그 중 중복에러로 해결.
  }

  return userNumber;
}

/*
  {index에 해당하는 입력이 컴퓨터가 생성한 숫자에 포함되는가?}에 대한 구현
  배열을 통해 구현하되, index가 0 이면 볼, 1 이면 스트라이크이다.
*/
function matchNumber(computer, user) {
  const score = [0,0];

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++) {
      if (computer[i] === user[j]) {
        i===j?score[1]++:score[0]++;
      }
    }
  }

  return score;
}

// [/스코어 출력/] 에 대한 구현
function printScore(score){
  if (score[0]>0) {
    score[1]>0?MissionUtils.Console.print(`${score[0]}볼 ${score[1]}스트라이크`):MissionUtils.Console.print(`${score[0]}볼`);
  }
  else{
    score[1]>0?MissionUtils.Console.print(`${score[1]}스트라이크`):MissionUtils.Console.print("낫싱");
  }
  if (score[1] === 3){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return false;
  }
  return true;
}




// ********** "3. 게임 종료 루틴" 구현 **********
async function userEndInput() {
  let flag = 1;
  while (flag) {
    let userData = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    let userChoice = parseInt(userData);

    try {
      if (userChoice === 1) {
        flag = 0;
        return true;
      }
      else if (userChoice === 2){
        flag = 0;
        return false;
      }
      else {
        throw new Error("[ERROR] 1 또는 2가 입력되지 않음.");
      }
    }
    catch (e) {
      MissionUtils.Console.print(e);
      return false;
    }
  }
}





class App {
  async play() {
    // 게임 전체 플레이 유무에 대한 플레그
    let bigFlag = true;
    // 각 라운드 별로 진행을 판단하는 플래그
    let smallFlag;
    let computer;
    let userNumber;
    let score;

    introUI();
    while (bigFlag) {
      // "1. 게임 시작 직후 루틴"
      smallFlag = true;
      computer = generateRandomNumber();

      while (smallFlag) {
        // "2. 게임 동작 루틴"
        userNumber = await userInput();
        score = matchNumber(computer, userNumber);
        smallFlag = printScore(score);
      }
      // "3. 게임 종료 루틴"
      bigFlag = await userEndInput();
    }
  }
}

export default App;
