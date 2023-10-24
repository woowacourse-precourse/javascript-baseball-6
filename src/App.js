import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  
  makeNumber(){
    let temp = [];
    while (temp.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!temp.includes(number)) {
            temp.push(number); 
          }
      }
    return temp;
  }

  countStrikeAndBall(computer,input){

    let strike = 0;
    let ball = 0;

    for(let i =0 ; i< 3; i++){

      //스트라이크 계산
      if(Number(input[i]) == computer[i]){
        strike += 1;
      }

      //ball 계산
      else if(computer.includes(Number(input[i]))){
        ball += 1;
      }
    }

    return {strike,ball};
  }

  printStrikeAndBall(strike,ball){

    //스트라이크, 볼 , 낫싱 판단
    if(ball+strike === 0){
      MissionUtils.Console.print("낫싱");
    }
    else if(strike === 3){
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    else if(ball === 0){
      MissionUtils.Console.print(`${strike}스트라이크`);
    }

    else if(strike === 0){
      MissionUtils.Console.print(`${ball}볼`);
    }

    else if(strike >0 && ball > 0){
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

  }


  async play() {

    while(true){

      const COMPUTER = this.makeNumber(); 

      while(true){
       
        const USERINPUT = await MissionUtils.Console.readLineAsync("숫자를 입력하세요 : ");
        if (!/^\d{3}$/.test(USERINPUT)) {
          throw new Error("[ERROR]");
        }

        const {strike,ball} = this.countStrikeAndBall(COMPUTER,USERINPUT);
        this.printStrikeAndBall(strike,ball);
        
        if(strike === 3){
          const SELECT = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

          if( (SELECT !== '2') && (SELECT !== '1')){
            throw new Error("[ERROR]");
          }

          else if(SELECT === '2'){
            return;
          }

          break;
        }
        
      } //내부 루프
    
    }
  }

}




export default App;
