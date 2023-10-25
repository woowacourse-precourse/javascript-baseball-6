import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play(){
    let game = false;
    while(!game){
      //시작
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      //숫자생성
      const TRUE_ANSWER = generateNumber();
      console.log(TRUE_ANSWER)

      while(true){
        //입력
        const USER_INPUT = await getInput();
        //console.log('user',USER_INPUT)
        //볼,스트라이크 판정
        const [BALL,STRIKE] = isCorrect(TRUE_ANSWER,USER_INPUT);
        //console.log(BALL, STRIKE)
        //정답
        win(BALL,STRIKE);

        if (STRIKE == 3){
          break;
        }
      }
        //재시작여부
      let restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (restart != '1' && restart != '2'){
        throw new Error('[ERROR] 입력이 잘못되었습니다.');
      }
      if (restart == '1'){

      }
      if (restart == '2'){
        return;
      }

    }
  }
}

//함수

//세자리수 생성
function generateNumber(){
  const COMPUTER = [];
  while(COMPUTER.length < 3){
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)){
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER;
}

//입력값 받기
async function getInput(){
  let answer = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

  if(answer.length != 3){
    throw new Error("[ERROR] 세 자리의 숫자로 입력해주세요.")
  }
  else {
    return answer;
  }
}

//스트라이크, 볼 판정
function isCorrect(COMPUTER, answer){
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < COMPUTER.length; i++){
    if (COMPUTER.includes(Number(answer[i]))){
      if(COMPUTER[i] == Number(answer[i])){
        strike ++;
      }
      else {
        ball ++;
      }
    }
  }

  return [ball, strike];
}


//정답판정
function win(ball, strike){
  let print = '';
  if (ball) {print += `${ball}볼`;}
  if (strike) {
    print += ` ${strike}스트라이크`;
    if (strike == 3){
      MissionUtils.Console.print(print)
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
  }
  if (ball == 0 && strike == 0){
    MissionUtils.Console.print("낫싱");
  }
  MissionUtils.Console.print(print)
}

export default App;


