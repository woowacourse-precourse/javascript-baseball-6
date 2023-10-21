import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(){ // 생성자 함수로 정답과, 사용자가 입력할 정답 생성
    this.answer = ''; // answer을 빈 문자열로 초기화
    this.userAnswer = ''; // userAnswer 을 빈 문자열로 초기화
  }

  async play() {  // 게임 시작 함수.
    this.Print('숫자 야구 게임을 시작합니다.'); // 게임 시작 문구
    
    this.answer = this.GameStart(); // 게임이 시작되면 answer을 랜덤한 3글자 숫자로 바꾼다.

    while(this.answer != this.userAnswer){ // answer과 userAnswer이 같지 않으면 계속 while 문을 반복한다.
      // while 문이 반복될 때 마다 유저가 정답을 입력한다.
      this.userAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요 : ');

      try{ // 예외처리
        this.Exception(this.userAnswer);
        this.Print(this.Hint(this.answer,this.userAnswer));
      }catch (error){
        this.Print(error);
        throw new Error('[ERROR]');
      }

      if(this.answer != this.userAnswer) continue; // 정답이 아니면 다시 while 문의 처음으로 돌아간다.
      
      this.Print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'); // 정답이면 게임종료 !
      const GAME_SELECTED = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); // 유저의 1,2 중 선택
      if(GAME_SELECTED === '1'){ // 유저가 1 을 선택하면
        this.userAnswer = '' // userAnswer을 초기화
        this.answer = this.GameStart(); // answer을 다시 랜덤한 3글자로 변환
      }
    }
  }

  GameStart(){ // 게임 시작, 랜덤한 3개 숫자 생성
    const baseball = []; // 3개 숫자를 받을 배열

    while (baseball.length < 3) { // 3개가 될때까지 반복
      const number = MissionUtils.Random.pickNumberInRange(1, 9); // 1~9까지의 숫자 

      if (!baseball.includes(number)) { // 숫자가 중복되지 않는 경우
        baseball.push(number); // baseball에 추가
      }
    }
    
    return baseball.join(''); // 하나의 문자열로 반환
  }

  Exception(string){ // 예외처리
    if(string.length != 3) throw '[ERROR] 숫자가 잘못된 형식입니다.'; // 숫자가 3글자가 아닐경우
  }

  Hint(answer,userAnswer){ // 힌트 문구 출력
    let hint = []; // 힌트 문구 배열
    let ball = 0; // 볼 갯수
    let strike = 0; // 스트라이크 갯수

    userAnswer.split('').forEach((char,i) => { // 입력받은 숫자를 배열로바꿔서 접근
      const CHECK = answer.indexOf(+char); // char의 index를 확인
      if(CHECK != -1){ // char가 answer에 있을 경우만
        CHECK === i ? strike++ : ball++ // answer과 index가 일치하면 strike 일치하지 않으면 ball
      }
    })

    if(ball > 0) hint.push(`${ball}볼`); // 볼의 갯수를 hint 배열에 push
    if(strike > 0) hint.push(`${strike}스트라이크`); // 스트라이크의 갯수를 hint 배열에 push
    if(ball === 0 && strike === 0) hint.push('낫싱'); // 아무것도 없을 경우는 낫싱

    return hint.join(' '); // 띄어쓰기 한칸해서 합치기
  }
  
  Print(messages){ // 자주 사용되는 메세지를 따로 빼기
    MissionUtils.Console.print(messages);
  }


}

const app = new App();
app.play();

export default App;
