import {MissionUtils} from "@woowacourse/mission-utils";
const FAIL = 0;
const SUCCESS = 1;


class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let flag = 0;
    let result = FAIL;
    try{
      while(flag===0){
        let result = 0;
        //1. start - 랜덤값 설정
        const computer = await this.start();
        //console.log(computer);
  
        //반복구문 - 2,3
        //2. 숫자입력받기 
        while(result!==SUCCESS){
          const number = await this.getNumber();
          //에러 발생 
          //2-1. 1~9 숫자가 아닌 다른 숫자 또는 문자가 입력됐을 때
          //2-2. 플레이어의 입력한 숫자의 길이가 3이 아닐 때(3미만, 3초과)
          const regex = /[^1-9]/; 
          if(regex.test(number) || number.length!==3){
            throw new Error("1에서 9까지의 서로 다른 숫자로 이루어진 3자리의 수를 입력하세요");
          }
         
          const input = number.split('');
          for(let i=0;i<input.length;i++){
            input[i] = Number(input[i]);
          }
          //에러 발생
          //2-3. 서로 다른 숫자가 아닌 같은 숫자를 입력했을 때
          if(input[0]===input[1] || input[1]===input[2] || input[2]===input[1]){
            throw new Error("1에서 9까지의 서로 다른 숫자로 이루어진 3자리의 수를 입력하세요");
          }
                
          //3. 입력받은 숫자 체크 
          result = await this.check(computer, input);  
        }
       
        //4. quit 

        MissionUtils.Console.print("게임종료");
        const regex = /[^1-2]/;
        const number = await this.quit();
        if(regex.test(number) || number.length!==1){
          throw new Error("1 또는 2를 입력하세요");
        }else{
          if(Number(number) ===2) flag =2;
        }
      }
      
    }
    catch(error){
      //console.error(error.message);
      MissionUtils.Console.print(error.message);
    }
   
    
  }
  async start(){
    MissionUtils.Console.print("<<<<<<<⚾️123456789⚾️>>>>>>>>");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  async getNumber(){
      try{
        const number = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");    
        return number;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
  };
  async quit(){
    try{
      const number = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      return number;
    } catch(error){
      MissionUtils.Console.print(error.message);
    }
  }
  async check(computer,input){
    let ball = 0;
    let strike = 0;
    let output ="";
    //ball, strike 계산
    for(let i=0;i<input.length;i++){
      if(computer[i] === input[i]){
        strike +=1;
      }
      else if(computer.includes(input[i])){
        ball += 1;   
      }
    }
    if(ball){
      output += `${ball}볼`
    }
    if(strike){
      output += output.length ? ` ${strike}스트라이크`:`${strike}스트라이크`
    }
    if(ball ===0 && strike ===0){
      output = `낫싱`;
    }
    MissionUtils.Console.print(output);

    if(strike === 3){
      output = `3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
      MissionUtils.Console.print(output);
      return SUCCESS;
    }else{
      return FAIL;
    }
  }
  

  }  

  

//}
const app = new App();
app.play();
export default App;


