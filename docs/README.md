# 구현할 기능 목록 정리

## Game

- [ ] 게임 시작 문구 출력
- [ ] 게임 종료 문구 출력

## Computer

- [ ] 랜덤 숫자 3자리 만들기

  - `Random.pickNumberInRange()` 사용
  - 100, 10, 1의 자리가 모두 다르게

- [ ] 사용자 입력 유효성 검사

  - type이 Number인지
  - 3자리인지
  - 공백 제거 - `trim()`
  - 예외 발생 시 `throw`

- [ ] 랜덤 숫자와 사용자의 입력값 비교

  - Strike 검사
  - Ball 검사
  - Nothing 검사
  - 정답 처리

- [ ] 종료하기 또는 종료 후 재시작
  - 1 → 재시작
  - 2 → 종료

## Player

- [ ] 값 입력하기
  - `Console.readLineAsync`
