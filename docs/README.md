# 숫자 야구 게임 기능 정리 ⚾️

- class별 기능 목록을 정리해보았습니다.

## 1. Player

- [ ] string 값을 인자로 받아 **Balls** 를 만드는 메서드 구현

## 2. Balls

- Random 값 추출은 `Random.pickNumberInRange()`를 활용
- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 “[ERROR]“로 시작해야 한다.

* [ ] 받은 숫자가 3자리 수 인지 검증.(단 각 숫자가 0보다 커야함)
* [ ] 중복되지 않은 수 인지 검증해야함.
<!-- * [ ] instance의 class가 Computer면 -->
* [ ] 검증 성공하면 Array로 만듦.
* [ ] 검증 실패하면 throw로 에러 처리

## 3. Computer

- [ ] Player class를 상속 받음.
- [ ] 숫자(1~9 사이의 정수) 3개를 랜덤으로 만드는 메서드 구현.

## 4. Human

- [ ] Player class를 상속 받음.

## 5. Game

- strike라는 정수값을 갖음.(초기값 0)
- 게임 시작, 게임 흐름, 게임 종료를 컨트롤.
- 게임 시작 -> Computer에게 **Balls** 생성하게함.-> Human에게 입력값 받음 -> **Hint** 에게 힌트 요구 -> 결과에 따라 strike 값 조정 -> strike 값이 3이 될 때 까지 반복.

* [ ] 1 값을 받으면 "숫자 야구 게임을 시작합니다." 문구 출력 후 게임 시작
* [ ] 3strike가 되면 게임 종료
* [ ] 3strike가 되면 '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 출력.
* [ ] 3strike가 아니면 사용자에게 `Console.readLineAsync`으로 값을 받아냄.

## 6. Hint

- Human,Computer의 **Balls** 을 받아 힌트 생성.

* [ ] computer의 **Balls** 을 받기
* [ ] player의 **Balls**을 받으면 computer의 **Balls**와 비교하여 힌트 Console.
