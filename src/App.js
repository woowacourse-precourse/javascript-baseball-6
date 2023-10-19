import {MissionUtils} from "@woowacourse/mission-utils";
class App {
  async play() {
    this.start();
  }
  start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    let result = 0;
    //while(result < 3){
      result = this.check(computer);
      if(result === 3 ){
        MissionUtils.Console.print("게임종료");
        //break;
      }
      //MissionUtils.Console.print(result);
    //}
    
  }
  error(){
    MissionUtils.Console.print("에러테스트");
  }
  async getNumber(){
      try{
        const number = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        return number;
      } catch(error){
        
      }
  };
  check(numbers){
    console.log(numbers);
    let ball = 0;
    let strike = 0;
    let output ="";
    let input = [];
    
      this.getNumber().then((res) =>{
        input = res.split('');
        //형변환 
        for(let i=0;i<input.length;i++){
          input[i] = Number(input[i]);
        }
        
        //ball, strike 계산
        for(let i=0;i<input.length;i++){
          if(numbers.includes(input[i])){
            ball += 1;
              if(numbers[i] === input[i]){
                ball -= 1;
                strike +=1;
              }
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
      .catch((msg)=>{
        console.log(msg);
      })
    }
    
      
  }  

  

//}
const app = new App();
app.play();
export default App;


