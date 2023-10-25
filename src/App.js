//App.js
//프로그래밍 요구사항 : 라이브러리 사용
import * as MissionUtils from "@woowacourse/mission-utils";


class App {

  async play() { 
    //상수명은 SNAKE_CASE로 작성 대문자_대문자

    //Console
    //readLine(query, callback) : 주어진 질문 출력 -> 답변 입력 -> 입력된 답변 인수 전달 콜백함수 호출
    //readLineAsync(query) :  주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환
    //print(message) : 주어진 문자열을 콘솔에 출력한다.
    
    //Random
    //pickNumberInRange(startInclusive, endInclusive) : 숫자 범위 지정 시 시작, 끝 숫자 포함 범위 숫자 반환
    //pickNumberInList(array) : 목록에 있는 숫자 중 하나를 반환
    //pickUniqueNumbersInRange(startInclusive, endInclusive, count) : 숫자 범위 내에서 지정된 개수만큼 겹치지 않는 숫자를 반환
    
    //Console의 print(message) : 주어진 문자열을 콘솔에 출력
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    //Console의 readLineAsync(query) :  주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환
    async function getNumber() {
      try {
        const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 (단, 조건은 서로 다른 3자리의 수를 입력)');
      } catch (error) {
        //reject 되는 경우
      }
    }
    
    
    //1볼 1스트라이크
    //낫싱
    
    //3스트라이크
    //3개의 숫자를 모두 맞히셨습니다! 게임 종료

    //게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  }//END play()

}//END App{}

//App 클래스를 기본값으로 내보냄. App클래슨느 다른 파일에서 App이라는 이름으로 사용 가능
export default App;
