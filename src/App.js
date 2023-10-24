import {Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while(1){
      const Target = getRandom();
      var key=1;
      while(key){
        const input = await getInput();
        key = getCheck(Target, input);
      }
      let restartInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      if(restartInput === '1'){
        
      }
      else if(restartInput === '2'){
        break;
      }
      else{throw new Error("[ERROR] 1 또는 2를 입력하세요");}
    }
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
    let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if(userInput.length!==3){
      throw new Error("[ERROR] 세 자리가 아닙니다.");
    }
    for(let i=0; i<3; i++){
      const digit = parseInt(userInput[i]);
      if(isNaN(digit) || digit===0){
        throw new Error("[ERROR] 1~9의 숫자만 입력해주세요.")
      }
      if(Target.includes(digit)){
        throw new Error("[ERROR] 중복되는 숫자가 입력되었습니다.");
      }
      Target.push(digit);   
    }
    return userInput;
  }
}

function getCheck(target, userInput){
  if(target===userInput){
    Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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