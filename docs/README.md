## Baseball Game

### TodoList

1. [x] 게임 시작.
   - (출력) 시작 알림 출력.
   - 컴퓨터 무작위 서로 다른 3자리 숫자 생성.
2. [x] 사용자 입력.
   - (입력) 사용자 입력 받기.
   - 서로 다른 숫자인지 확인.
   - 그 외의 잘못된 입력인지 확인.
3. [x] 정답 출력.
   - 정답 시 4.게임종료, 오답시 2.사용자입력
4. [x] 게임 종료
   - (입력) 사용자 입력 받기
   - 입력값이 1,2 인지 확인하기
   - 1이면 재시작, 2이면 종료

### TestList

1. [x] getRandomNumbers 반환 값이 서로 다른 숫자인가?
2. handleUser
   1. [x] handleUserInput
      - 에러 출력
      - 정상값 리턴
   2. [x] handleUser
      - getStrikeAndBall, printStrikeAndBall 볼, 스트라이크 출력
      - 재시작 여부 확인
3. [x] handleEnd
   1. 입력 및 검사.
   2. 정상 작동 확인.
4. [x] 최종, Integration Test! 케이스 5개이상 만들어보기!

### Refactoring

1. SOLID 법칙! 적용
2. try catch문 적용
3. 항상 테스트는 통과해야할 것.
4. Airbnb 스타일 가이드 적용!
5. [x] MissionUtils 그룹화
6. [x] valid 함수 그룹화
7. [x] handle.Computer, handleUser, handleEnd 내부 메서드 분리.
