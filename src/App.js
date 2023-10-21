import {MissionUtils,Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const Target = getRandom();
    Console.print(Target.join(''));
    const input = await getInput();
    Console.print(input);
    // const Answer = getInput();
    // console.log(Answer);


    return;
  }
}

export default App;

const app = new App();
app.play();

function getRandom(){
  const Target = [];
  var count = 3;
  while(count>0){
    var a;
    a = Random.pickNumberInRange(1,9);
    if(Target.includes(a)){
      continue;
    }
    Target.push(a);
    count--;
  }
  return Target;
}

async function getInput(){
  
  const Target = [];
  while(true){
    let userInput = await Console.readLineAsync("입력 ㄱㄱ : ");
    Console.print(userInput);
    if(userInput.length!==3){
      throw new Error("세 자리가 아닙니다.");
    }
    for(let i=0; i<3; i++){
      const digit = parseInt(userInput[i]);
      if(isNaN(digit) || digit===0){
        throw new Error("1~9의 숫자만 입력해주세요.")
      }
      if(Target.includes(digit)){
        throw new Error("중복되는 숫자가 입력되었습니다.");
      }
      Target.push(digit);
      
    }
    return userInput;
  }
}

function getAnswer(){

}