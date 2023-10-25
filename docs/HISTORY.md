<div align="center">

# [기록] 숫자 야구 ⚾️

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>

</div>

### 3️⃣🔃 3차 구현 보충

▪️ **예외 처리**

- 중첩된 `throw catch` 문을 수정
- 중복된 숫자 입력에 대한 예외 처리 추가

### 3️⃣ 3차 구현

<aside>

🎯 **Coding convention**과 **OOP**를 좀더 고려하여 리팩토링하고 임의의 추가 구현을 시행

</aside>

▪️ **OOP**

- 멤버 필드들 priavte으로 변환 및 그에 따른 get, set 함수 구현
- `endGame()` 위치 수정

▪️ **추가 구현**

- 문자 형태의 baseball에 대한 예외 처리 추가
- 야구공의 길이를 변화시킬 수 있도록 기능 추가

### 2️⃣🔃 2차 구현 보충

2차 구현을 통해 생성한 클래스와 변수들, 메소드들에 대해 구체적으로 명세한다.

**▪️Baseball**

세 개의 숫자 쌍을 하나의 Baseball로 생각한다. Baseball은 랜덤한 3개의 숫자 쌍 혹은 문자열을 입력받아 생성한다

- **Feild**

  - `baseball` : 생성된 baseball을 저장한다
  - `BASEBALL_LENTH` : baseball의 길이를 정의한다

- **Method**
  - `setRandomBaseball` : 랜덤한 숫자를 가진 baseball을 생성한다
  - `setStringToBaseball` : 문자를 입력받아 baseball로 변환한다
  - `isInvalidBaseballString` : 문자의 baseball로의 변환 가능 여부를 판단한다
  - `compareBaseball` : 두 baseball을 입력받아 strike, ball, out를 판단한다

▪️ **Game**

한 번의 게임을 의미한다. 한 게임이 종료되면 재시작과 종료를 결정한다.

- **Feild**

  - `answerBaseball` : 답이 될 랜덤한 baseball을 저장한다
  - `guessBaseball` : 사용자가 입력하는 baseball을 저장한다
  - `gameState` : 게임의 상태를 저장한다. 상태 상수는 `GameState.js`에 존재한다

- **Method**
  - `runGame` : 한 번의 게임을 실행한다
  - `runSingleGuess` : 한 번의 사용자 시도와 평가를 진행한다
  - `getGuess` : 사용자 입력을 받고 그에 따른 baseball을 생성한다
  - `tellResult` : 두 baseball의 비교 결과를 출력한다
  - `endGame` : 게임 재시작 및 종료 여부를 입력받고 수행한다

### 2️⃣ 2차 구현

<aside>

🎯 **코드 분리**, **class property 줄이기**를 고려하여 리팩토링

</aside>

**▪️ 코드 분리**

- `class Game` : 한번의 게임에 대한 객체이다
- `class Baseball` : 연속된 3개의 숫자에 대한 객체이다
- `checkGuess` : 사용자의 입력에 대한 예외를 확인한다
- `const Messages` : 게임 내에서 사용하는 문구 상수이다

**▪️ Class property 줄이기**

- `target` , `guess` 를 property가 아닌 변수로 다룬다
- `strike` , `ball` , `out` 를 property가 아닌 변수로 다룬다

### 1️⃣🔃 1차 구현 보충

1차 구현 중 **미리 계획하지 못한 구현**들과 **테스트를 통과와 비동기 처리를 위해 발생한 수정 사항**에 대해 작성한다.

▪️ **Class Property**

```jsx
constructor() {
  this.target;              // 생성된 랜덤 숫자
  this.targetLength = 3;    // 랜덤 숫자의 길이
  this.gameState = 0;       // 0 - 시작 | 1 - 재시작 | 2 - 종료
  this.guess;               // 사용자가 추측한 숫자

  this.strike;              // 스트라이크 수
  this.ball;                // 볼 수
  this.out;                 // out 여부
}
```

▪️ **Methods**

- `initGame`
  - 랜덤 숫자를 생성한다
  - ~~시작 문구를 출력한다~~ → 테스트 통과를 위해 삭제
- `runSingleGuess`
  - 사용자의 한번의 guess에 대한 입력부터 출력이 이루어진다
  - 입력 길이에 대한 예외를 처리한다
- `getGuess`
  - 사용자로부터 입력을 받는다
  - 비동기 처리가 필요하다
- `evalGuess`
  - 결과값을 초기화 한다
  - 사용자의 입력을 평가한다
- `tellResult`
  - 입력 결과를 출력한다
- `endGame`
  - 정답을 맞추었는지 확인한다
  - 정답 문구를 출력한다
  - 게임을 종료하거나 다시 시작한다

### 1️⃣ 1차 구현

<aside>

🎯 `ApplicationTest`의 모든 테스트 성공

</aside>

JS로는 객체 지향적인 구현을 시도해본 적이 없어, 1차 구현에서는 완벽한 구현보다는 기능을 구현하고 테스트를 통과하는 것에 집중한다.

**▪️ Methods**

- `initGame`
  관련된 자료구조를 초기화하고 시작 문구를 출력한다
- `runSingleGuess`
  한번의 guess에 대한 입력부터 출력이 이루어진다
  - `getGuess`
    사용자로부터 입력을 받는다
  - `evalGuess`
    사용자의 입력을 평가한다
  - `tellResult`
    결과를 출력한다
- `endGame`
  게임을 종료하거나 재 시작한다
