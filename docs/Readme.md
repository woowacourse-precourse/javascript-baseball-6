1. 문제 최초 초기화 -> Random API 이용
2. 시작 문구 -> Console API 이용
2. 사용자 입력 및 입력 처리 -> Console API 이용
3. 스트라이크 체크 기능 -> check_strike
4. 볼 체크 기능 -> check_ball
6. 낫싱 처리 -> check_nothing -> x -> strike,ball 0이면 낫싱
7. 게임 종료 -> Console API 이용
8. 게임 종료 후 처리 -> 추가 진행 여부
9. 예외처리
 - 입력 예외처리
  - 입력이 1~9로만 이뤄지지 않은 경우
  - 중복 숫자가 있는 경우
  - 입력 개수가 3개가 아닌경우
  - 게임 종료시 받는 입력이 1 혹은 2 가 아닌경우
10. index.js로 실행