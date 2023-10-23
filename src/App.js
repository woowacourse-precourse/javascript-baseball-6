import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    app.pickAnswer();


    app.playerNumber();
    
    
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

  playerNumber() {

   Console.readLine('숫자를 입력해주세요 : ', answer => {
  	console.log(answer);
 });

  }
    
}



const app = new App();
app.play();



export default App;
