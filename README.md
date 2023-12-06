# ⚾ 숫자 야구

## 소개

["우아한 테크코스 6기의 1주차 숫자야구"](https://github.com/woowacourse-precourse/javascript-baseball-6) 미션에 대한 과제입니다.

### 시현

<img src="./숫자야구.gif" width="400px" alt="숫자 야구 시현"/>

### 파일 구조 및 순서도

<details>
<summary>🗂️ 파일 구조 및 설명보기</summary>
<br/>
<div markdown='1'>

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Message.js : 입력,출력 메세지 관리
 ┃ ┣ 📜RegExp.js  : 정규 표현식 관리
 ┃ ┗ 📜Rule.js    : 게임 룰에 대한 상수 관리
 ┣ 📂controllers
 ┃ ┣ 📜Game.js  : 게임 시작,실행,재실행,종료 담당
 ┃ ┣ 📜index.js
 ┃ ┗ 📜InputControllers.js : 입력값을 가져와 모델에게 전달 (모델에서 유효성 검사 진행)
 ┣ 📂models
 ┃ ┣ 📜Computer.js : 랜덤 숫자를 만드는 컴퓨터 역할 담당
 ┃ ┣ 📜GameProgress.js : 게임의 진행의 상태(play,restart,end) 관리
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Referee.js : 컴퓨터 숫자와 사용자 숫자를 비교해 판정
 ┃ ┗ 📜User.js : 사용자가 입력한 값에 대한 유효성 검사 후 숫자 저장 및 반환
 ┣ 📂view
 ┃ ┣ 📜index.js
 ┃ ┣ 📜InputView.js : 사용자에게 입력에 대한 쿼리를 보여주고 입력값을 가져와 컨트롤에게 전달
 ┃ ┗ 📜OutputVew.js : 사용자에게 메세지 출력
 ┣ 📜App.js
 ┗ 📜index.js
```

</div>
</details>
<br/>
<details>
<summary>📝 순서도 보기</summary>
<br/>
<div markdown="1">
  <img src="./docs/숫자야구.png" alt="숫자야구_순서도" height="400px">

</div>
</details>

## 설치,실행 및 테스트

### Install

```bash
npm i
```

#### 💡저장된 Eslint,Prettier 설정 파일들을 적용시키려면 별도의 패키지 설치가 필요합니다.

사용한 패키지

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-prettier
- prettier

### 실행

```bash
node ./src/index.js
```

### Test

```bash
npm run test
```

## 공부

### 1. 모듈과 브라우저 호환성

처음에는 html파일을 만들어서 js파일을 연결해 과제를 진행했었습니다. 라이브 서버로 파일을 열었을때 "@woowacourse/mission-utils" 패키지에 대한 파일 경로 오류가 났습니다.

#### App.js

```ja
  import { MissionUtils } from '@woowacourse/mission-utils';
```

#### index.html

```html
<script type="module" defer src="./src/App.js"></script>
```

#### 오류

```
Uncaught TypeError: Failed to resolve module specifier " @woowacourse/mission-utils". Relative references must start with either "/", "./", or "../".
```

import 시 경로 오류에 대한 해결책들인 CDN울 사용해보거나 @woowacourse/mission-utils의 js파일로 경로를 변경하거나 importmap을 사용해 보기도 했지만 오류를 여전했습니다.

해당 오류가 나는 이유는 파일 경로 때문이 아니라 브라우저와 es6모듈의 호환성의 문제가 아닐까 추측합니다. 해당 프로젝트에서는 웹팩같은 패키지로 번들링을 진행하지 않았기 때문에 브라우저에서 모듈의 경로를 읽지 못하는 것 같습니다.

과제에서는 다른 패키지 사용을 금지했기 때문에 html에 js를 연결하지 않고 js만으로 과제를 진행하는게 맞다고 생각해 이러한 방향을 과제를 했습니다.

### 2. Eslint,Prettier

과제에서 제시한 코드 컨벤션은 [Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)을 기준을 하기 때문에 개발 시에 Eslint아 Prettier을 사용했습니다.(개발 완료 후 해당 패키지들은 삭제했습니다.)

### 1) Eslint 설치 및 설정

### A. 설치

```
npm init @eslint/config
```

Eslint를 다운로드 후 필요한 설정을 할 수도 있고 필요한 Eslint를 설정해주는 명령어를 이용할 수 도 있습니다.

터미널에 위의 명령어를 입력하고 질문에 답하면 기본적인 Eslint 설정과 필요한 패키지가 다운로드 되고 .eslintrc.js(또는 json,cjs 확장자)파일이 생성됩니다.

저는 'airbnb-base' 대신 보다 덜 엄격한 airbnb 패키지를 사용했습니다.

### B. Prettier와 충돌 방지를 위한 추가 설정

Prettier와 같이 사용 할 경우 충돌을 방지하기 위해 eslintrc에 다음의 내용을 추가해야합니다.

```
extends: ['airbnb', 'prettier']
```

### 2)Prettier 설치 및 설정

### A. 설치

```
npm i -D prettier eslint-config-prettier
```

- eslint-config-prettier : Prettier와 충돌하는 Eslint 규칙을을 꺼줌

### B. 설정

.prettierrc.js 또는 .prettierrc.json 파일을 생성해 옵션을 적어주면 됩니다.

- [Prettier 옵션들 보러가기](https://prettier.io/docs/en/options.html)

### 3) VSCode

VSCode에서 ESLint와 Prettier을 사용하려면 다음의 것들이 필요합니다.

- ESLint 와 Prettier 확정 프로그램을 설치
- setting.json

setting.json 파일을 생성해 아래의 내용을 작성해주면 됩니다.

```
{
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
}
```

### 3. try catch 와 throw Error

비동기로 진행 할 때 try catch문을 자주 사용했지만 try catch의 작동순서에 대해는 확실히 알지 못했습니다. 비동기 진행에 오류가 생길 경우 catch문이 실행되는 것인 줄 알았는데, 비동기 뿐만아니라 try의 모든 진행에 대해 작동해 하나의 과정에서라로 오류가 발생하면 catch 문이 실행되는 것을 알게 되었습니다.

throw문으로 Error를 다루면서, throw문에서 Error를 던지면 메서드의 진행이 종료된다는 것은 놓치고 지나갔다라는 것도 알게되었습니다.

### 4. 클래스

이번 과제를 클래스 위주로 진행하면서 클래스 문법에 대해 많이 소홀했다는 것을 느꼈고 다음의 것들을 배웠습니다.

### 1) 클래스 인스턴스는 소문자로

클래스를 기반으로 생성된 객체인 클래스 인스턴스는 **소문자**로 시작해야 클래스의 속성과 메서드를 사용할 수 있습니다.

ex)

```js
import Car from './Car.js';

class App {
  //...

  cat = new Car();
}
```

### 2) 클래스 필드와 constructor 차이

클래스의 속성은 constructor 뿐만아니라 ECMAScript 2019에서 도입된 클래스 필드를 이용해 설정할 수 있습니다.

constructor에서 속성을 설정하는 것과 클래스 필드에서 속성을 설정하는 것에는 차이가 있습니다. 바로 속성이 생성되고 설정되는 시기입니다.클래스 필드는 최상위의 위치에서 속성을 생성한다면 constructor는 클래스 인스턴스를 생성할때 호출되기 때문에 클래스 인스턴스가 생성되기 전에 constructor에서 생성한 속성을 호출하면 오류가 납니다.

```js
class A {
  this.year ="2023";
  constructor() {
    this.name = 'a';
  }
  printYear(){
    console.log(this.year);
  }
  printName() {
    console.log(this.name);
  }
}
A.printYear(); // 2023;
A.printName(); // Uncaught TypeError: A.print is not a function

const a = new A();
a.printName(); // a
```

---

### 자료

[알아두면 쓸데있는 ESLint & Prettier 설정 방법 (feat.우아한테크코스)](https://velog.io/@2wndrhs/%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%93%B8%EB%8D%B0%EC%9E%88%EB%8A%94-ESLint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)
