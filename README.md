# 1주차 미션 - 숫자 야구

### 1️⃣ 1차 구현 23.10.19

<aside>
🎯 `ApplicationTest`의 모든 테스트 성공

</aside>

JS로는 객체 지향 구현을 시도해본적이 없어, 메소드를 나누는 감이 잘오지 않는다. 따라서 1차 구현은 기능 구현 자체에 집중한다.

**▪️ Methods**

- `initGame`
  관련된 자료구조를 초기화하고 시작 문구를 출력한다
- `runSingleGuess`
  한번의 guess에 대한 입력부터 출력이 이루어진다.
  - `getGuess`
    사용자로부터 입력을 받는다
  - `evalGuess`
    사용자의 입력을 평가한다.
  - `tellResult`
    결과를 출력한다.
- `endGame`
  게임을 종료하거나 재시작 한다.

---

<aside>
💡 해당 문서는 우테코 6기 프리코스 미션 1주차 `README.md`를 바탕으로 작성됐습니다.

</aside>

[GitHub - woowacourse-precourse/javascript-baseball-6](https://github.com/woowacourse-precourse/javascript-baseball-6)

### ✏️ 과제 진행 요구 사항

기능 구현 전 **`docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.

### 🚀 기능 요구 사항

▪️ 1부터 9까지 `서로 다른 수` 로 이루어진 3자리 수 맞추기

▪️ 컴퓨터가 1에서 9까지 서로 다른 3개의 숫자 뽑음

▪️ 사용자의 잘못된 입력은 `throw` 문을 통해 예외 발생시키며 애플리케이션 종료

- **\*\*\*\***입력**\*\*\*\***
  - 서로 다른 3자리의 수
  - 게임 종료 후 재시작/종료를 구분하난 1과 2
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
- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.
