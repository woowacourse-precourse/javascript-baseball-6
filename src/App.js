import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    
    app.pickAnswer();


    app.playerInput();
  
  }
  
  pickAnswer() {
    const answerArr = [];
    while (answerArr.length < 3) {
      const pickNumber = Random.pickNumberInRange(1,9); //1~9까지의 숫자 1개 반환
      if (!answerArr.includes(pickNumber)) { 
        //랜덤 선택된 숫자가 이미 선택된 숫자와 중복되지 않는다면, 선택
        answerArr.push(pickNumber);
      }
    }
    const answer = answerArr.join(''); //배열의 원소를 문자열로 ex) 123
    //console.log(answer)
    return answer;
    
  }

  playerInput() {

   Console.readLine('숫자를 입력해주세요 : ', answer => {
  	console.log(this.validateInput(answer));
 });
  }

  validateInput(input) {
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
  }
    
}



const app = new App();
app.play();



export default App;
