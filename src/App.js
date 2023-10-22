import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  //게임시작
  start(){ 
    Console.print("숫자 야구 게임을 시작합니다."); 
  }
  
  //랜덤으로 숫자 생성하기
  randomNumber() {
    const computerArr = [];
    while (computerArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    const computer =  computerArr.join('');
    return computer;
  }

  //사용자로부터 값 입력받기
  async getNumbers() {
      const numbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
      Console.print('');
      return numbers;
  }
  
  //값이 유효한지 확인

  async play() {
    this.start();
    this.getNumbers();
  }
}

export default App;