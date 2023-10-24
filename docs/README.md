# 우아한 테크 코스 프리코스 1주차 미션 - 숫자야구
## 구현 기능 목록
### 클래스 - APP
- 게임 지속 상태를 저장해줄 변수 생성
- 클래스 내부 play함수 안에서 게임 지속 상태를 조건으로 반복
  - CreateComputerNumber → InputNumber → CompareNumber → AnswerMessage → InputContinueState
### 함수 - CreateComputerNumber
- @woowacourse/mission-utils의 Random 사용
- return : {Array} 랜덤하게 생성된 서로 다른 세 가지 숫자
### 함수 - InputNumber
- @woowacourse/mission-utils의 Console.readLineAsync 사용
- 사용자에게 서로 다른 세 자리 숫자 입력받음
- 입력 형식에 어긋날 시 throw를 통해 게임 강제 종료
- return : {Array} 사용자에게 입력받은 서로 다른 세 가지 숫자
### 함수 - CompareNumber
- parameter : {Array} 컴퓨터 숫자, {Array} 사용자 숫자
- 컴퓨터의 숫자와 사용자의 숫자를 비교
- return : {Object} 볼 갯수와 스트라이크 갯수를 담은 객체
### 함수 - InputContinueState
- @woowacourse/mission-utils의 Console.readLineAsync 사용
- return : {Boolean} 게임 계속 진행 여부
### 함수 - StartMessage, AnswerMessage, ErrorMessage
- @woowacourse/mission-utils의 Console.print 사용
- 시작, 비교결과, 에러의 메세지를 출력해주는 함수