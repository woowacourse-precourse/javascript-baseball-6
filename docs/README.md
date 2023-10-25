# 숫자 야구 게임

이 문서는 숫자 야구 게임을 설계해보자. 

## 클래스
### App 클래스
- `validateUserInput(input)`: 사용자가 입력한 숫자를 검증하여 규칙에 맞지 않는 경우 예외를 발생시킨다.
- `outputResultString(strikeCount, ballCount)`: 스트라이크와 볼 개수에 따라 피드백 메시지를 생성한다.
- `play()`: 게임을 진행하고, 승리 조건 또는 사용자의 선택에 따라 게임을 종료하거나 다시 시작한다.

### BallCounter 클래스
- `getStrike(inputNumberList, targetNumber)`: 입력 숫자와 목표 숫자를 비교하여 스트라이크의 개수를 반환한다.
- `getBall(inputNumberList, targetNumber)`: 입력 숫자와 목표 숫자를 비교하여 볼의 개수를 반환한다.

### NumberGenerator 클래스
- `generateUniqueRandomNumbers(count, min, max)`: 서로 다른 숫자로 구성된 지정된 개수의 무작위 숫자를 생성한다.

## 게임 실행 방법
1. App 클래스의 인스턴스를 생성한다.
2. `play()` 메서드를 호출하여 게임을 시작한다.
3. 게임을 진행하며 스트라이크와 볼 개수에 따른 메시지를 확인한다.
4. 게임 종료 시 3개의 숫자를 모두 맞히면 승리 메시지가 표시된다.

