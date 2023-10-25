## 구현할 기능 목록

- play : 게임의 전체 과정을 진행한다. 
- gameStart : 게임의 과정을 반복한다. 

- createRandomArray : 컴퓨터가 선택한 값을 담는다.

- createUserArray : 유저가 선택한 값을 담는다.
  - inputUserArray : 유저에게 값을 입력받는다.
  - isUserArrayError : 유저의 값에 대한 예외처리를 한다.(값 중복여부, 숫자 길이)

- initializeCount : 스트라이크 카운트, 볼 카운트, 유저 변수 배열을 초기화한다.
- isStrike : 스트라이크 갯수 판단
- isBall : 볼 갯수 판단
- printResult : 게임 결과 출력
- restartChoice : 게임 재시작 선택을 입력받는다.
- 게임 재시작 입력에 대한 예외처리를 한다(1또는 2를 선택했는지 여부)