import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {

    try {
      const GOAL = await this.getComNum();
      await this.tryPlay(GOAL)

      //Console.print(`유저가 입력한 숫자 : ${number} ${Array.isArray(number)}`);
    } catch (error) {
      Console.print(`에러 발생: ${error.message}`);
      await this.play()
    }
  }

  async getComNum() {
    const GOAL = [];
    while (GOAL.length < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!GOAL.includes(RANDOM_NUMBER)) {
        GOAL.push(RANDOM_NUMBER);
      }
    }
    return GOAL;
  }
  async tryPlay(GOAL) {
    let number = await this.getUserNum(GOAL);

    if(number === 0) {
      await this.tryPlay(GOAL)
    }else{
      await this.compare(GOAL, number);
    }
  }
  async getUserNum(GOAL) {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    console.log("??!?!")
    const EXIST = new Set();

    for (const digit of number) {
      EXIST.add(digit);
    }

    if(EXIST.size === 3){
      const toInt = Array.from(EXIST).map((item)=>{
        return parseInt(item)
      })
      console.log("toplay: return")
      return toInt;
    }else{
      Console.print(`${number} 의 길이가 3 이 아니거나 중복숫자가 있습니다. ${EXIST.size}`);
      return 0;
    }

  }
  async userWin(){
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
  }
  async compare(GOAL, number){
    let strike = 0;
    let ball = 0;

    console.log(GOAL);
    console.log(number)

    for(let i=0; i<GOAL.length; i++){
      if(GOAL[i]===number[i]){
        strike++;
      }else{
        for(let j=0; j<number.length; j++){
          if(GOAL[i] === number[j]){
            ball++;
          }
        }
      }
    }

    console.log(GOAL)
    console.log(number)
    console.log(strike)
    console.log(ball)

    if(strike===3){
      console.log("user win")
      this.userWin();
    }else{
      console.log("user fail")
      this.tryPlay(GOAL);
    }
  }
}


console.log("loaded App.js");
const app = new App;
app.play();


export default App;



/** const EXIST = new Set();

      for (const digit of number) {
        EXIST.add(digit);
      }

      if (EXIST.size !== 3 || number.length > 3) {
        Console.print(`${number} 의 길이가 3 이 아니거나 중복숫자가 있습니다. ${EXIST.size}`);
        throw new Error("유저가 입력한 숫자가 포맷을 벗어남");
      } */