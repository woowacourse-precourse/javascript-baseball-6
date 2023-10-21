import {MissionUtils,Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const Target = getRandom();
    var key=1;
    while(key){
      const input = await getInput();
      Console.print(input);
      key = getCheck(Target, input);
    }
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
  return Target.join('');
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

function getCheck(target, userInput){
  if(target===userInput){
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return 0;
  }
  var ball = 0;
  var strike = 0;
  for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
      if(target[i]==userInput[j]){
        if(i==j){
          strike+=1;
        }
        else{
          ball+=1;
        }
      }
    }
  }
  if(!ball&&!strike){
    Console.print('낫싱');
  }
  else if(ball&&!strike){
    Console.print(`${ball}볼`);
  }
  else if(!ball&&strike){
    Console.print(`${strike}스트라이크`);
  }
  else{
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  return 1; 
}