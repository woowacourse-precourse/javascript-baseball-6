import {Random, Console} from "@woowacourse/mission-utils"

class App {
  async play() {

    const GOAL = [];

    while(GOAL.length <3){
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9)
      if(!GOAL.includes(RANDOM_NUMBER)){
        GOAL.push(RANDOM_NUMBER)
      }
    }

    getUserNum()
      .then(
        (number)=>{
          const EXIST = new Set();

          for(const digit of number){
            EXIST.add(digit)
          }

          if(EXIST.size !== 3){
            Console.print(`${number} 현재넘버는 에러 발생 ${EXIST.size}`)
            throw new Error("중복을 제외한 숫자의 길이가 3 이 아님");
          }

          return number;
        } 
      )
      .then(
        (number)=>{
          Console.print(`${number}넘버넘버 덴2`)
        }
      )
      .catch(

      )
    
    Console.print(GOAL)

  }
}

async function getUserNum() {

  const NUM = await Console.readLineAsync("숫자를 입력해주세요 : ");
  Console.print(`${NUM} 유저가 입력한 숫자`)
  return NUM
}

export default App;




