//App.js
//프로그래밍 요구사항 : 라이브러리 사용
import * as MissionUtils from "@woowacourse/mission-utils";
console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {

  async play() { 
    //상수명은 SNAKE_CASE로 작성 대문자_대문자
    
    //readLine(query, callback) : 주어진 질문 출력 -> 답변 입력 -> 입력된 답변 인수 전달 콜백함수 호출
    MissionUtils.Console.readLineAsync('숫자를 입력해주세요.');

    //print(message) : 주어진 문자열을 콘솔에 출력
    MissionUtils.Console.print('안녕하세요. ');

    //pickNumberInRange(startInclusive, endInclusive) : 숫자 범위 지정 시 시작, 끝 숫자 포함 범위 숫자 반환
    MissionUtils.Randomom.pickNumberInRange(1, 9);

  }//END play()

}//END App{}

export default App;
