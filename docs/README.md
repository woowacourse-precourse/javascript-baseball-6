# 🔗 원본 레포

[woowacourse-precourse/javascript-baseball-6](https://github.com/woowacourse-precourse/javascript-baseball-6)

<br />

# 🎯 프로그래밍 요구 사항

- 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

  ```js
  const app = new App();
  app.play();
  ```

- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

  - #### `readLineAsync(query)`

    주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환한다.

    ```js
    async function getUsername() {
      try {
        const username = await Console.readLineAsync("닉네임을 입력해주세요.");
      } catch (error) {
        // reject 되는 경우
      }
    }
    ```

  - #### `print(message)`

    주어진 문자열을 콘솔에 출력한다.

    ```js
    Console.print("안녕하세요.");
    ```

- Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.

  - #### `pickNumberInRange(startInclusive, endInclusive)`

    숫자 범위를 지정하면 시작 또는 끝 숫자를 포함하여 범위의 숫자를 반환한다.

    ```js
    Random.pickNumberInRange(1, 10); // 1
    Random.pickNumberInRange(1, 10); // 10
    Random.pickNumberInRange(1, 10); // 4
    Random.pickNumberInRange(1, 10); // 5
    ```

- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 상수명은 SNAKE_CASE로 작성한다.
- 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.
- 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않는다.

<br />

# 🚀 구현할 기능 목록

- 최초의 게임 시작 시, 게임 시작 문구 출력

```
숫자 야구 게임을 시작합니다.
```

- 컴퓨터가 **서로 다른 3자리의 숫자** 임의로 선택한다.
  - 0~9 중의 숫자 중에서, 중복되지 않게 3개를 선택한다.
- 사용자에게 **서로 다른 3자리의 숫자**를 입력 받는다.
  - 유효성 검증 : 입력은 3글자이고, 모두 숫자(0~9)이고, 모두 달라야 한다.
- 컴퓨터가 선택한 값과 사용자가 선택한 값 비교한 결과로 힌트 생성
  - 결과는 볼, 스트라이크 개수로 표시
  - 같은 수가 같은 자리에 있으면 **스트라이크**
  - 같은 수가 다른 자리에 있으면 **볼**
- 생성된 힌트를 출력
  - 스트라이크, 볼이 모두 0이면 `낫싱`
  - 스트라이크가 0, 볼이 1 이상이면 `{볼 개수}볼`
  - 스트라이크가 1이상, 볼이 0이면 `{스트라이크 갯수}스트라이크`
  - 스트라이크, 볼이 모두 1 이상이면 `{볼 갯수}볼 {스트라이크 갯수}스트라이크`
- 3개의 숫자를 모두 맞힐 경우, 게임 종료 문구 출력
  ```
  3개의 숫자를 모두 맞히셨습니다! 게임 종료
  ```
- 3개의 숫자를 모두 맞힐 경우, 안내 문구를 출력하고 게임을 새로 시작할지 입력 받는다.
  - 유효성 검증 : 입력은 한 자리 숫자이다.
  ```
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  ```
- 게임을 새로 시작을 선택 시(1 입력), 게임 새로 시작
- 게임을 새로 시작하지 않는다면(2 입력) 프로그램 종료
- 사용자가 잘못된 형식의 입력을 하면, 에러 메시지 출력 후 프로그램 종료
  - `[ERROR] {에러 메시지}` 형태
