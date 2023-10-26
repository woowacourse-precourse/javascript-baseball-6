<div align="center">
<img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>

  <h1 align="middle">숫자 야구 게임</h1>
   <img src="https://img.shields.io/badge/node-18.17.1-339933?logo=node.js">
</div>

<br>

# How To Run

## Install

- 테스트 패키지 설치를 위해 Node.js 버전 18.17.1 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```
npm install
```

## Run

- 다음 명령어를 입력해 프로그램을 실행한다.

```
node ./src/App.js
```

## Test

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```
npm test
```

# 🛠️ 주어진 요구사항

기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
    - 123을 제시한 경우 : 1스트라이크
    - 456을 제시한 경우 : 1볼 1스트라이크
    - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료되고, 재시작 버튼이 노출된다.
- 게임이 종료된 후 재시작 버튼을 클릭해 게임을 다시 시작할 수 있다.
- 사용자가 잘못된 값을 입력한 경우 `alert`으로 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.

# 📌 구현 기능 목록

- [x] 컴퓨터가 1에서 9까지 서로 다른 임의의 수 3자리를 발생시킨다. | generateRandomNumbers
- [x] 사용자로부터 서로 다른 임의의 수 3자리를 입력받는다. | InputProcessor.inputNumber
- [x] 사용자가 입력한 값에 대한 유효성을 검증한다. ( 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션을 즉시 종료시킨다. ) | isValidNumberList
  - 세자리 수가 아닌 경우 | isThreeDigit
  - 각 자리 숫자가 1 ~ 9 사이의 숫자가 아닌 경우 (0, 문자, 특수문자 등) | isOnlyNumber
  - 중복되는 숫자가 있을 경우 | isDuplicated
- [x] 컴퓨터가 생성한 난수와 사용자가 입력한 값을 비교한다. | compare
  - 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼
- [x] 사용자가 입력한 값에 대한 게임 힌트를 출력한다. | getHintString
  - 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
  - 일치하는 숫자가 하나도 없는 경우 낫싱
- [x] 비교 결과에 따라 게임을 진행한다.
  - 정답(3 스트라이크)인 경우, 게임을 종료시킨다.
  - 정답이 아닌 경우, 게임을 계속해서 진행한다.
- [x] 게임이 종료된 후, 게임을 다시 시작하거나 완전히 종료할 수 있다. | InputProcessor.inputOption

## 🎯 프로그래밍 요구 사항

- [x] Node.js 18.17.1 버전에서 실행 가능해야 한다. **Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- [x] 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.
- [x] `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [x] [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- [x] 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- [x] 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

## 📚 과제 진행 요구 사항

- [x] 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball-6/) 저장소를 Fork & Clone해 시작한다.
- [x] **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
- [x] 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.
