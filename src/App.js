const { Console, Random } = require("@woowacourse/mission-utils");

class App {

  generateAnswer(){ //정답 생성(1~9까지 서로 다른 3개의 숫자)
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9); 
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }return computer;
    }
  

  async CheckPlayerInput(){    //플레이어가 입력한 값을 체크 
    let playerNumbers = [];
    const playerInputNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");         
      if (isNaN(playerInputNumbers)===true){                    //1.문자열이 숫자인지 
        throw new Error( "[ERROR] 숫자가 잘못된 형식입니다.");
      } else if (playerInputNumbers.length !== 3){              //2.세자리 수인지   
        throw new Error( "[ERROR] 숫자가 잘못된 형식입니다.");
      } else {
        playerNumbers = playerInputNumbers.split("").map(Number); //3-1. 문자열을 배열로 변환한뒤 
      }
          
      let dupCheck = new Set(playerNumbers);
      if (dupCheck.size !== playerNumbers.length){  //3-2.중복이 있는지
        throw new Error( "[ERROR] 숫자가 잘못된 형식입니다."); 
      }
      return playerNumbers;
    }

  checkStrikeAndBall(answer,playerNumbers){ //스트라이크, 볼 갯수 체크 
    let strike = 0;
    let ball = 0;
    for(let i=0; i<playerNumbers.length; i++){
      const playerIndex = playerNumbers.indexOf(answer[i]);
      if(playerIndex>-1){
          if(playerIndex === i){
            strike += 1;
          }else{
            ball += 1;
        }
      }
    }return { strike, ball };
  }

  printResult(strike,ball){ //스트라이크, 볼 결과 값 출력 
    let result = "";
    if (strike === 0 && ball === 0){
      result = "낫싱";
    } else if(strike > 0 && ball === 0){
      result = `${strike}스트라이크`;
    } else if(strike === 0 && ball > 0){
      result = `${ball}볼`;
    }else{
      result = `${ball}볼 ${strike}스트라이크`;
    }
    Console.print(result);
  }

  async checkRestart(){ //재시작 체크
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");
    const restart = await Console.readLineAsync("");
    if (restart === "1"){
      return true;
    }else if (restart === "2"){
      return false;
    } else {
      throw new Error( "[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  //프로그램 실행 
  async play() {       
    Console.print("숫자 야구 게임을 시작합니다."); //게임 시작문구 출력
    do{        
      const answer = this.generateAnswer()  //정답 생성                                  

      while(true){ //플레이어가 정답을 모두 맞힐때까지(스트라이크3개) 과정 반복
        const playerNumbers = await this.CheckPlayerInput(); //플레이어가 입력한 숫자가 조건에 맞는지 체크 
        const { strike,ball } =  this.checkStrikeAndBall(answer,playerNumbers); //플레이어 숫자와 정답을 비교해서 스트라이크 볼 갯수 체크
        this.printResult(strike,ball); //플레이어 숫자에 대한 결과(스트라이크 볼 갯수)를 출력
        if (strike === 3){ 
          break;
        }
      } //게임 종료 
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");//게임 종료문구 출력
      if(!await this.checkRestart()){ //재시작여부 확인
        break;
      } 
    }while(true);
  }
}

export default App;