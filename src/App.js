import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
    let computerNumber = await this.createNumber();
    
    
    while (true) {
      let input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
      let userNumbers = this.setNumber(input);
      const result = await this.checkNumber(userNumbers, computerNumber);
      MissionUtils.Console.print(result);
    
      if (result === '3스트라이크') {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const replay = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
        );

        const restart = replay?.split("").map(Number);
        if(restart.length !==1){
          throw new Error("[ERROR]");
        } 
        else if (replay === "1") {
          computerNumber = await this.createNumber();
        } else if (replay === "2") {
          MissionUtils.Console.print("게임 종료");
          return
        }
      }
    }
}

async getUserNumbers() {
  while (true) {
    
    const userNumbers = input?.split("").map(Number);
    if (userNumbers.length !== 3 || 
        userNumbers[0] === userNumbers[1] ||
        userNumbers[1] === userNumbers[2] ||
        userNumbers[2] === userNumbers[0]) {
      throw new Error("[ERROR]");
    } else {
      return userNumbers;
    }
  }
}

setNumber(inputNumber){
  let Num = inputNumber?.split("").map(Number);
  if(Num.length !==3){
      throw new Error("[ERROR]");
  }else if(
      Num[0] === Num[1] ||
      Num[1] === Num[2] ||
      Num[2] === Num[0]){
      throw new Error("[ERROR]");
  }else{
      return Num  
  }
}

createNumber() {
  let computerNumber = []
  while(computerNumber.length<3){
      let number = MissionUtils.Random.pickNumberInRange(1,9)
      if(!computerNumber.includes(number)){
          computerNumber.push(number)
      }
  }
  return computerNumber
}

checkNumber(setNumber,computerNum){
  let message = ''
  let ball = 0
  let strike = 0
  for(let i = 0; i<3; i++){
      if (setNumber.includes(computerNum[i])) {
          if (setNumber[i] === computerNum[i]) {
            strike++;
          } else {
            ball++;
          }
        }
  }
  
  if(ball !== 0){
      message += `${ball}볼`
  }
  if(strike !== 0){
      if(message !== ''){
          message += ' '
      }
      message += `${strike}스트라이크`
  }
  if(ball === 0 && strike === 0){
      message = '낫싱'
  }
  return message
}
}

const app = new App;
app.play;

export default App;