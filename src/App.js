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
      new Set(number).size !== 3|| //중복된 수
      isNaN(+number) //숫자가 아님
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

  //params: 길이가 3인 서로다른 숫자의 배열
  async playGame(COMPUTER){
    //3스트라이크가 나올때 까지 반복
    while(true){
      //2. 3자리 숫자 입력
      const MYNUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if(this.isInValidNumber(MYNUMBER)){
          throw new Error("[ERROR] 유효하지 않은 숫자입니다.");
      }
  
      //3. 힌트 결과 계산
      const {BALL,STRIKE} = this.getHintCount(MYNUMBER, COMPUTER);
  
  
      //4. 힌트 출력
      this.printHint(BALL, STRIKE);
  
      //5. 재시작 - 3스트라이크 여부
      if(STRIKE === 3){
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const RETRY = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ");
        if(RETRY !== '1' && RETRY !== '2') throw new Error('[ERROR] 유효하지 않는 숫자입니다.');
        return RETRY;
      }
    }
  }

  getComputerNumber(){
    const COMPUTER = [];
      while (COMPUTER.length < 3) {
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(NUMBER)) {
          COMPUTER.push(NUMBER);
        }
      }

      return COMPUTER;
  }

  async play() {
    while(true){
      //1. 컴퓨터 숫자 저장
      const COMPUTER = this.getComputerNumber();

      //한 게임 시작 및 재시작 SIGNAL return
      const RETRY = await this.playGame(COMPUTER);

      //1인경우 -> while, 2인경우 break로 시스템 종료
      if(RETRY === '2') break;
    }
    
  }
}

export default App;
