import {Console, MissionUtils, Random} from '@woowacourse/mission-utils';

class App {

  //params: 문자로 이루어진 배열
  isInValidNumber(number) {
    const condition = (
      number.length > 3 || // 3자리 초과
      number.contain('0') || //0포함
      new Set(number).size !== 3 //중복된 수
    )

    return condition;
  }
  async play() {

    //1. 컴퓨터 숫자 저장
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    //2. 3자리 숫자 입력
    const mynumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
    
    if(this.isInValidNumber(mynumber)){
        throw new Error("[ERROR]");
    }

  }
}


export default App;
