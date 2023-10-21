import { Console, MissionUtils } from "@woowacourse/mission-utils";
// Console.readLineAsync
// Console.print

class App {
  async play(computer) {
    // const computerScore = computer;
    Console.print("숫자 야구 게임을 시작합니다.");
    while (1) {
      try {
        const userScore = await Console.readLineAsync('숫자를 입력해주세요 : ');
        const user = userScore.split('').map(Number);
        if(validator(computer,user) == 0) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }else{
          continue;
        }
      } catch (error) {
        // reject 되는 경우
      }
      // Console.print("숫자를 입력해주세요 : "+user.join(''));
    }
    try {
      const status = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if(status == 1){
        Console.print("1입력");
        return app.play(ranNum);
      }else if(status == 2){
        Console.print("리얼 종료");
      }  
    } catch (error) {
      
    }
  }
}
const randomNumber = ()=> {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

const validator = (computer, user) => {
  // Console.print(computer);
  // Console.print(user);
  let score = [0,0];
  for(let i=0;i<3;i++){
    if(computer[i]===user[i]){
      score[0]+=1;
    }else if(computer.includes(user[i])){
      score[1]+=1;
    }
  }
  // Console.print(score);
  if(score[0]==0 && score[1]==0){
    Console.print("낫싱");
  }else if(score[0]==3){
    Console.print(`${score[0]}스트라이크`);
    return 0;
  }else if(score[0]==0 && score[1]>0){
    Console.print(`${score[1]}볼`);
  }else if(score[0]>0 && score[1]==0){
    Console.print(`${score[0]}스트라이크`);
  }else{
    Console.print(`${score[1]}볼 ${score
      [0]}스트라이크`);
  }
}

const ranNum = randomNumber();
const app = new App();
app.play(ranNum);
export default App;
