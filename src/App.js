import { Console, Random } from "@woowacourse/mission-utils";

class App {

// 만약 카운트가 0이면 스트라이크는 표시하지 않음 카운트2가 0이면 볼은 표시하지 않음
// 만약 카운트==0 && 카운트2==0이면 낫싱 표시
// 카운트==0&& 카운트2==0 도 아니고 카운트==3도 아니면 숫자 입력 다시 받음
// 만약 카운트가 3이면 3스트라이크 표시 후 '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 표시


// 시작하면 숫자야구 게임을 시작합니다 프린트 하고
// 1. 랜덤 숫자 생성
// 2. 게임 시작
  async play() {
    Console.print(`숫자 야구 게임을 시작합니다.`)
    this.gameStart(this.ranNumber());
  }

//   1. 랜덤 숫자 생성
// 아무것도 없는 배열 생성하여 랜덤 숫자 생성하여 같은 숫자가 아니면 push
// 하여 배열이 3개가 되면 return한다
ranNumber(){
  const COMPUTER = [];
while (COMPUTER.length < 3) {
  const NUMBER = Random.pickNumberInRange(1, 9);
  if (!COMPUTER.includes(NUMBER)) {
    COMPUTER.push(NUMBER);
  }
}
return COMPUTER;
}


// 2. 게임 시작
// 숫자를 입력해주세요 표시후 
// 3. 내 숫자 생성하여 숫자를 받음
// 그 숫자는 이제부터 쓸 것이기에 변수에 저장후 
// 컴퓨터 숫자와 내 숫자가 맞는지 
// 4. 체크한다

gameStart(RAN){
  Console.readLine(`숫자를 입력해주세요 : `,(myNum)=>{
    this.checkResult(RAN,myNum)
  })  
    
  
}

// 3. 내 숫자 생성
// 숫자 입력 옆의 숫자를 읽어와서
// 문자로 변경후 배열로 만들어서 그 배열의 길이가 3이 아니면 에러,
// 3이면 배열로 숫자 생성

// 4. 체크한다
// 5. 볼과 6. 스크라이크를 생성하고
// 볼과 스트라이크를 표시한다
// 3스트라이크면 3개숫자 맞았다는 것을 표시하고 새게임 여부 묻는다
// ㄴ 7. 게임셋 여부
// ㄴ 다른 것들은 글자 표시후 다시 
// 8. 게임 스타트
// ㄴ 내 숫자를 정하는 것 부터. 컴퓨터 숫자는 그대로 있어야 함.

checkResult (RAN, myNum){

  let MY_NUMBER_ARRAY = [];
  if(myNum.length != 3) {
    throw new Error("[ERROR] 3자리 숫자를 입력하세요");
    }
  for(let i = 2; i >= 0; i--) {
    if(myNum % 10 === 0) {
      throw new Error('입력범위_ 0 입력')};
    MY_NUMBER_ARRAY[i] = myNum % 10;
    myNum = parseInt(myNum /10); 
  }
  let strike = [];
    let j = -1;
    for(let i = 0; i < MY_NUMBER_ARRAY.length; i++) {
      if(MY_NUMBER_ARRAY[i] === RAN[i]){
        strike[++j] = MY_NUMBER_ARRAY[i];
      }
    }
    let ball = RAN.filter(x => MY_NUMBER_ARRAY.includes(x)).filter(x => !strike.includes(x));
    this.print(strike.length, ball.length);
    if(strike.length ==3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      this.gameset();
    } else if(strike.length !=3){
      this.gameStart(RAN);
    }
  }
// const BALLS = this.ball(COM_NUMBER,MY_NUM);
// const STRIKES = this.strike(COM_NUMBER,MY_NUM);
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

// 5.볼 6. 스크라이크 생성
// 컴퓨터 숫자의 length(혹은 3만큼)반복시키면서 내 숫자만큼 다시 반복 시키면서 같은 값이 있는지 확인
// 만약 같은 값이 있으면 index값이 같은지 확인하고(for문 썼으니 i==j인지) 다르면 볼++
// 만약 같은 값이 있있는데 index값이 다르면(else if) 같으면 스트라이크++ 
// 스트라이크 볼 생성 함수는 위에서 볼과 스트라이크를 만드는데 쓰인다

// ball(COM_NUMBER,MY_NUM){
//   let COUNT_BALL = 0
//   for(let i=0; i<COM_NUMBER.length; i++){
//     for(let j=0; j<MY_NUM.length;j++){
//       if(COM_NUMBER[i]==MY_NUM[j]){
//         if(i!=j){
//           COUNT_BALL++
//         }
//       }
//     }
//   }
// return COUNT_BALL;
// }
// strike(COM_NUMBER,MY_NUM){
//   let COUNT_STRIKE = 0
//   for(let i=0; i<COM_NUMBER.length; i++){
//     for(let j=0; j<MY_NUM[j];j++){
//       if(COM_NUMBER[i]==MY_NUM[j]){
//         if(i==j){
//           COUNT_STRIKE++
//         }
//       }
//     }
//   }
// return COUNT_STRIKE;
// }


// 7. 게임셋 여부
// 이후 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 표시후 입력값 받음
// 입력값이 1이면 게임스타트. 단 여기에서 랜덤 숫자를 다시 생성
// 입력값이 2이면 게임끝
// 둘다 아니면 에러 메세지 띄우고 종료

gameset(){
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',(setNum)=>{
    if(setNum==1){
      this.gameStart(this.ranNumber());
    } else if(setNum==2){
      return 
    } else if(setNum !=1 && setNum!=2){
      throw Console.print('[ERROR]1 또는 2를 입력하세요')
    }
  })
} 
}

export default App;
