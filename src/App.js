import {MissionUtils} from "@woowacourse/mission-utils";


// ********** "1. 게임 시작 직후 루틴" 구현 **********

/*
  [컴퓨터가 3자리 수를 생성하는 것]을 구현
  랜덤 생성 함수는 우아한테크코스에서 제공하는 예제 코드에 문제가 없기에, 이를 활용
 */
function generateRandomNumber(){
  const computer = [];

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

// ********** "2. 게임 동작 루틴" 구현 **********

/*
  [/사용자 입력/] 부터 {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 구현, 우아한 테크코스의 API 사용
  비동기를 이용해서 입력받는 구조이기 떄문에, promise를 이용해서 구현
 */
function getUserInput(){
  let userInput = [];
  MissionUtils.Console
      .readLineAsync("숫자를 입력해주세요 : ")
        .then(function(inputNumber) {
          inputNumber.split("").forEach((e)=>{
            if(!userInput.includes(e)){

            }
          });
        })
        .catch();
}

function runGame(randomNumber){
  // {{index = 0, 볼 = 0, 스트라이크 = 0}} 구현
  let index = 0;

  let ball = 0;

  let strike = 0;

  // [/사용자 입력/] 구현, 우아한테크코스의 API 사용
  let userNumber = [];
  let userInput = MissionUtils.Console.readLineAsync();

  // {사용자가 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 넣었는가?} 구현
  if(userInput){}


}



class App {
  async play() {}
}

export default App;
