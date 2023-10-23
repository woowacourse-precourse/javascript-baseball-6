

# [FN][JS] 프리코스 1주차 미션 - 숫자야구
##
### 구현에 사용한 라이브러리
- `@woowacourse/mission-utils`의 `Random` 및 `Console` API
  - `Random.pickNumberInRange()`: Random 값 추출을 위해 사용
  - `Console.readLineAsync`, `Console.print`: 사용자의 값을 입·출력받기 위해 사용
##
## 기능 목록
### App.js
- `App.js` 실행 시 `generateRandomNumbers` 메서드를 호출하여 3자리 숫자를 생성
  - `generateRandomNumbers()`: 1~9까지의 난수 3개를 반환
- `play` 실행 시 게임 시작 메시지가 출력되고 `Console.readLineAsync`로 사용자에게 숫자를 입력받음
  1. 이 때 3자리의 숫자가 아닐 경우 에러 메시지 출력 후 다시 입력 받음
  2. 입력받은 숫자와 생성된 숫자를 비교하여 스트라이크와 볼을 판단
     - `getScore`는 사용자가 입력한 숫자와 컴퓨터의 3자리 난수를 비교하여 스트라이크와 볼의 개수를 카운트함
  3. 스트라이크와 볼의 개수를 출력하고 다시 숫자를 입력받음
  4. 3 스트라이크일시 게임이 종료되며, 사용자에게 게임 재시작 여부를 출력함
