## ⚾ 구현할 기능 목록

- 1~9 사이의 서로 다른 3개의 숫자 랜덤 선택 기능
  - `@woowacourse/mission-utils`의 `Random.pickNumberInRange()` 활용
- 사용자측 숫자 입력 기능
  - 사용자가 입력한 값이 숫자인지, 3자리인지, 1~9 사이의 값인지 검증
  - `@woowacourse/mission-utils`의 `Console.readLineAsync` 활용
- 선택된 숫자와 입력값을 비교한 결과 출력 기능
  - 같은 수가 같은 자리에 있으면 **스트라이크**
  - 다른 자리에 있으면 **볼**
  - 같은 수가 전혀 없으면 **낫싱**
  - `@woowacourse/mission-utils`의 `Console.print` 활용
- 게임 재시작 및 종료 기능
  - `3스트라이크`일 경우에만 선택 가능
  - **1** 입력 시 재시작, **2** 입력 시 종료
- 예외 처리 기능
  - 사용자가 잘못된 값 입력 시, `throw`문을 사용해 예외 발생시킨 후 애플리케이션 종료
  - 예외 상황에 따라 에러 문구 분류