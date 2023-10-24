import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {// 게임시작 (경우에 따라 재시작 가능하게)
    //게임 시작문구 출력
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let computernumb = this.createComputernumb(); // 컴퓨터 입력값 받기
    let usernumb = [];
    let coin = '1';

    while(coin === '1'){
      try { //사용자 숫자 입력받기 (예외처리)
        usernumb = await this.getUserNumber();
      } catch (e) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }

      let [ball, strike] = this.checkanswer(computernumb, usernumb); //결과값 도출
      this.printBallStrike(ball, strike); //결과값 출력

      if(strike === 3){ //맞춘 경우 게임의 재시작여부 판단
          try {
            coin = await this.getUserCoin();
          if(coin === '1'){
            computernumb = this.createComputernumb();
          }
          } catch (e) {
            throw new Error('[ERROR] 1과 2중 하나의 숫자만 입력해주세요');
          }
      }
    }
    
  }

  createComputernumb(){ //컴퓨터 랜덤번호 생성
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
      } 
    }
    return COMPUTER;
  }

  async getUserNumber() { //유저에게 입력받아오기.
      let usernumb = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      usernumb = usernumb.split('').map(el=>Number(el));
      if(usernumb.length!==3 || usernumb.filter(el => isNaN(el)).length !== 0){
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      else
      {
        return usernumb;
      }
  }
  async getUserCoin() { //유저에게 입력받아오기.
   let usercoin= await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      usercoin = usercoin.split('');
      if(usercoin.length === 1 && isNaN(usercoin[0]) === false){
        return usercoin[0];
      }
      else
      {
        throw new Error('[ERROR] 1과 2중 하나의 숫자만 입력해주세요');
      }
  }

  checkanswer(computernumb, usernumb) { //n볼 m스트라이크 판별
    let ball = 0;
    let strike = 0;
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(usernumb[i] === computernumb[j]){
          if(i===j){
            strike++;
            break;
          }
          ball++;
          break;
        }
      }
    }
    return [ball, strike];
  }
  
  printBallStrike(ball, strike){

    if(strike===3){
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    else if(ball===0 && strike ===0){
      MissionUtils.Console.print('낫싱');
      return 1;
    }
    else{
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return 1;
    }
  }

}

export default App;
