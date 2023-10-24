import { Console, Random } from "@woowacourse/mission-utils";

class App  {

  constructor() {
    this.computerNum = this.pickNumber();
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async play() {
   
    console.log(this.computerNum);
    var inputValid = /^[1-9]{3}$/; //1에서 9까지의 숫자 3자리 검사하는 정규식
    let input;
    
    try{
      input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
      if(!inputValid.test(input)) { 
        if(input.includes(' ')) { //3자리 숫자를 입력했지만 공백이 포함된 경우 error
          throw new Error('[ERROR] 띄어쓰기(공백) 없이 입력해주세요.');
        } else {
          throw new Error('[ERROR] 1부터 9까지의 서로 다른 3자리 숫자를 입력해주세요.');
        }
        //1에서 9까지 3자리 숫자가 아닌 경우
        
      }
      //3자리 수를 입력해서 검사를 통과했지만 중복된 수가 있는 경우   
      if (new Set(input).size !== 3) { 
        throw new Error('[ERROR] 중복되지 않은 서로 다른 3자리 숫자를 입력해주세요.');
      }
      if (!inputValid.test(input) || new Set(input).size !== 3) {
        // 에러가 발생하면 프로그램을 종료
        return;
      }
      return this.getHint(this.computerNum,input);
     } catch(error) {
        console.error(error.message);
      }
     
    
    //console.log(input);
    

  //   Console.readLine('숫자를 입력해주세요 : ', input => {
  //     this.validateInput(input);
  // });
    //this.startGame();
    
  
  }

  startGame() {
    
  
      
  
   }


  pickNumber() {
    //console.log(3);
    const answerArr = [];
    while (answerArr.length < 3) {
      const pickNumber = Random.pickNumberInRange(1,9); //1~9까지의 숫자 1개 반환
      if (!answerArr.includes(pickNumber)) { 
        //랜덤 선택된 숫자가 이미 선택된 숫자와 중복되지 않는다면, 선택
        answerArr.push(pickNumber);
      }
    }
    const answer = answerArr.join(''); //배열의 원소를 문자열로 ex) 123

    
    return answer;
    
  }

    


getHint(keyNums, playerNums) {
  let strikes = 0;
  let balls = 0;
  //console.log(4);
  for (let n = 0; n < 3; n+=1) {
    //같은 수가 같은 자리에 있는 경우
    if (Number(keyNums[n]) === Number(playerNums[n])) {
      strikes += 1;
          
    }
    //같은 수가 존재하지만, 같은 자리에는 없는 경우
    if (Number(keyNums[n]) !== Number(playerNums[n]) && keyNums.includes(Number(playerNums[n]))) {
      balls += 1;
      
    }
  }

  if (strikes ===3) {
    Console.print("3스트라이크");
    return this.correctAnswer();
  }

  Console.print(this.printHint(balls,strikes));
  
  return this.play();
}

printHint(balls, strikes) {
  //console.log(5);
  if(balls && strikes) return `${balls}볼 ${strikes}스트라이크`; //b, s 둘다 0이 아님
  if(balls) return `${balls}볼`; //b>=1 s=0
  if(strikes) return `${strikes}스트라이크`; //s>= b=0 
  
  
  return  '낫싱'; //s=0 b=0
  
 }

 async correctAnswer(key,pick) {
  //  this.validateInput(pick);
  //  this.getHint
  
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  //Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', selectNum => {
  //   switch(Number(selectNum)) {
  //     case 1:
  //       return this.restartGame();
  //     case 2:
  //       return this.closeGame();
  //     default:
  //       throw new Error('[ERROR] 1 또는 2를 입력해야 합니다.');
  //   }
  // });

  try {
    const selectNum = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); 
    if(selectNum==='1') {
      return this.restartGame();
    } 
    if(selectNum==='2') {
      return;
    } else {
      throw new Error('[ERROR] 1 또는 2를 입력해야 합니다.');
    }
  } catch (error) { 
    console.error(error.message);
  }
  }
   

   restartGame() {
    this.computerNum = this.pickNumber();
    this.play();
   }

   closeGame() {
    process.stdout.write('게임 종료');
    // process.on('exit', (code) => {
    //   console.log(`프로그램이 종료됩니다. 종료 코드: ${code}`);
    // });
   }


  }


const app = new App();
app.play();



export default App;
