import { Console } from "@woowacourse/mission-utils";
import RandomNumber from "./RandomNumber.js";
import Exception from "./Exception.js";
import MESSEAGE from "./Constants.js";
import Baseball from "./Baseball.js";



class App {

  async play() {
    Console.print(MESSEAGE.START_GAME);
    const result1 = await this.start(RandomNumber.makeRandomNumber())
    const result2 = await this.choice(result1);
    return result2       
  }
  
  //숫자를 입력받고 baseball 결과를 리턴(promise) ex 1볼 1스트라이크 //입력받는 에러 처리함
  async numberAsking(random) {
    try {
      const answer = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(answer)) throw("[ERROR] 숫자가 잘못된 형식입니다.")
      const baseball = new Baseball(answer, random)
      const result = baseball.outcome()
      Console.print(result);
      return result;
    } catch(error) {
      throw new Error(error)
    }
  }
//재시작 또는 종료를 입력받고 입력받은 결과를 리턴(promise) ex 1 , 2 //입력받는 에러 처리함
  async choiceAsking() {
    try {
      const answer = await Console.readLineAsync("");
      if(answer !== MESSEAGE.EXIT && answer !== MESSEAGE.RESTART) throw("[ERROR] 숫자가 잘못된 형식입니다.")
      return answer;
    } catch(error) {
      throw new Error(error)
    }
  }

  async start(random) {

    const result = await this.numberAsking(random)
    if(result === MESSEAGE.STRIKEOUT) return result
    if(result !== MESSEAGE.STRIKEOUT) {
      const result2 = await this.start(random);
    }
  }

  async choice(success) {
    
    Console.print(MESSEAGE.CELEBRATE_END);
    Console.print(MESSEAGE.RESTART_EXIT);
    const result = await this.choiceAsking();
    if(result === MESSEAGE.EXIT) return 1
    
    this.replay();
  }

  async replay() {
    const result1 = await this.start(RandomNumber.makeRandomNumber());
    const result2 = await this.choice(result1); 
  }
  
  
}




/*돌아가는 쓰레기 완성
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const randomNum = RandomNumber.makeRandomNumber();
    
    
    while(1){
      const inputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")

      const baseball = new Baseball(inputNum, randomNum)
      Console.print(baseball.outcome());
      if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
        Console.print(MESSEAGE.CELEBRATE_END);
        Console.print(MESSEAGE.RESTART_EXIT);
        break;
      }
    }

    const answer = await Console.readLineAsync("");

    if(answer === MESSEAGE.RESTART) {

      while(1) {
        const randomNum2 = RandomNumber.makeRandomNumber();
        
        while(1){
          const inputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
          if(!Exception.isNonException(inputNum2)) throw new Error("[ERROR]")
  
          const baseball = new Baseball(inputNum2, randomNum2)
          Console.print(baseball.outcome());
          if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
            Console.print(MESSEAGE.CELEBRATE_END)
            Console.print(MESSEAGE.RESTART_EXIT);
            break;
          }
        }
  
        const answer2 = await Console.readLineAsync("");
        if(answer2 === MESSEAGE.EXIT) break;
        else if(answer2 !== MESSEAGE.EXIT && answer2 !== MESSEAGE.RESTART) throw new Error("[ERROR]")
      }
      this.end();

    }else if(answer === MESSEAGE.EXIT) this.end()
    else{
      throw new Error("[ERROR]")
    }
    

  }

  end() {
    return
  }
}
*/




/*awit 순차적으로하려햇으나 힘든듯
class App {


  randomNumber;

  async play() {

    Console.print(MESSEAGE.START_GAME);
    let randomNum = RandomNumber.makeRandomNumber()
    try{
            
      while(1) {

        const result1 = await this.gaming(randomNum)
        const newRandomNum = await this.
        
        
      }

      
    }catch(){

    }finally{
      return
    }
  }


  async gaming(random) {
    try{
      const user = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(user)) throw("[ERROR]")
      const baseball = new Baseball(user, random);
      const result = baseball.outcome(user, random);
      return result
    }catch(err){
      throw new Error(err);
    }
  }

}
*/

