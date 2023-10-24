import { MissionUtils } from "@woowacourse/mission-utils";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const answer = this.makeRandomNum();
    await this.getaguitar(answer);
  }
  
  async getaguitar(answer) {
    let userInput = await Console.readLineAsync('숫자를 입력해 주세요 : ');
    if (this.checkUserInput(userInput)) {
      let strike = this.scoreInString(answer, userInput);
      this.checkAnswer(answer, strike);
    }
  }

  //랜덤 숫자 생성 함수
  makeRandomNum() {
    let answer = '';
    while (answer.length < 3) {
      let pick = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(pick)) {
        answer += pick;
      }
    }
    Console.print(`숫자 야구 게임을 시작합니다.`);

    return answer; 
  }

  //유효성 확인
  checkUserInput(input) {

    //숫자길이 3인지 확인
    if (String(input).length !== 3) {
      throw new Error ("[ERROR] 숫자가 잘못된 형식입니다.");
    } 

    //모두 숫자인지 확인
    for (let i = 0; i < 3; i++) {
      if (Number.isNaN(Number(input[i]))) { 
        throw new Error ("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    //1~9 사이 수인지
    for (let i =0; i< 3; i++) {
      if (Number(input[i]) < 1 || 9 < (Number(input[i]))) { 
        throw new Error ("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    //모두 다른 수인지 Set은 중복을 허용하지 않는다는 점을 이용
    let checkDupl = new Set(input);
    if (checkDupl.size !== String(input).length) {
      throw new Error ("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    
    return true;
  }

  //컴퓨터 랜덤 정답과 사용자 입력 숫자 값 비교
  //score[0] = strike, score[1] = ball
  scoreInarry(comsAnswer, userInput) {
    let score = [0, 0];
  
    for (let i = 0; i < 3; i++) {
      if (comsAnswer[i] === userInput[i]) {
        score[0] += 1;
      } else if (comsAnswer.includes(userInput[i])) {
        score[1] += 1;
      }
    }

    return score;
  }
  
  //비교결과를 문자형으로 바꾼 후 출력
  scoreInString(comsAnswer, userInput) {
    let score = this.scoreInarry(comsAnswer, userInput); // score은 배열형태임
    let answer = "";
  
    if ((score[0] === 0) && (score[1] === 0)) { // 노 스트라이크, 노 볼
      answer = (`낫싱`);
    } else if ((score[0] > 0) && (score[1] === 0)) { // 예스 스트라이크, 노 볼
      answer = (`${score[0]}스트라이크`);
    } else if ((score[0] === 0) && (score[1] > 0)) { // 노 스트라이크, 예스 볼
      answer = (`${score[1]}볼`);
    } else {
      answer = (`${score[1]}볼 ${score[0]}스트라이크`);
    }
    Console.print(answer);

    return answer;
  }

  //정답인지 확인 후 정답이라면 재게임 여부, 정답이 아니라면 재입력 받는 함수 호출.
  checkAnswer(answer, result) {
    if (result === "3스트라이크") {

     return Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료") + this.startNewgame();
    } else {
      this.getaguitar(answer);
    }
  } 

  //재 게임 여부 
  async startNewgame() {
    let reInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'); 
    let numInput = Number(reInput);
    
    if ((numInput === 1)) {
      new App().play();
    } else if(numInput === 2) {

      return;
    }
  }
}

export default App;