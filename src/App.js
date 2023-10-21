import {Console, MissionUtils, Random} from '@woowacourse/mission-utils';

class App {

  //params: 문자 타입의 3자리 숫자
  isInValidNumber(number) {
    const condition = (
      number.length > 3 || // 3자리 초과
      number.includes('0') || //0포함
      new Set(number).size !== 3 //중복된 수
    )

    return condition;
  }

  getHintCount(mynumber, computer){
    let strike = 0;
    let ball = 0;
    mynumber.split('').forEach((number, i)=>{
      if(computer.includes(+number) && computer.indexOf(+number) === i) strike++;
      else if(computer.includes(+number) && computer.indexOf(+number) !== i) ball++;
    });

    return {strike, ball};
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

    //3. 힌트 결과 계산
    const {ball,strike} = this.getHintCount(mynumber, computer);


    //4. 힌트 출력
    let result_array = [];
    if(ball >= 1) result_array.push(`${ball}볼`);
    if(strike >= 1) result_array.push(`${strike}스트라이크`);
    if(ball === 0 && strike === 0) result_array.push('낫싱');
    const RESULT_STRING = result_array.join(' ');

    Console.print(RESULT_STRING);

  }
}


export default App;
