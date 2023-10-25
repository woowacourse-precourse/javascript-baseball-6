# 구현할 기능 목록 정리

## Game

- [ ] 게임 시작
  - 안내 문구
  - 게임 진행 호출
- [ ] 게임 진행
  - 맞히기 전까지 반복되도록
- [ ] 게임 끝내기
  - 종료 옵션에 따라 재시작

## Computer

- [ ] 랜덤 숫자 3자리 만들기
  - `Random.pickNumberInRange()` 사용
  - 100, 10, 1의 자리가 모두 다르게

## Validator

- [ ] 숫자 유효성 검사
  - 1~9의 Number인지
  - 3자리인지
  - 중복된 숫자가 있는지
  - 예외 발생 시 `throw`
- [ ] 종료 옵션 유효성 검사
  - 1 또는 2 이외의 값을 입력한 경우

## Checker

- [ ] 랜덤 숫자와 사용자의 입력값 비교
  - Strike 검사
  - Ball 검사
  - Nothing 검사
  - 정답 처리
- [ ] 결과 문자열 만들기
  - `${strike}스트라이크 ${ball}볼`
  - `${strike}스트라이크`
  - `${ball}볼`
  - `낫싱`

## Player

- [ ] 숫자 입력하기
  - `Console.readLineAsync`
- [ ] 종료 옵션 입력하기
