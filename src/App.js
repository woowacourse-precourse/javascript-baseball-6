const MissionUtils = require("@woowacourse/mission-utils");

const PRINT_MSG = (msg) => {MissionUtils.Console.print(msg)};

class App {
  async play() {
    let computerArr = getRandomArr();  // 컴퓨터 랜덤 수 배열
    let gameEnd = false; // 게임 종료여부

    // 게임 시작
    while(!gameEnd){
      const number = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      
      if(number.length != 3){
        throw new Error("[ERROR] 잘못된 숫자 형식입니다. 3자리 숫자를 입력해주세요.");
      }
      const userArr = number.split("");  // 사용자 입력 숫자 배열
      let strike = 0;   // 스트라이크
      let ball = 0;     // 볼

      // 스트라이크, 볼 확인
      userArr.forEach((userNum, idx) => {
        if(computerArr.includes(parseInt(userNum))){
          if(computerArr[idx] == userNum){
            strike++;
          } else{
            ball++;
          }
        }
      });
      // 결과 출력
      if(strike == 0 && ball == 0){
        PRINT_MSG("낫싱");
      } else if(strike > 0 && ball == 0){
        PRINT_MSG(strike + "스트라이크");
      } else{
        PRINT_MSG(ball + "볼 " + strike + "스트라이크");
      }
      // 게임 종료
      if(strike == 3){
        PRINT_MSG("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const reGame = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        // 게임 재실행
        if(reGame == '1'){
          computerArr = getRandomArr();
        } else{
          gameEnd = true;
        }
      }
    }

  }

}

// 랜덤 숫자 배열 생성
function getRandomArr(){
  PRINT_MSG("숫자 야구 게임을 시작합니다.");
  const random = [];
  while(random.length < 3){
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!random.includes(number)){
      random.push(number);
    }
  }
  return random;
}

export default App;
