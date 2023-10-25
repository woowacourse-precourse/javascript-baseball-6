<div align="center">
  
# 숫자 야구 ⚾️
<br>

본 문서는 우테코 6기 [**1주차 미션 - 숫자 야구**](https://github.com/woowacourse-precourse/javascript-baseball-6)에 대한 명세입니다.<br>
_구현한 기능_, _디렉토리 구조_, _구현 기록_ 에 대한 간략한 설명을 포함하고 있습니다.

<br>

<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
</div>

<br>

본 구현은 외부 라이브러리 없이 순수 Vanilla JS를 통해서만 구현했습니다.<br>
또한 `Node.js` 버전 `18.17.1` 이상의 실행환경이 필요합니다 😏

</div>

<br>

## 👩🏻‍💻 구현 기능

1. 게임 시작 멘트와 함께 랜덤한 수를 생성하고 저장한다.<br>
   ✦ 생성된 수는 3자리 이며 **1부터 9까지의 서로 다른 수**로 이루어저야 한다.<br><br>

2. 플레이어로부터 값을 입력받는다.<br>
   ✦ 입력의 길이가 지정된 길이보다 긴지 확인한다.<br>
   ✦ 입력에 숫자가 아닌 다른 값이 있는지 확인한다.<br>
   ✦ 입력에 중복된 숫자가 없는지 확인한다.<br>
   ✦ 입력 오류가 확인되면 에러 메세지와 함께 프로그램을 종료한다.<br><br>

3. 입력 값과 생성된 수를 비교하여 결과를 출력한다.<br>
   ✦ 같은 수가 같은 자리에 있으면 `스트라이크`<br>
   ✦ 같은 수가 다른 자리에 있으면 `볼`<br>
   ✦ 같은 수가 전혀 없으면 `낫싱`<br>
   ✦ `볼`과 `스트라이크`가 동시에 존재하면 `볼`을 먼저 출력한다.<br><br>

4. 숫자를 모두 맞추면(`3스트라이크`) 게임을 종료한다.<br><br>

5. 종료 멘트를 출력하고 사용자의 입력에 따라 게임을 재시작 혹은 종료한다.<br>
   ✦ 입력 `1`은 재시작, `2`는 종료를 의미한다.<br><br>

## 🏛️ 디렉토리 구조 및 역할

```bash
+ src
  └ App.js
  └ Baseball.js
  └ Game.js
  └ GameState.js
  └ Messages.js
```

<br>

1. <b>App</b><br>
   ✦ 프로그램의 시작과 종료를 담당한다.<br>
   ✦ 게임을 실행시키고 한 게임 종료 시 재시작 및 종료 여부를 확인한다.<br><br>

2. <b>Baseball</b><br>
   ✦ 서로 다른 3개의 숫자를 하나의 개념으로 취급한다.<br>
   ✦ Baseball의 생성과 Baseball 간의 비교에 대한 메소드를 담고 있다.<br>
   ✦ 사용자 입력의 예외처리가 진행된다.<br><br>

3. <b>Game</b><br>
   ✦ 랜덤한 숫자가 생성되고 사용자가 해당 숫자를 맞출 때 까지를 한번의 게임으로 취급한다. 관련된 기능들을 포함한다.<br><br>

4. <b>GameState</b><br>
   ✦ 게임의 상태 상수를 관리한다.<br><br>

5. <b>Messages</b><br>
   ✦ 런타임 내에 출력되는 게임 메세지와 에러 메세지를 관리한다.<br><br>

## 📑 로그

<br>
<div align="center">

보다 구체적인 내용과 작업 과정은 `docs/HISTORY.md`를 확인해주세요 👀

</div>
<br>

- **:one:차 구현**<br>
  ✦ 기능 구현과 테스트 통과에 집중한다.<br>
  ✦ App.js 내에 모든 필드와 메소드를 추가한다.<br><br>

- **:two:차 구현**<br>
  ✦ 객체 지향을 고려하여 리팩토링한다.<br>
  ✦ 클래스를 생성하고 코드를 분리한다. <br><br>

- **:three:차 구현**<br>
  ✦ 객체 지향을 보다 고려하고 코딩 컨벤션을 고려하여 리팩토링한다.<br>
  ✦ 필수 기능 외의 구현을 진행한다.<br>
