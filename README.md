## 기능 구현 목록

### 기능 목록

- [x] 게임의 정답인 Random한 세자리 숫자를 만든다.
- [x] 입력할 수 있는 input을 만든다.
- [x] 입력 받은 input의 유효성 검사를 진행한다.
- [x] 숫자 야구 게임을 만든다.
  - [x] 입력받은 숫자와 정답을 비교하여 볼, 스트라이크 갯수를 판단하는 기능을 만든다.
  - [x] 볼, 스트라이크 갯수 여부에 따라, '${볼의 갯수}볼 ${스트라이크 갯수}스트라이크' or '낫싱' or '3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료'를 출력하는 기능을 만든다.
- [x] 게임을 재시작 하거나 종료할 수 있는 기능을 만든다.

### 예외 처리

- [x] 게임 중 입력값의 타입이 number가 아닐 때, '[ERROR] 숫자만 입력해 주세요.'를 출력한다.
- [x] 게임 중 입력값의 타입이 number지만, 서로 다른 세자리 수가 아니거나 0을 포함한 수일 때, '[ERROR] 0을 제외한 서로 다른 세자리 수로 입력해주세요.'를 출력한다.
- [x] 게임 종료 후 입력값의 타입이 number 아니거나, 1과 2가 아닐경우 '[ERROR] 숫자 1과 2만 입력 가능합니다.'를 출력한다.

## Commit Rules

| Type 키워드 | 사용 시점                                              |
| ----------- | ------------------------------------------------------ |
| feat        | 새로운 기능 추가                                       |
| fix         | 버그 수정                                              |
| docs        | 문서 수정                                              |
| refactor    | 코드 리팩토링                                          |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등) |
