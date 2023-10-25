## 프리코스 미션 1 (숫자야구)

### 기능 구현사항

**1. 출력 함수**

- printMessage
  - `@wooacourse/mission-utils` 의 `Console.print` 사용
- printErrorMessage
  - `throw new Error` 여러번 사용되므로 함수화
- displayResultMessage
  - strike, ball 카운트에 따라 메시지 출력 (`printMessage` 이용)

**2. 사용자 및 컴퓨터 숫자 입력/생성/검증 함수**

- getUserInput
  - `@wooacourse/mission-utils` 의 `Console.readLineAsync` 사용
- generateComputerNumber
  - `@wooacourse/mission-utils` 의 `Random.pickNumberInRange` 사용
- validateInput
  - `getUserInput` 통해 입력받은 유저의 입력값을 다음의 조건에 따라 검증
    - 3자리 숫자가 아닌 경우
    - 입력값에 1~9 사이의 숫자가 아닌 값이 포함된 경우
    - 중복되는 값(숫자) 이 입력되는 경우

**3. 숫자야구 로직 관련 함수**

- countBaseballCounts
  - `generateComputerNumber`, `getUserInput` 의 출력값 비교해 strike, ball 카운트 계산
- askToContinue
  - 다음의 입력값에 따라 게임 계속 여부 결정
    - 1이면 게임 새로 시작
    - 2면 종료
