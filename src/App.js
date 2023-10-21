import { MissionUtils } from "@woowacourse/mission-utils";
const {Console,Random} = MissionUtils;


class App {
  constructor(){
     this.COMNUMBER = [];
  }
   getStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }  

  getComNum() {
    this.COMNUMBER = [];
    for(let i = 0; i < 3; i++){
      this.COMNUMBER.push(Random.pickNumberInRange(1,9));
    }    
  }
  isDifferent(PLAYERNUMBER) {
    for(let i = 0; i < 3; i++){
    if(String(PLAYERNUMBER[0]) == String(PLAYERNUMBER)[1]) throw new Error(`[ERROR]서로 다른 숫자 3개를 입력하세요.`)
    else if(String(PLAYERNUMBER[1]) == String(PLAYERNUMBER)[2]) throw new Error(`[ERROR]서로 다른 숫자 3개를 입력하세요.`)
    else if(String(PLAYERNUMBER[0]) == String(PLAYERNUMBER)[2]) throw new Error(`[ERROR]서로 다른 숫자 3개를 입력하세요.`)
  }
  }

  async play(){
    let PLAY = true;
      this.getStart();
      this.getComNum();  
     while(PLAY){

      const PLAYERNUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (String(PLAYERNUMBER).length != 3  || isNaN(PLAYERNUMBER) == true) {
        throw new Error(`[ERROR]숫자 3개를 입력하세요.`);
      }
      this.isDifferent(PLAYERNUMBER);

      let ISSAME = 0;
      let ISINCLUDE = 0;
  
      for(let i = 0; i < 3; i++){
        if(this.COMNUMBER[i] == PLAYERNUMBER[i]){
          ISSAME += 1;
      }
      if(this.COMNUMBER.includes(Number(PLAYERNUMBER[i])) && this.COMNUMBER[i] != PLAYERNUMBER[i]){
        ISINCLUDE += 1;
      }
    }
      if(ISSAME != 0 && ISINCLUDE != 0){
        Console.print(`${ISINCLUDE}볼 ${ISSAME}스트라이크`);     
        continue;
      }else if(ISSAME != 0 && ISINCLUDE == 0){     
        if(ISSAME == 3) {
          Console.print(`${ISSAME}스트라이크`);
          Console.print(`게임 종료`)
          const NEWGAME = await Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
          if(Number(NEWGAME) == 1){
            PLAY = false;
            Console.print(`게임 종료`)
            this.play();
          }else if(Number(NEWGAME) == 2){
            Console.print(`게임 종료`)
            PLAY = false;       
            break;
          }else if(Number(NEWGAME) != 1 || 2){
            throw new Error(`[ERROR]1과 2 둘중 하나를 입력하세요.`)
          }
         }else if(ISSAME != 3){
          Console.print(`${ISSAME}스트라이크`);
          continue;
         } 
      }else if(ISINCLUDE != 0 && ISSAME == 0){
        Console.print(`${ISINCLUDE}볼`);
        continue;
      }else if(ISSAME == 0 && ISINCLUDE == 0){
        Console.print("낫싱");
        continue;
      } 
  } 

  }
}

const app = new App();


export default App;