/*
// then chain 방식 실패
class App {
  play() {
    Console.print(MESSEAGE.START_GAME)
    this.gaming(RandomNumber.makeRandomNumber());
  }

  inputNumberAsking() {
    return Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
  }

  restartAsking() {
    return Console.readLineAsync('');
  }
//then chain 이용하기
  gaming(random) {
    this.inputNumberAsking()
    .then((answer) => {
      this.checkError(answer);
      const result = this.baseball(answer, random)
      Console.print(result)
      return result
    })
    .then((result) => this.strikeout(result, random))
  }

  strikeout(result, random) {
    if(result === MESSEAGE.STRIKEOUT) this.end();
    if(result !== MESSEAGE.STRIKEOUT) this.gaming(random);
    
  }

  baseball(input,random) {
    const result = new Baseball(input, random);
    return result.outcome();
  }

  checkError(input) {
    if(!Exception.isNonException(input)) throw new Error("[ERROR]")
  }  
  

  end() {
    Console.print(MESSEAGE.CELEBRATE_END);
    Console.print(MESSEAGE.RESTART_EXIT);
    this.restartAsking()
    .then((answer) => {
      if(answer === MESSEAGE.RESTART) this.gaming(RandomNumber.makeRandomNumber());
      if(answer !== MESSEAGE.RESTART && answer !== MESSEAGE.EXIT) throw new Error("[ERROR]")
      if(answer === MESSEAGE.EXIT) this.exit()
    })
    

  }

  exit() {
    return
  }
}
*/

/*이래도 안되나 ㅠ
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const radomNum = RandomNumber.makeRandomNumber();
    const inputNum = await Console.readLineAsync(MESSEAGE.START_GAME);
    if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]");
    this.gaming(inputNum,radomNum);
  }

  async gaming(inputNum, randomNum) {
    try{
      Console.print(this.gameResult(inputNum, randomNum));
      if(this.gameResult(inputNum, randomNum) === MESSEAGE.STRIKEOUT) this.end()
      if(this.gameResult(inputNum, randomNum) !== MESSEAGE.STRIKEOUT) {
        const newInputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
        this.gaming(newInputNum, randomNum);
      }
      

    }catch(e){
      throw new Error(e)
    }

  }

  

  async end() {
    Console.print(MESSEAGE.CELEBRATE_END);
    Console.print(MESSEAGE.RESTART_EXIT);
    const answer = await Console.readLineAsync("");
    
    if(answer !== MESSEAGE.RESTART && answer !== MESSEAGE.EXIT) throw new Error("[ERROR]")
    if(answer === MESSEAGE.RESTART) {
      const newInputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      this.gaming(newInputNum2, RandomNumber.makeRandomNumber())
    }
    if(answer === MESSEAGE.EXIT) this.exit()
  }

  gameResult(inputNum, RandomNum) {
    const baseball = new Baseball(inputNum, RandomNum);
    return baseball.outcome()
  }

  exit() {
    return
  }
}
*/



/*스파게이트코드 but test 통과
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const randomNum = RandomNumber.makeRandomNumber();
    
    while(1){
      const inputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")

      const baseball = new Baseball(inputNum, randomNum)
      Console.print(baseball.outcome());
      if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
        Console.print(MESSEAGE.CELEBRATE_END);
        break;

      }
    }

    Console.print(MESSEAGE.RESTART_EXIT);
    
    const answer = await Console.readLineAsync("");

    if(answer === MESSEAGE.RESTART) {
      const randomNum2 = RandomNumber.makeRandomNumber();
      while(1){
        const inputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
        if(!Exception.isNonException(inputNum2)) throw new Error("[ERROR]")

        const baseball = new Baseball(inputNum2, randomNum2)
        Console.print(baseball.outcome());
        if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
          Console.print(MESSEAGE.CELEBRATE_END)
          break;
        }
      }

      Console.print(MESSEAGE.RESTART_EXIT);
      const answer2 = await Console.readLineAsync("");
      if(answer2 === MESSEAGE.EXIT){
        this.end();
      }
    }
    if(answer === MESSEAGE.EXIT) this.end()

  }

  end() {
    return
  }
}
*/




/* 첫완성 하지만 테스트 통과 x 근데 예외처리는 통과
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);                                                      

    const firstRandom = RandomNumber.makeRandomNumber();                                       
    const inputNum =  await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);                         
    
    this.findError(inputNum)                            
    this.calculate(inputNum, firstRandom)                                                          
  }

  calculate(input,random) {
    const baseball = new Baseball(input, random);                                              
    const result = baseball.outcome();
    Console.print(result);
  
    if(result === MESSEAGE.STRIKEOUT) this.choice()
    if(result !== MESSEAGE.STRIKEOUT) this.gaming(random)
  }  

  async gaming(random) { 
    const inputss = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
    this.findError(inputss);  
    this.calculate(inputss, random)
    
  }

  async choice() {
    const inputs = await Console.readLineAsync(`${MESSEAGE.CELEBRATE_END}\n${MESSEAGE.RESTART_EXIT}\n`);
    this.choiceHelp(inputs);  
  }

  findError(inputNum) {
    if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")
  }

  choiceHelp(inputNum) {
    if(inputNum === MESSEAGE.RESTART){
      this.gaming(RandomNumber.makeRandomNumber());
    }else if(inputNum === MESSEAGE.EXIT) {
      finish();
    }else{
      throw new Error("[ERROR]")
    }

  }
}

function finish() {
  return
}
*/





export default App;
