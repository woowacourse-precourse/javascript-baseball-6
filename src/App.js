/*
기능 요구사항

기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
예) 상대방(컴퓨터)의 수가 425일 때
123을 제시한 경우 : 1스트라이크
456을 제시한 경우 : 1볼 1스트라이크
789를 제시한 경우 : 낫싱
위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.
*/

/*
입출력 요구사항

입력
서로 다른 3자리의 수
게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

출력
입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
1볼 1스트라이크

하나도 없는 경우
낫싱
3개의 숫자를 모두 맞힐 경우
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료

게임 시작 문구 출력
숫자 야구 게임을 시작합니다.


*/





import { MissionUtils } from "@woowacourse/mission-utils";



class App {
  async play() {
    }

  }

//함수

//세자리수 생성
function generateNumber(){
  const COMPUTER = [];
  while(COMPUTER.lentgh < 3){
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)){
      COMPUTER.push(NUMBER);
    }
  }
}

//입력값 받기
async function getInput(){
  let answer = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  if(answer.lentgh == 3){
    const DISTINCT = new Set(answer);
    if (DISTINCT.size == 3){
      return answer;
    }
  }
  throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
}

//스트라이크, 볼 판정
function isCorrect(COMPUTER, answer){
  let ball;
  let strike;
  for (let i = 0; i < COMPUTER.lentgh; i++){
    if(COMPUTER.includes(answer[i])){
      if(COMPUTER.indexOf(answer[i]) == i){
        strike++;
      }
      else ball++;
    }
    return [ball, strike];
  }
}

//정답판정
function win(ball, strike){
  let print = '';
  if (ball) {print += `${ball}볼`;}
  if (strike) {
    print += `${strike}스트라이크`;
    if (strike == 3){
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
  }
  if (ball == 0 && strike == 0){
    MissionUtils.Console.print("낫싱");
  }
  MissionUtils.Console.print(print)
  return false;

}

export default App;

