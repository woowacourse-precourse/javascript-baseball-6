# 🚀 기능 구현 목록

## App 클래스

### Methods

- [x] `play()`: 게임을 시작한다.

---

## BaseballGame 클래스

### Methods

- [x] `start()`: 게임을 시작하며, 필요한 객체를 초기화하고 게임의 메인 로직을 실행한다.
- [x] `playGame()`: 게임의 주 로직을 처리한다. 사용자의 입력을 받고, 스트라이크와 볼을 계산하여 결과를 출력한다.
- [x] `getUserInput()`: 사용자로부터 입력을 받아 반환한다.
- [x] `calculateResult()`: 사용자와 컴퓨터의 숫자를 비교하여 스트라이크와 볼을 계산한다.
- [x] `showGameResult()`: 계산된 스트라이크와 볼의 결과를 출력한다.
- [x] `isGameWon()`: 스트라이크 개수를 확인하여 게임이 이겨졌는지 판단한다.
- [x] `showGameEnd()`: 게임이 끝난 후, 사용자에게 게임을 재시작할지 물어보고 그에 따라 게임을 재시작하거나 종료한다.

---

## User 클래스

### Methods

- [x] `getInput()`: 사용자로부터 3개의 숫자를 입력 받는다.
  - [x] `readInput()`: 사용자로부터 입력을 받는다.
  - [x] `validateInput()`: 입력값이 유효한지 검사한다.
  - [x] `convertToNumberArray()`: 입력값을 숫자 배열로 변환한다.

---

## RandomNumberGenerator 클래스

### Methods

- [x] `generateRandomNumber()`: 1부터 9까지의 랜덤한 숫자 하나를 생성한다.(MissionUtils 라이브러리 사용)
- [x] `generateRandomNumbers()`: 랜덤한 3개의 숫자를 생성하고 배열로 반환한다.(중복 숫자는 허용x)

---

## StrikeAndBallCalculator

### Functions

- [x] `calculateStrikeAndBall()`: 스트라이크와 볼의 개수를 카운트한다.
  - [x] 각 자릿수의 숫자가 일치하는지 확인한다 (스트라이크).
  - [x] 각 자릿수는 일치하지 않지만 같은 숫자가 포함되어 있는지 확인한다 (볼).

---

## GameDisplay 클래스

### Methods

- [x] `showStartMessage()`: 시작 문구를 출력한다.
- [x] `showResult()`: 스트라이크, 볼의 개수를 결과창으로 보여준다.
- [x] `showWinMessage()`: 스트라이크가 3개일 경우, 정답 문구를 출력한다.
- [x] `showEndMessage()`: 게임을 재시작할지, 종료할지 선택하게 하는 문구를 출력한다.

---

## InputValidator 클래스

### Methods

- [x] `validateIsString()`: 입력값이 문자열인지 검사한다.
- [x] `validateIsThreeDigits()`: 입력값이 3자리 숫자인지 검사한다.
- [x] `validateNoDuplicateDigits()`: 입력값에 중복된 숫자가 없는지 검사한다.
- [x] `validateInRange()`: 입력값이 1부터 9까지의 숫자로 이루어져 있는지 검사한다. (정규식 사용)
- [x] `validateInput()`: 위의 모든 검사를 종합하여 수행한다.
- [x] `validateGameEndInput()`: 게임 종료 입력이 유효한지 ('1' 또는 '2') 검사한다.

---

## constants 폴더

### GameConstants.js

- [x] 게임 종료 후 시작값 `1`과 종료값 `2`를 담은 상수를 정의한다.

### MessageConstants.js

- [x] 게임 중 모든 메시지와 검증 에러 메시지가 담긴 상수를 정의한다.

### NumberConstants.js

- [x] 게임 중 모든 숫자들이 담긴 상수를 정의한다.
