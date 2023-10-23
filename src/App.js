import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNumber(){
    const computer = [];
    while(computer.length < 3 ){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }
 
  checkResult(computer,num){
    let st = 0, ball =0;
    for (let i = 0;i<3;i++){
      if(computer[i]===num[i]){
        st++;
      }else if(num.includes(computer[i])){
        ball++;
      }
    }
    return st,ball;
  }
  printResult(st,ball){
    if (ball===0&&st>0){      
      if (st ===3){
        MissionUtiles.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtiles.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",)
      }else{
        MissionUtiles.Console.print(`${st}스트라이크`);
      }
    }
    if(ball>0){
      if (st===0){
        MissionUtiles.Console.print(`${ball}볼`);
      }else{
        MissionUtiles.Console.print(`${ball}볼 ${st}스트라이크`);
      }
    }
    if(ball===0&&st===0){
      MissionUtiles.Console.print("낫싱")
    }
  }



  async play() {
    await MissionUtiles.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.computerNumber();
    await MissionUtiles.Console.readLineAsync("숫자를 입력해주세요 : ",()=>{})
    
  }
}

export default App;
