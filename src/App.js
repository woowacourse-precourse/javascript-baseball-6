import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() { // play함수이름.

  }
}

export default App; // export 기본내보내기(장점. 가져올 때 다른이름으로 바꿔도 상관 ㄴ)

function makeRandomNum() { // 정답 숫자 생성
  let answer = ''; // 여기 랜덤 돌린거 넣을거임.
  while(answer.size < 3) {
    let pick = MissionUtils.Random.pickNumberInRange(1, 9); // 라이브러리 써서 범위 내에서 수 뽑기.
    if(!answer.includes(pick)){ // 중복방지
      answer += pick;
    }
  }
  //console.log(`출제완료. 게임시작`);
  print(`숫자 야구 게임을 시작합니다.`);
  return answer; 
}

function getUserNumber(userInput) {
  MissionUtils.console.readLineAsync(userInput);
  return userInput;
  //이걸로 입력값 받고 출력하고.. 문자인지 판단 해 주나? 근데 input이랑 매개변수랑 같은거임? 일단 패스.
  //출력값은 뭘로 잡아야할지 모르겠음. 일단 여기까지.
  //여기는 하나씩만 입력받을 수 있음 input메서드가 반환됨. 이 값을 가지고 조건 판단 해야 함.
  //userInput은 지금 string형태
}

//유효성 확인 결과가 true/false로 나와야 함. 예외상황발생히 throw하고 종료해야하니까
function checkUserInput(userInput) {
  let input = userInput; // string형태

  //숫자길이 3인지 확인
  if (!input.length === 3) {
    return false;
  } 
  
  //모두 숫자인지 확인
  for(let i =0; i< 3; i++) {
    if(Number.isNaN(Number(input[i]))) { // 안에 문자 있으면
      return false;
    }
  }
  //return true;

  //1~9 사이 수인지
  for(let i =0; i< 3; i++) {
    if(Number(input[i]) < 1 || 9 < (Number(input[i]))) { 
      return false;
    }
  }

  //모두 다른 수인지 Set은 중복을 허용하지 않는다는 점을 이용
  let checkDupl = new Set(input);
  if(chechDupl.size !== input.length) { // 길이가 다르면 중복 존재
    return false;
  }

  return true; // 모든 조건을 지나오면 true값 반환.
}


//입력값과 정답 비교
function strikeOrBall(comsAnswer, userInput) {
  //consAnswer = makeRandomNum(); 이거 전체 함수 완성하면 거기 적으셈.

}
