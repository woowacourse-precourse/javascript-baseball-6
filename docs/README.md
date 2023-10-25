# 구현 목록
## 단계별 기능 요구 사항
**모든 사용자 입출력은 `@woowacourse/mission-utils`의 `Console` 라이브러리 사용**
### 1. 시작 문구 출력 및 초기화
- 게임 시작 문구 출력
```
숫자 야구 게임을 시작합니다.
```
- 임의의 수 3개 선택 (`MissionUtils.Random` 활용)
```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```
### 2. 사용자 입력 및 결과 출력
- `Console.readLineAsync` 활용해 사용자 값 입력
```
숫자를 입력해주세요 : 
```
- 사용자 입력 값에 따라 아래 케이스로 분기
  - 맞춘 숫자가 있는 경우 결과를 볼, 스트라이크 개수로 표시
  ```
  1볼 1스트라이크
  ```
  - 하나도 없는 경우 아래 출력
  ```
  낫싱
  ```
  - 3개의 숫자를 모두 맞힐 경우 아래 문자열 출력 후 게임 종료 단계로 이동
  ```
  3스트라이크
  3개의 숫자를 모두 맞히셨습니다! 게임 종료
  ```
  - 잘못된 값의 경우 `throw` 문을 사용해 예외 발생시킨 후 종료
### 3. 게임 종료
- 게임 종류 후 아래 문구 출력
```
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
```
- 1을 입력받은 경우 게임 재시작, 2를 입력받은 경우 프로그램 종료