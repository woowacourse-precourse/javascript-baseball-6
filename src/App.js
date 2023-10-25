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
 
  checkResult(computer,player){
    let strike = 0, ball =0;
    for (let i = 0;i<3;i++){
      if(computer[i]===player[i]){
        strike++;
      }else if(player.includes(computer[i])){
        ball++;
      }
    }
    return [strike,ball];
  }
  printResult(strike,ball){
    if (ball===0&&strike>0){      
      if (strike ===3){
        MissionUtils.Console.print(`${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);        
      }else{
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
    }
    if(ball>0){
      if (strike===0){
        MissionUtils.Console.print(`${ball}볼`);
      }else{
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }
    if(ball===0&&strike===0){
      MissionUtils.Console.print("낫싱")
    }
  }
  playerErrorCheck(player){
    if (player.length !== 3) {
      throw new Error("[ERROR] 3자리 숫자가 아닙니다."+` 입력: ${player}`);
    }
    if (new Set(player).size !== player.length) {
      throw new Error("[ERROR] 중복입니다."+` 입력: ${player}`);
    }
  }
  async restartInputErrorCheck(restartInput){
    
    if (restartInput !== "1" && restartInput !=="2"){
      throw new Error("[ERROR] 1또는 2를 입력해주세요."+` 입력: ${restartInput}`);
    }
       
  }
  getInputAsIntArray(playerInput) {    
    try {
      const inputArray = playerInput.split(""); 
      const intArray = inputArray.map((char) => parseInt(char, 10));
      return intArray;
    } catch (error) {
      return [];
    }
    
  }
  async playSet(){
    const computer = this.computerNumber();
    let strike;    
    while(true){
      try{
        const playerInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        const player = this.getInputAsIntArray(playerInput)
        this.playerErrorCheck(player);
        const [strike, ball] = this.checkResult(computer, player);        
        this.printResult(strike,ball);
      }
      catch(e){
        MissionUtils.Console.print(e);
        break;
      }
      if(strike===3){
        break;
      }
    }
    
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while(true){
      await this.playSet()    
      const restartInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
      await this.restartInputErrorCheck(restartInput)       
      if (restartInput === "2"){
        break;
      } 
    }
    
  }
}

export default App;
