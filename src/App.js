import { MissionUtils,Console } from "@woowacourse/mission-utils";
class App {
  generateNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
      if (!computer.includes(number)) {
      computer.push(number);
      }
    }
    return computer
  }
  
  async getNumber() {
    const number = await Console.readLineAsync('숫자를 입력해주세요.');
    return number;
  }
  
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computer = this.generateNumber();
    while (true){
      try {
        const number =  await this.getNumber();
        this.isPossible(number);
        const result = this.check(computer,number);
        Console.print(result);
        if (result === "3스트라이크") {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const restart = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
          if(restart === '1'){
            computer = this.generateNumber();
            continue;
          }
          else if (restart === "2"){
            break;
          }
          else{
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
          }
        }
      }
      catch(error){
        throw new Error(`${error.message}`);
      }
    }
  }
  isPossible(number){
    if (
      number.length !== 3 ||
      number[0] === number[1] ||
      number[0] === number[2] ||
      number[1] === number[2]
    )
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  
  check(computer, user) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (computer[i] === user[i]) strike += 1;
      else if(computer.includes(user[i])){
        ball+=1
      }
    }
    if (strike === 0 && ball === 0) return "낫싱";
    else if (strike === 3) return `${strike}스트라이크`;
    else if (ball === 3) return `${ball}볼`;
    else return `${ball}볼 ${strike}스트라이크`;
  }
}

export default App;
