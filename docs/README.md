# 구현할 기능 목록

- `@woowacourse/mission-utils`의 `Console` API를 사용하여 입력값 받기 ✅
  - `Console.readLineAsync` 사용 ✅

 <br/>

- 입력값 유효성 검사를 진행
  - 게임 시작 후 입력값은 0을 제외한 세자리 숫자 ✅
  - 게임 종료 후 입력값은 숫자 1 또는 2

<br/>

- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용하여 예외 발생 ✅
  - 애플리케이션 종료

 <br/>

- 야구 게임의 정답(0을 제외한 세자리 숫자)을 생성 ✅
  - `@woowacourse/mission-utils`의 `Random` API를 사용하여 Random 값 추출 ✅

 <br/>

- 입력값과 정답을 비교
  - 공통점이 없는 경우 '낫싱' ✅
  - 숫자를 모두 맞힐 경우 '3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료'
  - 정답이 입력값으로 받은 숫자를 포함하지만 자리수가 다른 경우 'n볼' ✅
  - 정답이 입력값으로 받은 숫자를 포함하면서 자리수가 같은 경우 'n스트라이크' ✅

<br/>

- 비교된 값을 출력 ✅
  - `@woowacourse/mission-utils`의 `Console.print`를 사용하여 출력 ✅
