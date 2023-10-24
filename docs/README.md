# 프리코스 1주차 미션 - :baseball: 숫자 야구 게임
### :ocean: USER APP FLOW
1. 앱 실행 및 게임 시작 문구 출력
2. 숫자 입력받기
3. 결과 출력
4. 재시작 여부 판별 (1: 1~4 과정 반복, 2: 앱 종료)

---

### :clipboard: 구현 기능 목록
컴퓨터
- 1~9 까지의 임의의 3자리 수 선택
- 플레이어가 입력한 수와의 유사도 판별
- 정답을 맞출 경우 게임 종료 및 재시작 여부 판별

플레이어
- 임의의 3자리 수 입력하기
- 재시작 여부 입력하기
- 잘못된 입력에 대한 throw 예외 구현

---

### :page_facing_up: 파일 구조도
- src
    - utils
        - getComputer.js
        - getPlayer.js
        - getResult.js
        - printResult.js
        - restartHandler.js
    - App.js
    - constants.js
        - 상수값 처리

---