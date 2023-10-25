# ⚾️ 숫자야구 미션

## 🏷️ 목차
- [📄 기능목록](#2-📄-기능-목록)
- [🗂️ 폴더 구조](#2-🗂️-폴더-구조)
- [🗄️ Class Diagram](#2-🗄️-Class-Diagram)
 
## 📄 기능 목록

### 게임 시작
- 게임을 시작하며 `숫자 야구 게임을 시작합니다.` 문구를 출력.

### 랜덤 정답 생성
- `mission-utils` 라이브러리의 `Random.pickNumberInRange` 함수를 사용하여 1부터 9까지 세개의 숫자를 중복없이 선택

### 플레이어 숫자 입력 받기
- 플레이어는 1부터 9까지의 숫자를 입력.
- 다음과 같은 조건에 부합하지 않는다면 예외처리 후 프로그램 종료
  + 숫자의 갯수가 3이 아닌 입력
  + 숫자가 아닌 문자를 입력
  + 중복되는 숫자를 입력
  + 1과 9사이의 숫자가 아닌 숫자를 입력 (0)

### 플레이어 숫자와 정답 비교
- 플레이가 입력한 숫자와 생성된 정답과 비교하여 ball과 strike의 갯수를 판정
  + 정답에 포함된 숫자의 위치가 다를 경우 ball 
  + 숫자의 위치까지 같을 경우 strike 

### Ball Strike 출력
- ball과 strike 갯수에 맞게 결과를 출력
- ball과 strike 의 갯수 하나만 0이라면 0이 아닌 값만을 출력 
- ball과 strike가 전부 0이라면 `낫싱` 출력
- 세개의 숫자를 위치까지 전부 맞췄을 경우 `3스트라이크`와 `3개의 숫자를 모두 맞히셨습니다! 게임 종료` 출력 

### 게임 재시작
- 게임의 재시작 및 종료 여부를 뭍기 위한 입력 받기
  + `1` 입력 시 게임 재시작
  + `2` 입력 시 게임 종료

## 🗂️ 폴더 구조

```
📂 javascript-baseball-6
├─ .gitignore
├─ .npmrc
├─ README.md
├─ 📂 src
│  ├─ App.js
│  ├─ 📂 constant
│  │  ├─ CONSTANT.js
│  │  ├─ ERROR.js
│  │  └─ MESSAGE.js
│  ├─ 📂 Controller
│  │  └─ Controller.js
│  ├─ 📂 docs
│  │  └─ README.md
│  ├─ 📂 Model
│  │  └─ Model.js
│  ├─ 📂 utils
│  │  ├─ compareNum.js
│  │  └─ mkOpponentNum.js
│  ├─ 📂 validation
│  │  ├─ MainValidation.js
│  │  └─ RestartValidation.js
│  └─ 📂 view
│     ├─ inputView.js
│     └─ outputView.js
└─ 📂 __tests__
   ├─ ApplicationTest.js
   ├─ ModelTest.js
   ├─ UtilTest.js
   └─ ValidationTest.js
```

## 🗄️ Class Diagram
---
### Controller - View
``` mermaid
classDiagram
  App --|> Controller : Object Instantiation
  Controller <|-- inputView : Passing Input
  Controller --|> outputView : Output
  MainValidation --|> inputView : Valide Input
  RestartValidation --|> inputView : Valide Input

  App : play()

  Controller : #model
  Controller : sendPlayerNum() 
  Controller : ballCountController(input)
  Controller : ballCountOutputController()
  Controller : endController()

  inputView : readPlayerNum()
  inputView : readPlayerNum()

  outputView : printGameStart()
  outputView : printBallStrike(ball, strike)
  outputView : printNothing()
  outputView : printThreeStrike()

  MainValidation : checkCorrectMainNumber(input)
  MainValidation : checkCorrectMainNumberRange(input)
  MainValidation : checkCorrectMainNumbersize(input)
  MainValidation : checkDuplicationMainNumber(input)

  RestartValidation : checkOneOrTwo(input)
```
---
### Controller -Model
``` mermaid
classDiagram
  Controller <-- Model
  mkOpponentNum --> Model
  compareNum <-- Model

  Controller : #model
  Controller : sendPlayerNum() 
  Controller : ballCountController(input)
  Controller : ballCountOutputController()
  Controller : endController()

  Model : #opponentNum
  Model : #playerNum
  Model : #ball
  Model : #strike
  Model : savePlayerNum(input)
  Model : ballStrike()
  Model : getOpponentNum()
  Model : getPlayerNum()
  Model : getBall()
  Model : getStrike()
```
---
