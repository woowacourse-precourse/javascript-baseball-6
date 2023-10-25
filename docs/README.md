# ⚾️ 1주차 미션 - 숫자 야구

> 1부터 9까지의 서로 다른 수들로 이루어진 3자리의 숫자를 맞히는 게임

<br/>

## 🏄 전체적인 플로우

1. 게임이 시작되면 `숫자 야구 게임을 시작합니다.` 메시지를 출력한다.
2. 컴퓨터가 1부터 9까지 수 중, 3자리 수를 중복 없이 랜덤 선택하여 하나의 숫자로 생성한다.
3. 사용자로부터 1부터 9까지 수 중, 3자리 수를 중복 없이 선택된 하나의 수로 입력받는다.
4. 사용자가 입력한 숫자가 유효한 값이 아니라면 `[ERROR] 숫자가 잘못된 형식입니다.`를 출력하고 게임을 즉시 종료한다.
5. 사용자가 유효한 숫자를 입력하면 사용자가 뽑은 수와 컴퓨터가 뽑은 수를 비교하여 결과를 계산한다.
6. 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이라는 힌트를 출력한다.
7. 정답이 맞다면, `3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`를 출력한 후 게임을 종료시킨다.
8. 게임 종료 후, `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`를 출력한다.
9. 사용자가 `1`을 입력하면 `숫자 야구 게임을 시작합니다.`가 출력되며 게임이 다시 시작되고, `2`를 입력하면 `게임 종료`가 출력된다.
10. 만약 사용자가 입력한 숫자가 유효한 숫자가 아니라면 `[ERROR] 숫자가 잘못된 형식입니다.`를 출력하고 게임을 즉시 종료한다.

<br/>

## 👩🏻‍🏫 플로우 차트

<img width="476" alt="baseball-flow-chart" src="https://github.com/ella-yschoi/CS-Study/assets/123397411/e4e63755-5dbd-40dd-9c59-3fc0d0cf1a81">

<br/>

## 📝 구현할 기능

- [x] 컴퓨터가 1부터 9까지 수 중, 3자리 수를 중복 없이 랜덤 선택하여 하나의 숫자로 만드는 기능
- [x] 사용자로부터 1부터 9까지 수 중, 3자리 수를 중복 없이 선택하여 하나의 숫자를 입력 받는 기능
- [x] (게임 진행 중) 사용자가 입력한 값이 유효한 값인지 판별하는 기능
- [x] 사용자가 뽑은 수와 컴퓨터가 뽑은 수를 비교하여 결과를 계산 및 힌트를 출력하는 기능
- [x] 사용자가 뽑은 수와 컴퓨터가 뽑은 수와 일치할 때까지 게임을 반복하는 기능
- [x] (게임 종료 후) 사용자가 입력한 값이 유효한 값인지 판별하는 기능
- [x] 사용자가 입력한 숫자에 따라 재시작 여부를 판별 후, 다시 시작하는 기능

<br/>

## 🛠️ 기능별 명세

### 게임 시작

- `Console.print()`로 `숫자 야구 게임을 시작합니다.` 출력
- `startGame()`로 게임 시작 로직 실행
- `App.js`의 `play()`로 게임 시작

### 컴퓨터 숫자 생성

- `Generator` 클래스 생성
- `generateRandomNumber()` 안에서 컴퓨터가 선택한 숫자를 생성
  - 빈 배열 `generatedNumber` 선언 후, `new Set()`으로 중복 검사하여 `newComputerNumber` 생성
  - `add()`로 해당 숫자를 Set 개체의 맨 뒤에 value 추가
  - 값이 완성되면 `join()`으로 배열의 모든 값을 연결한 하나의 문자열로 리턴

### 사용자 숫자 입력

- `BaseballGame` 클래스 생성
- `startGame()`를 통해 `getUserInput()`가 실행됨
- `getUserInput()`을 통해 사용자의 입력 값을 관리
- `MissionUtils.Console.readLineAsync()`을 통해 사용자에게 입력을 받음
- `this.handleUserInputDuringGame()`을 통해 사용자 입력 값을 관리
  - `isValidGameInputDuringGame()`로 유효한 숫자인지 유효성 검사
  - `getHintToUser()`로 조건에 맞는 `hintMessage` 출력

### 진행 중 사용자의 숫자 유효성 검사

