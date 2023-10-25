import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {

    try {
      const GOAL = await this.getComNum();
      const number = await this.getUserNum();

      const testg = [1,2,3];
      if(testg === number){
        console.log("goal=number")
      }else{
        console.log(`${GOAL} ${number}`);
      }

      //Console.print(`유저가 입력한 숫자 : ${number} ${Array.isArray(number)}`);
    } catch (error) {
      Console.print(`에러 발생: ${error.message}`);
      this.play()
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
  async getUserNum() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    const EXIST = new Set();

    for (const digit of number) {
      EXIST.add(digit);
    }

    if(EXIST.size === 3){
      return Array.from(EXIST);
    }else{
      Console.print(`${number} 의 길이가 3 이 아니거나 중복숫자가 있습니다. ${EXIST.size}`);
      this.getUserNum();
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