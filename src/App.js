import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {

    let COMPUTER_ANSWER;
    let USER_ANSWER;
    let RESTART_CODE = 1;
    let USER_CODE;

    //초기 설정
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    COMPUTER_ANSWER = GenerateNewComputerAnswer();

    while(RESTART_CODE == 1){
      //입력
      USER_ANSWER = await GetUserAnswer();

      //작동
      let BALL = 0;
      let STRIKE = 0;

      for (let i=0; i < 3; i++){
        if (USER_ANSWER.includes(COMPUTER_ANSWER[i])){
          if (i === USER_ANSWER.indexOf(COMPUTER_ANSWER[i])) {
            STRIKE += 1;
            continue;
          }
          BALL += 1;
        }
      }

      //출력
      if (STRIKE == 0 && BALL == 0) {
        MissionUtils.Console.print("낫싱");
        continue;
      }
      else if (STRIKE == 3) {
        MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        USER_CODE = await GetUserCode();
        
        if (USER_CODE == 1) {
          COMPUTER_ANSWER = GenerateNewComputerAnswer();
        }
        else {
          RESTART_CODE = 2;
        }
        continue;
      }
      else {
        MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
        continue;
      };

    }
  }
}

async function GetUserCode() {
  //input 입력받기
  let USER_INPUT;
  try {
    USER_INPUT = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  } catch (error) {
    throw new Error("[ERROR] 코드 입력 오류");
  }

  USER_INPUT = parseInt(USER_INPUT);

  if (USER_INPUT != 1 && USER_INPUT !=2 ) {
    throw new Error("[ERROR] 유효한 코드를 입력해주세요.");
  }

  return USER_INPUT;

}

async function GetUserAnswer() {
  //input 입력받기
  let USER_INPUT;
  try {
    USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  } catch (error) {
    throw new Error("[ERROR] 숫자 입력 오류");
  }

  //입력받은 값이 3자리 숫자인지 확인
  if ( isNaN(parseInt(USER_INPUT)) || USER_INPUT.length != 3 ) {
    throw new Error("[ERROR] 유효한 숫자를 입력해주세요.");
  }

  //입력받은 값을 숫자로 변환
  USER_INPUT = parseInt(USER_INPUT);

  //각 자리별로 리스트에 넣기
  let USER_ANSWER = [];
  while (USER_INPUT !== 0) {
    USER_ANSWER.push(USER_INPUT % 10);
    USER_INPUT = parseInt(USER_INPUT/10);
  }
  USER_ANSWER = USER_ANSWER.reverse();

  //중복된 숫자가 들어있는지 확인
  const USER_ANSWER_SET = new Set(USER_ANSWER);
  if (USER_ANSWER_SET.size !== 3) {
    throw new Error("[ERROR] 서로 다른 3자리 숫자를 입력해주세요.");
  }

  return USER_ANSWER
}

function GenerateNewComputerAnswer() {
  const COMPUTER_ANSWER = [];
  while (COMPUTER_ANSWER.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER_ANSWER.includes(RANDOM_NUMBER)) {
      COMPUTER_ANSWER.push(RANDOM_NUMBER);
    }
  }
  return COMPUTER_ANSWER;
}

export default App;
