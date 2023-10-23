const MissionUtils = require("@woowacourse/mission-utils");

class App {

  //초기화
  constructor() {
    this.nonDuplicateNumbers = [];
  }
  
  async play(){
    this.gameStartMessage();
    this.nonDuplicateNumbers=this.computerRandomNum();
    await this.userInputNum();
  }

  gameStartMessage(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  computerRandomNum(){
    const nonDuplicateNumbers = [];
    while(nonDuplicateNumbers.length<3){
      const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
      // 중복 숫자 방지
      if(!nonDuplicateNumbers.includes(randomNum)){
        nonDuplicateNumbers.push(randomNum);
      }
    }
    return nonDuplicateNumbers;
  }

  async userInputNum(){
    const input = await MissionUtils.Console.readLineAsync("3자리 숫자를 입력하세요: ");
    const userNumArr = input.split("").map(Number);

    // 유효성 검사 진행
    this.check(userNumArr);
    this.game(userNumArr);
    
  }

  check(userNumArr){
    // 문자열이 숫자로 이뤄져있는지 확인하는 유효성 검사 정규표현식
    const NUMBERS = /^[1-9]+$/;
    // 숫자를 입력했는지 확인
    for(let i=0;i<userNumArr.length;i++){
      if(!NUMBERS.test(userNumArr[i])){
        throw new Error('숫자를 입력하세요.');
      }
    }
    // 3자리수인지 확인
    if(userNumArr.length!=3){
      throw new Error('3개의 숫자를 입력하세요.');
    }
    // 중복된 숫자가 있는지 확인
    if(new Set(userNumArr).size!=3){
      throw new Error('중복된 숫자가 있습니다.');
    }
  }

  game(userNumArr){
    let STRIKE=0; // 숫자 동일, 인덱스 동일
    let BALL=0; // 숫자 동일, 인덱스 다름
    // 스트라이크, 볼 둘 다 없으면 낫싱
    let result="";

    for(let i=0;i<userNumArr.length;i++){
      if(userNumArr[i]==this.nonDuplicateNumbers[i]){
        STRIKE++;
      } else if(userNumArr.includes(this.nonDuplicateNumbers[i])){
        BALL++;
      }
    }

    // 결과 출력
    if(STRIKE!=0&&BALL==0){
      result=`${STRIKE}스트라이크`;
    } else if(STRIKE==0&&BALL!=0){
      result=`${BALL}볼`;
    } else if(STRIKE!=0&&BALL!=0){
      result=`${BALL}볼 ${STRIKE}스트라이크`;
    } else if(STRIKE==0&&BALL==0){
      result='낫싱';
    } else{
      result='3스트라이크'
    }

    this.gameEnd(result);
  }

  findAnswer(res){
    MissionUtils.Console.print(res);
    if(res!=='3스트라이크'){
      this.userInputNum();
    } else if(res==='3스트라이크'){
      this.gameEnd();
    }
  }

  async gameEnd(res) {
    MissionUtils.Console.print(res);
    if (res !== '3스트라이크') {
      await this.userInputNum();
    } else {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const input = await MissionUtils.Console.readLineAsync(
        "게임을 재시작하려면 1, 게임종료를 원하시면 2를 입력하세요: "
      );
      if (input === "1") {
        await this.play();
      } else if (input === "2") {
        // close 함수가 모듈에 없는 에러 발생
        MissionUtils.Console.close();
      } else {
        throw new Error("1과 2 중에서 입력해주세요.");
      }
    }
  }

}

const app= new App();
app.play();

export default App;