- `isNumeric()`을 통해 1부터 9까지의 숫자만 포함되도록 정규표현식 사용
- `isUniqueDigits()`을 통해 `Set()`의 size가 3인지 유효성 검사
- `isValidGameInputDuringGame()`를 통해 `userInputValue`가 아래 세 경우가 아니라면 `true` 리턴
  - `userInputValue`의 length가 3이 아니라면 `false` 리턴
  - `isUniqueDigits()`를 통해 중복되는 숫자가 있다면 `false` 리턴
  - `isNumeric()`를 통해 1부터 9까지의 숫자가 아니라면 `false` 리턴

### 사용자 숫자와 컴퓨터 숫자 비교해 힌트 리턴

- `countStrike()` 안에서 스트라이크 개수 계산
  - 입력: `computerNumber`, `userNumber`
  - 출력: `strikeNumber`
  - 두 문자열을 `convertStringToArray()`를 통해 배열로 변환
  - 두 배열을 비교하여 같은 수라면 `strikeNumber` +1하고 리턴
- `countBall()` 안에서 볼 개수 계산
  - 입력: `computerNumber`, `userNumber`, `strikeNumber`
  - 출력: `ballNumber`
  - `filter()`로 `userNumber`와 `computerNumber`가 일치하는 `commonNumbers`만을 남기고 배열 생성
  - 생성된 배열의 length에서 `strikeNumber`를 뺀 수를 리턴
- 계산된 `strikeNumber`와 `ballNumber`를 `convertNumberToString()`의 인자로 전달
  - 힌트 문자열 `hintMessage` 선언
  - `ballNumber` > 0이면, `${ballNumber}`을 `hintMessage`에 추가
  - `strikeNumber` > 0이면, `${strikeNumber}`을 `hintMessage`에 추가
  - `hintMessage`가 없다면, `낫싱`을 `hintMessage`에 추가
- `getHintToUser()`를 export해 게임 진행 중 `hintMessage`가 출력되도록 함

### 컴퓨터의 숫자와 일치할 때까지 게임 반복

- 사용자가 입력한 값을 `handleUserInputDuringGame()`에 전달
- 컴퓨터의 숫자와 일치한다면,
  - `recommendRestart()`안에서 `3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`를 출력
  - `Console.readLineAsync()`를 통해 `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.` 출력
- 컴퓨터의 숫자와 불일치한다면,
  - `Console.print()`로 `hintMessage` 출력
  - `getUserInput()` 호출해 사용자가 다시 숫자를 입력하도록 함

### 재시작 여부 판별

- `handleUserInputEndGame()` 호출해 입력 값에 따라 재실행 여부를 판단
  - 입력한 값이 1이면 `restartGame()` 호출해 게임 재시작
    - `generateNewCorrectNumber()`를 통해 컴퓨터가 숫자 재생성
    - `restartGame()`을 통해 새로운 랜덤 숫자를 생성하고 게임 시작 로직 실행
  - 입력한 값이 2면 `Console.print`로 `게임 종료` 출력

### 종료 후 사용자의 숫자 유효성 검사

- `isValidGameInputEndGame()` 안에 1과 2가 포함된 배열 선언
- `includes()`로 입력된 값에 1과 2의 포함 여부 확인
  - 포함되어 있지 않다면, throw문으로 예외를 발생시켜 `Console.print()`로 `[ERROR] 숫자가 잘못된 형식입니다.` 출력하며 즉시 게임 종료

<br/>

## 🚨 예외 처리

### 게임 진행 중

- [x] 사용자의 입력 값이 세 자리가 아닐 경우
- [x] 사용자의 입력 값에 중복되는 숫자가 있을 경우
- [x] 사용자의 입력 값이 숫자가 아닌 경우

### 게임 종료 후

- [x] 사용자의 입력 값이 1 or 2 외의 값일 경우

<br/>

## ✅ 프로그래밍 요구 사항

### 실행 환경

- [x] Node.js `18.17.1 버전`에서 실행 가능한가?
- [x] 프로그램 실행의 시작점인 `App.js`의 `play` 메서드로 실행시킬 수 있는가?
- [x] `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현했는가?
- [x] [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 했는가?
- [x] 프로그램 종료 시 `process.exit()`를 호출하지 않도록 했나?
- [x] 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공하나?
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않았는가?

### 라이브러리

- [x] `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현했는가?
- [x] Random 값 추출은 `Random.pickNumberInRange()`를 활용했는가?
- [x] 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용했는가?

<br/>

## 🧹 리팩토링

- [x] 모든 문자열을 불변한 상수로 동결하기
- [x] 파일명과 메서드명을 직관적으로 명시하기
- [x] 비즈니스 로직이 아닌 함수들을 utils.js에 분리하기
