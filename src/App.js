import { MissionUtils } from "@woowacourse/mission-utils";


// 컴퓨터의 난수 생성
function randomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}


// 사용자의 숫자 입력받기
async function getUserNumber() {
  const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  return userNumber;
}


// 입력받은 문자열이 1~9의 숫자중 3개의 서로다른 수인지 체크 (예외처리)
function checkNumber(number) { 
  const TEST_NUMBER = /[^1-9]/.test(number);
  const NUMBER_SET = new Set(number);
  return TEST_NUMBER || NUMBER_SET.size !== 3 || number.length > 3 ? true : false;
}


// ball, strike 개수 체크
function countCheck(userNumber, computer_number){
  let ball = 0;
  let strike = 0;

  userNumber.split('').forEach((num, idx) => {
    if(computer_number.indexOf(num) === idx)
      strike++;
    else if(computer_number.split("").includes(num))
      ball++;
  })
  return [ball, strike];
}


// 정답 출력 
function answerPrint(ball, strike) {
  let answer = "";
  if(ball !== 0){
    if(strike !== 0){
      answer = ball + "볼 " + strike + "스트라이크";          
    }else {
      answer = ball + "볼";
    }
  }
  else if(strike !== 0){
    answer = strike + "스트라이크";
  }
  else {
    answer = '낫싱';
  }
  return answer;
}


// 게임 재시작 입력받기
async function getUserAnswer() {
  const userAnswer = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  return userAnswer;
}


// 실행
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')

    let computer_number = randomNumber();
    let userNumber;
    

    while(true){
      userNumber = await getUserNumber();

      if(checkNumber(userNumber)){
        throw new Error("[ERROR]");
      }

      let [ball, strike] = countCheck(userNumber, computer_number);
      
      const ANSWER = answerPrint(ball, strike);
      MissionUtils.Console.print(ANSWER);
      if(strike === 3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let playerAnswer = await getUserAnswer();
        if(playerAnswer === "2"){
          break;
        }
        else {
          computer_number = randomNumber();
        }
      }
    }
  }
}

export default App;
