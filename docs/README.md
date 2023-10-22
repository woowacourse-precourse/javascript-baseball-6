# 기능 요구 사항 구현

## `BaseballGame` 클래스

## `Computer` 클래스

- `generate()`: 난수 생성하여 반환 (`MissionUtils.Random.pickNumberInRange`) 사용
- `match(input)`: 유저의 입력과 컴퓨터의 `nums`를 비교하여 **매칭 문자열과 매치 여부** 반환
- `makeMatchString({ strike, ball })`: 스트라이크, 볼 개수를 입력받아 매칭 문자열 반환
- `isMatch({ strike })`: 유저의 입력과 컴퓨터가 생성한 난수가 모두 일치하는지 여부를 불리언으로 반환

<br/>

## `View` 클래스

### `Input` 클래스

- 유저의 입력을 비동기로 받아 반환한다
- `Console.readLineAsync` 라이브러리 사용

### `Output` 클래스

- 유저에게 보여줄 문자열을 출력한다.
- `Console.print` 라이브러리 사용

<br/>

## `Validator` 클래스

- 유효성 검사를 수행하여 에러를 반환한다

<br>

- `guessNumber(input)`: 아래 2가지에 대해 검사
  1. 숫자로 이뤄졌는지
  2. 서로 다른 3개의 숫자인지
- `controlNumber(input)`: `1, 2` 중 1개가 입력되었는지 검사

## `constants` 디렉토리

- `message.js`: 유저에게 보여질 문자열에 관한 상수
- `number.js`: 전역에 사용되는 숫자 상수화
- `index.js`를 통해 `import`

<br/>

# 예외 처리

- [x] 유저의 입력값이 숫자가 아닌 경우
- [x] 유저의 입력값이 3자리가 아닌 경우
- [x] 게임 재시작할 때 `1`, `2`가 아닌 입력을 받는 경우
- [x] `'[ERROR]'`로 시작하는 에러 메시지
- [x] 서로 다른 숫자를 입력하지 않는 경우

<br/>

# 커밋 컨벤션

- [Udacity 커밋 컨벤션](https://udacity.github.io/git-styleguide/)을 사용합니다.

<br/>

# 더 나아가서

## 변경 용이성

- 맞추는 개수가 3개에서 변경된다면?
- 재시작/종료를 구분하는 값이 변경된다면?
- 책임을 분리해 의존성을 조금 줄이는 방식으로 고민
