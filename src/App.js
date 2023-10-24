import {MissionUtils} from '@woowacourse/mission-utils';

// ********** "1. 게임 시작 직후 루틴" 구현 **********

/*
  함수 이름 : introUI
  Parameter : void
  return : void
  기능 설명 : "숫자 야구 게임을 시작합니다." 출력
  기타 : UML을 통해 그린 플로우 차트의 [/"숫자 야구 게임을 시작합니다."/] 출력
 */
function introUI() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

/*
  함수 이름 : generateRandomNumber
  Parameter : void
  return : [] (베열) :: 1부터 9까지 서로 다른 3개의 수가 담긴 배열
  기능 설명 : 1부터 9까지 서로 다른 3개의 수가 담긴 크기 3의 배열 생성
  기타 : UML을 통해 그린 플로우차트의 [컴퓨터가 3자리 수를 생성하는 것]을 구현
        랜덤 생성 함수는 우아한테크코스에서 제공하는 예제 코드가 제공 되었고, 확인 결과 사용에 문제가 없어서 이를 그대로 활용
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
  함수 이름 : userInput
  Parameter : void
  return : [] (배열) :: 1부터 9까지의 서로 다른 3개의 수가 담긴 배열
  기능 설명 : 사용자의 입력을 받아서, 그 입력에 대한 검증 후, 각 자리의 수를 크기가 3인 배열에 각각 삽입하여 반환
  기타 : UML을 통해 그린 플로우차트의 [/사용자 입력/]로직과 {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 평가 로직 구현
        두 로직을 분할하기 보다는, 간단하면서 같은 목적을 가진 기능이기에 하나로 통합
        사용자의 입력을 받기 위해서 우아한테크코스의 API 중 MissionUtils 를 사용
        요구 사항에 의거, [ERROR] 문구를 제잎 앞에 추가해서 에러 문구 생성
 */
async function userInput() {
  const userNumber = [];

  try {
    let userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    const tempUserNumber = String(userInput).split('');

    // {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 평가 로직 구현
    if (tempUserNumber.length !== 3) {
      throw new Error('[ERROR] 3자리의 수가 입력되지 않음.')
    }

    tempUserNumber.forEach((data) => {
      let parsedData = parseInt(data);

      if (!parsedData) {
        throw new Error('[ERROR] 각 자리에 1부터 9까지의 정수가 입력되지 않음.');
      }

      userNumber.push(parsedData);
    });

    if ((userNumber[0] === userNumber[1]) || (userNumber[0] === userNumber[2]) || (userNumber[1] === userNumber[2])) {
      throw new Error('[ERROR] 서로 다른 수로 이루어지지 않음.');
    }
  } catch (e) {
    MissionUtils.Console.print(e);

    throw new Error('[ERROR] 에러로 인해 프로그램을 종료합니다.'); // 프로그램 종료 방법은 이것과, 플래그를 두고 변경하는 방법, process.exit()가 있는데, process.exit()를 사용하지 못하고, 플래그는 불필요하게 코드가 길어지기에 이 방식 채택.
  }

  return userNumber;
}

/*
  함수 이름 : matchNumber
  Parameter : computer :: 1부터 9까지 서로 다른 3개의 수가 담긴 크기 3의 배열
              user :: 1부터 9까지 서로 다른 3개의 수가 담긴 크기 3의 배열
  return : [] (배열) :: 정수 2개가 담긴 크기 2의 배열
                      score[0]은 볼의 수, score[1]은 스트라이크의 수
  기능 설명 : 컴퓨터가 생성한 수와 사용자가 생성한 수를 비교하여 볼과 스트라이크의 개수를 확정하여 리턴
  기타 : UML을 통해 그린 플로우 차트의 {index에 해당하는 입력이 컴퓨터가 생성한 숫자에 포함되는가?}에 대한 구현
*/
function matchNumber(computer, user) {
  const score = [0, 0];

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++) {
      if (computer[i] === user[j]) i === j ? score[1]++ : score[0]++;
    }
  }

  return score;
}

/*
  함수 이름 : printScore
  Parameter : score :: 정수 2개가 담긴 크기 2의 배열
                       score[0]은 볼의 수, score[1]은 스트라이크의 수
  return : boolean
  기능 설명 : 볼과 스트라이크 개수를 화면에 출력
  기타 : UML을 통해 그린 플로우 차트의 [/스코어 출력/] 에 대한 구현
*/
function printScore(score) {
  if (score[0] > 0) {
    score[1] > 0 ? MissionUtils.Console.print(`${score[0]}볼 ${score[1]}스트라이크`) : MissionUtils.Console.print(`${score[0]}볼`);
  } else {
    score[1] > 0 ? MissionUtils.Console.print(`${score[1]}스트라이크`) : MissionUtils.Console.print('낫싱');
  }

  if (score[1] === 3){
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return false;
  }

  return true;
}

// ********** "3. 게임 종료 루틴" 구현 **********

/*
  함수 이름 : userEndInput
  Parameter : void
  return : boolean
  기능 설명 : 사용자의 입력을 받아서, 1과 2를 바탕으로 게임 전체 흐름을 제어할 수 있는 flag가 되는 boolean 값을 리턴
  기타 : UML을 통해 그린 플로우 차트의 [/유저의 입력 받기/], {게임을 재시작 하려는가?}, 그 이후 분기에 대한 구현
*/
async function userEndInput() {
  let flag = 1;

  while (flag) {
    let userData = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    let userChoice = parseInt(userData);

    try {
      if (userChoice === 1) {
        flag = 0;

        return true;
      } else if (userChoice === 2){
        flag = 0;

        return false;
      } else {
        throw new Error('[ERROR] 1 또는 2가 입력되지 않음.');
      }
    } catch (e) {
      MissionUtils.Console.print(e);

      return false;
    }
  }
}

/*
  클래스 이름 : App
  구성 요소 : play() 메서드 :: 게임 전체의 실행 흐름 제어
  기타 :
*/
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
