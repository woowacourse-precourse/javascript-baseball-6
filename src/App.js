import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.answer = ''; // answer을 빈 문자열로 초기화
    this.userAnswer = ''; // userAnswer 을 빈 문자열로 초기화
  }

  // 게임 시작 함수
  async play() {
    this.Print('숫자 야구 게임을 시작합니다.');
    this.answer = this.GameStart();

    // answer과 userAnswer이 같지 않으면 계속 while 문을 반복한다.
    while(this.answer != this.userAnswer){
      // while 문이 반복될 때 마다 유저가 정답을 입력한다.
      this.userAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요 : ');

      // 예외처리
      try{
        this.Exception(this.userAnswer);
        this.Print(this.Hint(this.answer,this.userAnswer));
      }catch (error){
        this.Print(error);
        throw new Error('[ERROR]');
      }

      // 정답이 아니면 다시 while 문의 처음으로 돌아간다.
      if(this.answer != this.userAnswer) continue;
      
      // 정답이면 게임종료 !
      this.Print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'); 
      // 유저의 1,2 중 선택
      const GAME_SELECTED = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if(GAME_SELECTED === '1'){ 
        this.userAnswer = '' 
        this.answer = this.GameStart();
      }
    }
  }

  // 게임 시작, 랜덤한 3개 숫자 생성
  GameStart(){
    const baseball = []; // 3개 숫자를 받을 배열

    while (baseball.length < 3) { 
      const number = MissionUtils.Random.pickNumberInRange(1, 9); 

      // 숫자가 중복되지 않는 경우
      if (!baseball.includes(number)) { 
        baseball.push(number);
      }
    }
    
    return baseball.join('');
  }

  // 예외처리
  Exception(string){
    // 중복방지, 1~9의 숫자만 3자리 숫자만 받는 정규표현식
    const LEG_EXP = /^(?!.*(\d).*\1)[1-9]{3}$/;
    if(!LEG_EXP.test(string)) throw '[ERROR] 숫자가 잘못된 형식입니다.';
  }

  // 힌트 문구 출력
  Hint(answer,userAnswer){
    let hint = []; // 힌트 문구 배열
    let ball = 0; // 볼 갯수
    let strike = 0; // 스트라이크 갯수

    [...userAnswer].forEach((char,i) => { 
      const CHECK = answer.indexOf(+char); 

      if(CHECK != -1){ // char가 answer에 있을 경우만
        CHECK === i ? strike++ : ball++ // answer과 index가 일치하면 strike 일치하지 않으면 ball
      }
    })

    if(ball > 0) hint.push(`${ball}볼`);
    if(strike > 0) hint.push(`${strike}스트라이크`);
    if(ball === 0 && strike === 0) hint.push('낫싱');

    return hint.join(' ');
  }
  
  // 자주 사용되는 메세지 함수
  Print(messages){
    MissionUtils.Console.print(messages);
  }
}

const app = new App();
app.play();

export default App;
