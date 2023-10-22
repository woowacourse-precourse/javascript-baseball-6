# 1주차 미션 - 숫자 야구

### 2️⃣ 2차 구현

<aside>

🎯 **코드 분리**, **class property 줄이기**를 고려하여 리팩토링

</aside>

**▪️ 코드 분리**

- `class Game`
  - 한번의 게임에 대한 객체이다
- `class Baseball`
  - 연속된 3개의 숫자에 대한 객체이다
- `checkGuess`
  - 사용자의 입력에 대한 예외를 확인한다
- `const Messages`
  - 게임 내에서 사용하는 문구 상수이다

**▪️ Class property 줄이기**

- `target` , `guess` 를 property가 아닌 변수로 다룬다
- `strike` , `ball` , `out` 를 property가 아닌 변수로 다룬다

### 1️⃣🔃 1차 구현 보충

1차 구현 중 **미리 계획하지 못한 구현**들과 **테스트를 통과와 비동기 처리를 위해 발생한 수정 사항**에 대해 작성한다.

▪️ ****\*\*\*\*****\*\*\*\*****\*\*\*\*****Class Property****\*\*\*\*****\*\*\*\*****\*\*\*\*****

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

▪️ **\*\***\*\***\*\***Methods**\*\***\*\***\*\***

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

---

<aside>

💡 해당 문서는 **우테코 6기 프리코스 미션 1주차 `README.md`**를 바탕으로 정리된 글입니다. 미션 문서는 아래 링크를 확인하세요

</aside>

[GitHub - woowacourse-precourse/javascript-baseball-6](https://github.com/woowacourse-precourse/javascript-baseball-6)

### ✏️ 과제 진행 요구 사항

기능 구현 전 **`docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.

### 🚀 기능 요구 사항

▪️ 1부터 9까지 **서로 다른 수**로 이루어진 세자리 수 맞추기

▪️ 컴퓨터가 **1에서 9까지** 3개의 숫자 뽑기

▪️ 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 **예외를 발생시킨 후 애플리케이션은 종료**

- **\*\*\*\***입력**\*\*\*\***
  - 서로 다른 세자리의 수
  - 게임 종료 후 재시작/종료를 구분하는 1과 2
- **출력**
  ```jsx
  숫자 야구 게임을 시작합니다.
  숫자를 입력해주세요 : 456
  낫싱
  숫자를 입력해주세요 : 123
  1볼 1스트라이크
  숫자를 입력해주세요 : 145
  1볼
  숫자를 입력해주세요 : 671
  2볼
  숫자를 입력해주세요 : 216
  1스트라이크
  숫자를 입력해주세요 : 713
  3스트라이크
  3개의 숫자를 모두 맞히셨습니다! 게임 종료
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  1
  숫자를 입력해주세요 : 123
  1볼
  ...
  ```

### 🎯 프로그래밍 요구 사항

▪️ Node.js `18.17.1` 사용

▪️ 시작점은 `App.js`의 `play` 메소드

```jsx
const app = new App();
app.play();
```

▪️ `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.

- Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.

  ```jsx
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  ```

- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print` 를 활용한다.
