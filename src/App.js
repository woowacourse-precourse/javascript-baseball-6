import * as MissionUtils from '@woowacourse/mission-utils';
const { Console, Random } = MissionUtils;

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  async gameStart(){
    await this.setComputer();
  }

   // 컴퓨터 숫자 생성
   async setComputer(){
    const NUMBERS = [];
    
    while(NUMBERS.length < 3){
      let num = Random.pickNumberInRange(1, 9);
      if(!NUMBERS.includes(`${num}`)){
        NUMBERS.push(`${num}`);
      }
    };

    this.#computer = NUMBERS;
  }

}

export default App;
