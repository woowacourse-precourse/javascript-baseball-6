import {Console, MissionUtils, Random} from '@woowacourse/mission-utils';

class App {

  printHint(BALL, STRIKE){
    let result_array = [];
    if(BALL >= 1) result_array.push(`${BALL}볼`);
    if(STRIKE >= 1) result_array.push(`${STRIKE}스트라이크`);
    if(BALL === 0 && STRIKE === 0) result_array.push('낫싱');
    const RESULT_STRING = result_array.join(' ');

    Console.print(RESULT_STRING);
  }

  //params: 문자 타입의 3자리 숫자
  isInValidNumber(number) {
    const condition = (
      number.length > 3 || // 3자리 초과
      number.includes('0') || //0포함
      new Set(number).size !== 3 //중복된 수
    )

    return condition;
  }

  getHintCount(MYNUMBER, COMPUTER){
    let strike = 0;
    let ball = 0;
    MYNUMBER.split('').forEach((number, i)=>{
      if(COMPUTER.includes(+number) && COMPUTER.indexOf(+number) === i) strike++;
      else if(COMPUTER.includes(+number) && COMPUTER.indexOf(+number) !== i) ball++;
    });

    return {STRIKE: strike, BALL: ball};
  }

  async play() {

    //1. 컴퓨터 숫자 저장
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }

    //2. 3자리 숫자 입력
    const MYNUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");
    
    if(this.isInValidNumber(MYNUMBER)){
        throw new Error("[ERROR]");
    }

    //3. 힌트 결과 계산
    const {BALL,STRIKE} = this.getHintCount(MYNUMBER, COMPUTER);


    //4. 힌트 출력
    this.printHint(BALL, STRIKE);


  }
}


export default App;
