기능 목록:

1. 랜덤 넘버 생성
2. 유저로부터 입력 받기
   2.1 입력값 예외 처리 ( 숫자가 아닐 경우, 세자리 이상/이하 입력할 경우)
3. 유저 입력값과 랜덤 생성 값을 비교하여 볼, 스트라이크, 낫싱 출력
4. 전체 게임 재시작 or 종료

공부해야할것:

1. continue
2. promise async await callback
3. 객체지향프로그래밍
4. js클래스 개념

질문사항 1: 아래는 왜 안되는거임? const MissionUtils = require("@woowacourse/mission-utils");
질문사항 2: 왜 앞에 미션유닛 꼭 추가해야함? ( MissionUtils.Console.readLine )
질문사항 3: 테스트 npm test 관련해서 통과 안되는 문제


피드백:
1. this. *** 클래스 안에 메소드 형식으로 만들기 
2. 클래스의 


class App {
  computer_random_number;
}


this.computer_random_number

중첩함수 ㄴㄴ



안녕하세요. 우아한테크코스입니다.

웹 프론트엔드 교육 분야의 1주 차 미션에 대해 추가 공지합니다. 현재 예외 사항을 처리하는 요구사항에 대한 예시가 없어 테스트 코드 동작에 대해 어려움을 느끼는 분들이 있습니다. 그래서 아래의 요구사항 예시를 추가로 공지합니다.

예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 “[ERROR]“로 시작해야 한다.

 [ERROR] 숫자가 잘못된 형식입니다.
모두 즐거운 코딩 하시길 바랍니다. 감사합니다.