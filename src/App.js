import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    
    app.playerInput();
  
  }
  
  pickNumber() {
    const answerArr = [];
    while (answerArr.length < 3) {
      const pickNumber = Random.pickNumberInRange(1,9); //1~9까지의 숫자 1개 반환
      if (!answerArr.includes(pickNumber)) { 
        //랜덤 선택된 숫자가 이미 선택된 숫자와 중복되지 않는다면, 선택
        answerArr.push(pickNumber);
      }
    }
    const answer = answerArr.join(''); //배열의 원소를 문자열로 ex) 123

    return answer;
    
  }

  playerInput() {

    
    
   Console.readLine('숫자를 입력해주세요 : ', input => {
  	this.validateInput(input);
    
 });
  }

  validateInput(input) {

    const computerNum = this.pickNumber();
    console.log(computerNum);
    var inputValid = /^[1-9]{3}$/; //1에서 9까지의 숫자 3자리 검사하는 정규식
    if(!inputValid.test(input)) { 
      if(input.includes(' ')) { //3자리 숫자를 입력했지만 공백이 포함된 경우 error
        throw new Error('[ERROR] 띄어쓰기(공백) 없이 입력해주세요.');
      }
      //1에서 9까지 3자리 숫자가 아닌 경우
      throw new Error('[ERROR] 1부터 9까지의 서로 다른 3자리 숫자를 입력해주세요.');
    }
    //3자리 수를 입력해서 검사를 통과했지만 중복된 수가 있는 경우   
    if (new Set(input).size !== 3) { 
      throw new Error('[ERROR] 중복되지 않은 서로 다른 3자리 숫자를 입력해주세요.');
    }
    
    return this.getHint(computerNum,input); //두 인자 모두 문자열
  }
    


getHint(keyNums, playerNums) {
  let strikes = 0;
  let balls = 0;
  
  for (let n = 0; n < 3; n+=1) {
    //같은 수가 같은 자리에 있는 경우
    if (Number(keyNums[n]) === Number(playerNums[n])) {
      strikes += 1;
          
    }
    //같은 수가 존재하지만, 같은 자리에는 없는 경우
    if (Number(keyNums[n]) !== Number(playerNums[n]) && keyNums.includes(Number(playerNums[n]))) {
      balls += 1;
      
    }
  }
  
  return Console.print(this.printHint(balls,strikes));
}

printHint(balls, strikes) {
  if(balls && strikes) return `${balls}볼 ${strikes}스트라이크`; //b, s 둘다 0이 아님
  if(balls) return `${balls}볼`; //b>=1 s=0
  if(strikes) return `${strikes}스트라이크`; //s>= b=0 
  return '낫싱'; //s=0 b=0
  
 }
 
}


const app = new App();
app.play();



export default App;
