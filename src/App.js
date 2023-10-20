import {MissionUtils} from "@woowacourse/mission-utils";
const ERR_CODE = 100;
const FAIL = 0;
const SUCCESS = 1;


class App {
  async play() {
    let flag = 0;
    let result = FAIL;
    try{
      while(flag===0){
        let result = 0;
        //1. start - 랜덤값 설정
        const computer = await this.start();
        console.log(computer);
  
        //반복구문 - 2,3
        //2. 숫자입력받기 
        while(result!==SUCCESS){
          const number = await this.getNumber();
          const input = number.split('');
          //형변환 
          for(let i=0;i<input.length;i++){
            input[i] = Number(input[i]);
          }
          if(input[0]===input[1] || input[1]===input[2] || input[2]===input[1]){
            throw new Error("같은 숫자 입력 에러");
          }
          
         
  
          //3. 입력받은 숫자 체크 
  
          result = await this.check(computer, input);
          
        }
       


        //4. quit 

        MissionUtils.Console.print("게임종료");
        await this.quit().then((num)=>{
          if(Number(num) === 2) {
            flag =1; 
          }else if(Number(num) !==1 ){
            flag =3;
            this.error();
          }
        })
      }
      
    }
    catch(error){
      console.error(error.message);
    }
   
    
  }
  async start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  error(){
    MissionUtils.Console.print("에러테스트");
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
      
    }
  }
  async check2(numbers){
    let ball = 0;
    let strike = 0;
    let output ="";
    let input = [];
    let count =0;
    while(strike < 3){
      ball =0;
      strike =0;
      output="";
      /*
      await this.getNumber().then((res) =>{
        //console.log(res);
        input = res.split('');
        //형변환 
        for(let i=0;i<input.length;i++){
          input[i] = Number(input[i]);
        }
        if(input[0]===input[1] || input[1]===input[2] || input[2]===input[1]){
          throw new Error("같은 숫자 입력 에러");
        }
        //ball, strike 계산
        for(let i=0;i<input.length;i++){
          if(numbers[i] === input[i]){
            strike +=1;
          }
          else if(numbers.includes(input[i])){
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
        }
        return strike;
      })
      .catch((error)=>{
        MissionUtils.Console.print(error.message);
        return ERR_CODE;
      })
     */
    
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


