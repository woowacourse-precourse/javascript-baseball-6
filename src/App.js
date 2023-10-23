import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  
  async play() {
    const randoms = randomNumber();
    console.log("숫자 야구 게임을 시작합니다.");
    while (true) {
      // try {
        const answers = await Console.readLineAsync('숫자를 입력해주세요 : ');
        if(answers.length != randoms.length){
          Console.print(answers.length);
          Console.print("[ERROR]");
          continue;
        }
        const user = answers.split('').map(Number);
        if(validator(randoms,user) == 0) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }else{
          continue;
        } 
      // } catch (error) {
        // reject 되는 경우
      // }
    }
    // Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
    //   // console.log(`닉네임: ${answer}`);
    //   if(answer == 1){
    //     Console.print("1입력");
    //     return app.play(ranNum); 
    //   } else if (answer == 2){
    //     Console.print("게임 종료");
    //   }else{
    //     Console.print("계속하시려면 1, 종료하시려면 2 를 눌러주세요");
    //   }
    // });
    // try {
      const status = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if(status == 1){
        Console.print("1입력");
        return app.play();
      }else if(status == 2){
        Console.print("게임 종료");
      }else{
        Console.print("[ERROR]")
      }
    // } catch (error) {
    // }
  }
}
const randomNumber = ()=> {
  const computer = [];
  while (computer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

const validator = (computer, user) => {
  let score = [0,0];
  for(let i=0;i<3;i++){
    if(computer[i]===user[i]){
      score[0]+=1;
    }else if(computer.includes(user[i])){
      score[1]+=1;
    }
  }
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

const app = new App();
app.play();
export default App;
