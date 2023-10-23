import { Console, Random } from "@woowacourse/mission-utils";

class App {

// 시작하면 숫자야구 게임을 시작합니다 프린트 하고
// 1. 랜덤 숫자 생성하고 그 랜덤 숫자를 받아서 gameStart 
  async play() {
    Console.print(`숫자 야구 게임을 시작합니다.`)
    let RAN = this.ranNumber();
    // let MY_NUM = this.myNumber();
    this.gameStart(RAN);
  }

//   1. 랜덤 숫자 생성
// 아무것도 없는 배열 생성하여 랜덤 숫자 생성하여 같은 숫자가 아니면 push
// 하여 배열이 3개가 되면 return한다

ranNumber(){
  let COMPUTER = [];
while (COMPUTER.length < 3) {
  let NUMB = Random.pickNumberInRange(1, 9);
  if (!COMPUTER.includes(NUMB)) {
    COMPUTER.push(NUMB);
  }
}
return COMPUTER;
}


// 내 숫자 입력 및 스트라이크 볼 체크
// 2. 내 숫자 입력
// 부여받은 랜덤값을 갖고와서 게임 스타트
// ㄴ 매 게임마다 내 번호는 새로 정해져야 하므로 한꺼번에 구현
// 숫자를 입력해주세요를 콘솔에 띄운후 값을 입력받는다
// 그 값은 string이며 배열로 바꾸고 배열의 길이가 3이거나 입력된 숫자가 0일때
// 에러를 발생시키고 그렇지 않으면 return한다
// 3. 스트라이크와 볼 체크
// 만약 같은 index에서 내 번호와 랜덤값이 일치하면
// 스트라이크 배열에 1개를 추가한다
// 볼은 내 번호의 값이 랜덤값에 포함되고 스트라이크가 아니면
// 볼 배열에 추가한다
// 각 배열의 길이만큼 볼과 스트라이크의 개수이므로 4. print한다
// ㄴprint는 다른 기능이므로 다른 함수로 추가한다
// 만약 스트라이크 배열의 길이가 3이면 3스트라이크이므로
// 게임 종료 메세지를 출력하고 5. gameset함수를 실행한다
// 만약 스트라이크 배열이 3이 아니면 부여받은 랜덤값으로 gameStart 재실행
// 재실행되면 내 숫자 재생성하고 스트라이크와 볼 판별함

async gameStart (RAN){
    let READLINE = require('readline')
    Console.print(`숫자를 입력해주세요 : `);
    let MY_NUMB = await Console.readLineAsync(READLINE);
    MY_NUMB = Array.from(MY_NUMB);
    for(let I=0;I<MY_NUMB.length;I++){
      if(MY_NUMB[I] == '0') {
        throw new Error('입력범위_ 0 입력');
      }
    }
    if(MY_NUMB.length == 3) {
      return MY_NUMB;  
    } else if(MY_NUMB.length != 3){
      throw new Error("[ERROR] 3자리 숫자를 입력하세요");
    }
  
  let strike = [];
    let j = -1;
    for(let i = 0; i < MY_NUMB.length; i++) {
      if(MY_NUMB[i] === RAN[i]){
        strike[++j] = MY_NUMB[i];
      }
    }
    let ball = RAN.filter(x => MY_NUMB.includes(x)).filter(x => !strike.includes(x));
    this.print(strike.length, ball.length);
    if(strike.length ==3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      this.gameset();
    } else if(strike.length !=3){
      this.gameStart(RAN);
    }
  }

// 4.print
// 받아온 것은 스트라이크 배열의 길이, 즉 스트라이크의 수와 볼의 배열(볼의 수)
// 만약 스트라이크 배열의 길이가 0이면 스트라이크는 표시하지 않음 볼의 배열의 길이가 0이면 볼은 표시하지 않음
// 만약 스트라이크==0 && 볼==0이면 낫싱 표시
// 볼==0 도 아니고 스트라이크 !=0 이면 스트라이크 표시
// 스트라이크==0 도 아니고 볼 !=0 이면 볼 표시


print(STRIKES,BALLS){
if(STRIKES==0 && BALLS == 0){
  Console.print(`낫싱`);
} else if(STRIKES!=0 && BALLS !=0){
  Console.print(`${BALLS}볼 ${STRIKES}스트라이크`);
} else if(STRIKES!=0 && BALLS ==0){
  Console.print(`${STRIKES}스트라이크`);
} else if(STRIKES==0 && BALLS !=0){
  Console.print(`${BALLS}볼`);
}}

// 5. 게임셋 여부
// 이후 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 표시후 입력값 받음
// 입력값이 1이면 게임스타트. 단 여기에서 랜덤 숫자를 다시 생성
// 입력값이 2이면 게임끝
// 둘다 아니면 에러 메세지 띄우고 종료

async gameset(){
  let READLINE = require('readline')
  Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`)
  let setNum = await Console.readLineAsync(READLINE);
    if(setNum=='1'){
      this.gameStart(this.ranNumber(),await this.myNumber());
    } else if(setNum==2){
      return 
    } else if(setNum !=1 && setNum!=2){
      throw new Error('[ERROR]1 또는 2를 입력하세요')
    }
  }
} 


export default App;
