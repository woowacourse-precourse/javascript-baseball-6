import { Console, MissionUtils } from "@woowacourse/mission-utils";
// Console.readLineAsync
// Console.print

class App {
  async play(computer, user) {
    const computerScore = computer();
    const status = 0;
    Console.print("숫자 야구 게임을 시작합니다.");
    while (1) {
      Console.print("숫자를 입력해주세요 : "+user.join(''));
      validator(computerScore,user);
      if(validator(computerScore,user) == 0) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    status = Console.readLineAsync();
    if(status == 1){
      return new app.play(randomNumber,user);
    }else if(status == 2){
      Console.print("리얼 종료");
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
  const computer2 = computer;
  const user2 = user;
  Console.print(computer2);
  Console.print(user2);
  let score = [0,0];
  for(let i=0;i<3;i++){
    if(computer2[i]===user2[i]){
      score[0]+=1;
    }else if(computer2.includes(user2[i])){
      score[1]+=1;
    }
  }
  Console.print(score);
  if(score[0]==0 && score[1]==0){
    Console.print("낫싱");
    return 0;
  }else if(score[0]==0 && score[1]>0){
    Console.print(`${score[1]}볼`);
    return 0;
  }else if(score[0]>0 && score[1]==0){
    Console.print(`${score[0]}스트라이크`);
    return 0;
  }else{
    Console.print(`${score[1]}볼 ${score
      [0]}스트라이크`);
      return 0;
  }
}

const user = [4,5,6];
// const userNumber = MissionUtils.answers;
// user.push(userNumber);

const app = new App();
app.play(randomNumber,user);
export default App;
