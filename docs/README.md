# 구현할 기능 목록
- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.

### 1. 컴퓨터가 랜덤한 숫자 3개를 뽑는 기능
        - Random 값 추출: Random.pickNumberInRange()
        - Random.pickNumberInRange(): 중복 제거 필요

### 2. 사용자로부터 3자리 숫자를 입력 받는 기능
        - Console.readLineAsync: 사용자의 값 입력 받음

### 3. 예외 처리
        - 사용자가 입력한 숫자가 3자리가 아닌 경우 (3개 미만이거나 3개 초과) -> "[ERROR] 숫자가 잘못된 형식입니다."
        - 사용자가 입력한 숫자가 1~9가 아닌 경우
        - 사용자가 중복되는 수를 입력한 경우
        - 재시작/종료 선택 시 1이나 2가 아닌 숫자를 입력한 경우


### 4. 컴퓨터의 숫자와 사용자의 숫자를 비교하는 기능
        - 초기값: strikeCount = 0, ballCount = 0
        - 같은 자리에 같은 수 -> strikeCount += 1
        - 다른 자리에 같은 수 -> ballCount += 1

### 5. 비교한 결과를 출력하는 기능
        - Console.print: 결과 출력
        - strikeCount = 0 && ballCount = 0 -> "낫싱"
        - strikeCount == 3 -> "3스트라이크\n 3개의 숫자를 모두 맞히셨습니다! 게임 종료
        - strikeCount != 3 && ballCount > 0 -> "n볼 n스트라이크"

### 6. 3스트라이크가 아닌 경우 재시도
        - 결과 출력 후 "숫자를 입력해주세요" 출력

### 7. 재시작, 종료를 선택받는 기능
        - "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        - 1: 재시작
        - 2: 종료

### 8. 게임을 재시작하는 기능

### 9. 게임을 종료하는 기능