import { MissionUtils } from "@woowacourse/mission-utils";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    // [직접 테스트용] 상대방의 수 직접 입력
    let answer = this.makeRandomNum();
    Console.print('random number : ' + answer);
    const userInput = await Console.readLineAsync('computerInput: ');
    
    if(this.checkUserInput(userInput)) {
      let strike = this.scoreInString(answer, userInput);
      this.checkAnswer(strike);
    }
    
    // 이 아래부턴 함수들
  }
  
  makeRandomNum() { // 정답 숫자 생성
    let answer = ''; // 여기 랜덤 돌린거 넣을거임.
    while(answer.length < 3) {
      let pick = MissionUtils.Random.pickNumberInRange(1, 9); // 라이브러리 써서 범위 내에서 수 뽑기.
      if(!answer.includes(pick)){ // 중복방지
        answer += pick;
      }
    }
    Console.print(`숫자 야구 게임을 시작합니다.`);
    return answer; 
  }

  checkUserInput(userInput) {
    let input = userInput; // string형태
  
    //숫자길이 3인지 확인
    if (!input.length === 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    } 
    //모두 숫자인지 확인
    for(let i =0; i< 3; i++) {
      if(Number.isNaN(Number(input[i]))) { // 안에 문자 있으면
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
      }
    }
    //1~9 사이 수인지
    for(let i =0; i< 3; i++) {
      if(Number(input[i]) < 1 || 9 < (Number(input[i]))) { 
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
      }
    }
    //모두 다른 수인지 Set은 중복을 허용하지 않는다는 점을 이용
    let checkDupl = new Set(input);
    if(checkDupl.size !== input.length) { // 길이가 다르면 중복 존재
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
    // 모든 조건을 지나오면 true값 반환.
    return true;
  }

  scoreInarry(comsAnswer, userInput) {
    let score = [0, 0]; // score[0] = strike, score[1] = ball
  
    for (let i = 0; i < 3; i++) {
      if(comsAnswer[i] === userInput[i]) {
        score[0] += 1; // strike
      }
      else if(comsAnswer.includes(userInput[i])) {
        score[1] += 1; // ball
      }
    }
    return score;
  }

  scoreInString(comsAnswer, userInput) {
    const score = this.scoreInarry(comsAnswer, userInput); // score은 배열형태임
    let answer = "";
  
    if((score[0] === 0) && (score[1] === 0)) { // 노 스트라이크, 노 볼
      answer = Console.print(`낫싱`);
    }
    else if((score[0] > 0) && (score[1] === 0)) { // 예스 스트라이크, 노 볼
      answer = Console.print(`${score[0]}스트라이크`);
    }
    else if((score[0] === 0) && (score[1] > 0)) { // 노 스트라이크, 예스 볼
      answer = Console.print(`${score[1]}볼`);
    }
    else {
      answer = Console.print(`${score[1]}볼 ${score[0]}스트라이크`);
    }
  
    return answer;
  }

  checkAnswer(answer) { //scoreInString결과값을 매개변수로 받아야 함. (템플릿 문자열 써서 문자열)
    if(answer === "3스트라이크") {
     return Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n") + this.startNewgame();
    }
    else { // getUserNumber부터 
      let userInput = this.getUserNumber(userInput);
      //유효성검사
      if(this.checkUserInput(userInput)) { //여기서 숫자 기준 안 맞는건 나가리 
        let strike = this.scoreInString(answer, userInput); 
        this.checkAnswer(strike); //자기함순데 이게 되나?
      }
    }
  } 

  startNewgame() {
    Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    let reInput = Console.readLineAsync(); 
  
    if(Number(reInput) === 1) {
      new App(); // 이 클래스 전체 다시실행
    }
    if(Number(reInput) === 2) {
      process.exit(1) //일단 이걸 쓰자.
      //완전히 종료. 단, process.exit()사용 불가. 그럼 어케함..? 노션에 시그널 쓰자.
    }
  }
}

//[직접 테스트용]
new App().play()

export default App;



