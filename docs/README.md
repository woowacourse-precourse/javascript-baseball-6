# 숫자 야구 게임 기능 정리 ⚾️

## 1. Player

- [x] string 값을 인자로 받아 **ValidatedBalls** 를 만드는 메서드 구현

## 2. Computer

- Random 값 추출은 `Random.pickNumberInRange()`를 활용

- [x] **Player** class를 상속 받음.
- [x] 숫자(1~9 사이의 정수) 3개를 랜덤으로 만드는 메서드 구현.

## 3. ValidatedBalls

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 “[ERROR]“로 시작해야 한다.

* [x] 받은 숫자가 3자리 수 인지 검증.(단 각 숫자가 0보다 커야함)
* [x] 중복되지 않은 수 인지 검증해야함.
* [x] 검증 성공하면 Array로 만듦.
* [x] 검증 실패하면 throw로 에러 처리

## 4. Game

- 게임 시작, 게임 흐름, 게임 종료를 컨트롤.
- 게임 시작 -> Computer에게 **ValidatedBalls** 생성하게함.-> **Player**에게 입력값 받음 -> **Referee** 에게 힌트 요구 -> 결과에 따라 strike 값 조정 -> strike 값이 3이 될 때 까지 반복.

* [x] 1 값을 받으면 게임 시작, 2 값을 받으면 게임 종료
* [x] **Referee**가 3 strike라고하면 게임 종료
* [x] 3strike가 되면 '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 출력.
* [x] 3strike가 아니면 `Console.readLineAsync`으로 값을 받아냄.

## 5. Referee

- Player,Computer의 **ValidatedBalls** 을 받아 점수 계산 및 결과 return

* [x] computer,player의 **ValidatedBalls** 을 받기.
* [x] **ValidatedBalls**을 받으면 computer의 **ValidatedBalls**와 비교하여 result을 string으로 return

## 6. Message

- [x] Prompt message들 모아놓은 PromptMessage 구현
- [x] Error message들 모아놓은 ErrorMessage 구현
