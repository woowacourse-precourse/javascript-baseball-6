import { Console, Random } from "@woowacourse/mission-utils";

class App {

// 시작하면 숫자야구 게임을 시작합니다 프린트 하고
// 1. 랜덤 숫자 생성하고 그 랜덤 숫자를 받아서 
// 2.내 숫자 받아오는 함수(myNumber) 실행
  async play() {
    Console.print(`숫자 야구 게임을 시작합니다.`)
    const RAN = this.ranNumber();
    // let MY_NUM = this.myNumber();
    await this.myNumber(RAN);
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


// 2. 내 숫자 생성
// 부여받은 랜덤값을 갖고오는 것과 별개로(나중에 gameStart로 넘김) 내 숫자 생성
// ㄴ 매 게임마다 내 번호는 새로 정해져야 하므로 매 게임 시작시 이 함수부터 실행하게 함
// 숫자를 입력해주세요를 콘솔에 띄운후 값을 입력받는다
// 그 값은 string이며 받아온 문자를 숫자의 배열로 바꾸고
// 생성한 내 값과 받아온 랜덤값을 3. 게임시작함수(gameStart)로 넘겨 시작한다
// 입력값을 받아오는 것을 기다려야 하므로 async/await 사용

async myNumber (RAN){
  let MY_NUM = await Console.readLineAsync('숫자를 입력해주세요 :');
  await this.gameStart(RAN,MY_NUM.split('').map(Number));
}

// 3. 게임시작 
// -1 내 입력값이 ERROR인지 먼저 체크
// 스트라이크와 볼 체크 전에 내 입력값이 ERROR인지 확인한다
// 내 값의 배열에 0이 들어가 있거나 배열의 길이가 3이 아니면 throw [ERROR]

async gameStart(RAN,MY_NUM){
    for(let I=0;I<MY_NUM.length;I++){
      if(MY_NUM[I] === 0) {
        throw new Error('[ERROR] 입력범위_ 0 입력');
      }
    }
    if(MY_NUM.length != 3){
      throw new Error("[ERROR] 3자리 숫자를 입력하세요");
    }

// 3-2.스트라이크와 볼 체크
// 만약 같은 index에서 내 번호와 랜덤값이 일치하면
// 스트라이크 배열에 1개를 추가한다
// 볼은 내 번호의 값이 랜덤값에 포함되고 스트라이크가 아니면
// 볼 배열에 추가한다
// 각 배열의 길이만큼 볼과 스트라이크의 개수이므로 새로운 함수(4. 체크한값 프린트(printCheck))를 실행시킨다
// ㄴprint는 다른 기능이므로 다른 함수로 추가한다
  
  let STRIKE = [];
  let BALL = [];
  for (let i = 0; i < MY_NUM.length; i++) {
    if (MY_NUM[i] === RAN[i]) {
      STRIKE.push(MY_NUM[i]);
    } else if (RAN.includes(MY_NUM[i])) {
      BALL.push(MY_NUM[i]);
    }
  }
  this.printCheck(STRIKE.length,BALL.length);

// 만약 스트라이크 배열의 길이가 3이면 3스트라이크이므로
// 게임 종료 메세지를 출력하고 5.재게임을 판별하는 함수(gameset)를 실행한다
// 만약 스트라이크 배열이 3이 아니면 부여받은 랜덤값은 그대로 두고 게임 재실행
// 여기서 게임이 재실행되기 위해서 내 숫자를 다시 설정하고 스트라이크와 볼을 판별해야 하므로
// 내숫자 함수(myNumber) 실행
// 재실행되면 내 숫자 재생성하고 스트라이크와 볼 판별함
// 여기까지가 3. gameStart 함수
// ㄴ 내 숫자 함수와 재게임함수에서 값을 받아오는 것을 기다려야할 필요가 있기에
// ㄴ 각각에 await, gameStart에 async이 필요하다

    if(STRIKE.length ==3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      await this.gameset();
    } else if(STRIKE.length !=3){
      await this.myNumber(RAN);
    }
  }

// 4.printCheck
// 받아온 것은 스트라이크 배열의 길이, 즉 스트라이크의 수와 볼의 배열(볼의 수)
// 만약 스트라이크 배열의 길이가 0이면 스트라이크는 표시하지 않음 볼의 배열의 길이가 0이면 볼은 표시하지 않음
// 만약 스트라이크==0 && 볼==0이면 낫싱 표시
// 볼==0 도 아니고 스트라이크 !=0 이면 스트라이크 표시
// 스트라이크==0 도 아니고 볼 !=0 이면 볼 표시


printCheck(STRIKES,BALLS){
if(STRIKES===0 && BALLS === 0){
  Console.print(`낫싱`);
} else if(STRIKES!==0 && BALLS !==0){
  Console.print(`${BALLS}볼 ${STRIKES}스트라이크`);
} else if(STRIKES!==0 && BALLS ===0){
  Console.print(`${STRIKES}스트라이크`);
} else if(STRIKES===0 && BALLS !==0){
  Console.print(`${BALLS}볼`);
}}

// 5. 게임셋 여부
// 이후 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 표시후 입력값 받음
// ㄴ 입력값을 받는 것을 기다려야 할 필요가 있음 - async/await 사용
// 입력값이 1이면 게임스타트.
// ㄴ 게임을 처음부터 시작하는 것으로 랜덤값을 새로 지정하고 시작해야 하여 맨 처음 시작인 play사용
// ㄴ 내 숫자도 새로 받아와야 하고 이를 기다려야 하기 때문에 async/await 사용
// 입력값이 2이면 게임끝
// 둘다 아니면 에러 메세지 띄우고 종료

async gameset(){
  let SET_NUM = await Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    if(SET_NUM==='1'){
      await this.play();
    } else if(SET_NUM==='2'){
      return;
    } else if(SET_NUM !=1 && SET_NUM!=2){
      throw new Error('[ERROR]1 또는 2를 입력하세요')
    }
  }
} 


export default App;
