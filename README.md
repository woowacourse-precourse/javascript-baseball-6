## 📌 과제 설명 - 숫자 야구
### 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만든다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

### 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

### 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.

### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `18.17.1` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```

---

### 🚀 기능 요구 사항

기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

- 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
    - 123을 제시한 경우 : 1스트라이크
    - 456을 제시한 경우 : 1볼 1스트라이크
    - 789를 제시한 경우 : 낫싱
- 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한
  결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

### 입출력 요구 사항

#### 입력

- 서로 다른 3자리의 수
- 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

#### 출력

- 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시

```
1볼 1스트라이크
```

- 하나도 없는 경우

```
낫싱
```

- 3개의 숫자를 모두 맞힐 경우

```
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
```

- 게임 시작 문구 출력

```
숫자 야구 게임을 시작합니다.
```

#### 실행 결과 예시

```
숫자 야구 게임을 시작합니다.
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

---

### 🎯 프로그래밍 요구 사항

- Node.js 18.17.1 버전에서 실행 가능해야 한다. **Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

**예시**

```javascript
const app = new App();
app.play();
```

- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

### 라이브러리

- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.
  - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

#### 사용 예시

```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

---

### ✏️ 과제 진행 요구 사항

- 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball-6/) 저장소를 Fork & Clone해 시작한다.
- **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.


<br><br>

## 📝 구현할 기능 목록

1. 랜덤 숫자 생성하기
2. 사용자 입력값 받기
3. 입력값 유효성 검사하기
   - 입력값이 유효하지 않을 경우 : 에러 메세지 출력하기
   - 입력값이 유효할 경우 :
      - 스트라이크, 볼 개수 계산하기
      - 계산 결과에 따라 힌트 메세지 출력하기
4. 3스트라이크가 되면 선택 안내하기
   - 게임 재시작하기 : 1단계부터 재시작
   - 게임 종료하기 : 게임 종료


<br><br>


## 📌 클래스 설계
- `게임 지속 여부`와 `랜덤 숫자`를 가진 생성자
-  `랜덤 숫자 생성` 메서드
-  `입력값 유효성 검사` 메서드
-  `스트라이크 개수 계산` 메서드
-  `볼 개수 계산` 메서드
-  `play` 메서드

<br>

### 랜덤 숫자 생성 메서드
>#### 프로그래밍 요구사항
- `@woowacourse/mission-utils`의 Random API를 사용하여 구현해야 한다.
- Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
- 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.

1. `Random.pickNumberInRange()`를 활용해 1~9까지 랜덤 숫자를 뽑는다.
2. 서로 다른 수를 선택해야 하므로 answer에 없는 경우에만 담는다.
3. 이 시행을 3번 반복하여 1에서 9까지 서로 다른 임의의 수 3개를 answer 배열에 담을 수 있다.
```javascript
  randomNumberGenerator() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
```

<br>

### 입력값 유효성 검사 메서드
>#### 프로그래밍 요구사항
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.
- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 “[ERROR]“로 시작해야 한다.
- ex. [ERROR] 숫자가 잘못된 형식입니다.

1. 사용자가 입력한 값의 유효성을 검사한다.
2. 유효하지 않은 경우 Error 메세지를 반환한다.
	- 입력값이 숫자가 아닌 경우 : "[ERROR] 숫자 형식이 잘못되었습니다."
    - 입력값의 길이가 3이 아닌 경우 : "[ERROR] 숫자 길이가 잘못되었습니다."
    - 입력값에 0이 포함된 경우 : "[ERROR] 0을 포함하고 있습니다."
3. 유요한 경우 true를 반환한다.

⚠ 이때, `throw Error`를 하지 않고 Console에 에러 메세지 출력만 하면 test에 통과되지 않으므로 유의한다!

```javascript
  validateInput(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
    } else if (userInput.length !== 3) {
      throw new Error("[ERROR] 숫자 길이가 잘못되었습니다.");
    } else if (userInput.includes(0)) {
      throw new Error("[ERROR] 0을 포함하고 있습니다.");
    } else {
      return true;
    }
  }
```

<br>

### 스트라이크 개수 계산 메서드
>#### 프로그래밍 요구사항
- 같은 수가 같은 자리에 있으면 스트라이크이다.
- 스트라이크 개수를 세서 반환한다.
- 예) 상대방(컴퓨터)의 수가 425일 때, 123을 제시한 경우 : 1스트라이크

사용자가 입력한 값에서 컴퓨터가 생성한 값과 위치와 값이 모두 일치하는 경우만 filter하고 개수를 반환한다.
```javascript
  calcStrike(userInput, computerInput) {
    return userInput.filter((el, i) => computerInput[i] === el).length;
  }
```

<br>

### 볼 개수 계산 메서드
>#### 프로그래밍 요구사항
- 같은 수가 다른 자리에 있으면 볼이다.
- 볼의 개수를 세서 반환한다.
- 볼과 스트라이크가 같이 있을 경우 같이 출력한다.
- 예) 상대방(컴퓨터)의 수가 425일 때, 456을 제시한 경우 : 1볼 1스트라이크

사용자가 입력한 값이 컴퓨터가 생성한 값에 존재하지만 위치까지는 일치하지 않은 경우를 filter하고 개수를 반환한다.
```javascript
  calcBall(userInput, computerInput) {
    return userInput.filter(
      (el, i) => computerInput.includes(el) && computerInput[i] !== el
    ).length;
  }
```

<br>

### play 메서드
>#### 프로그래밍 요구사항
- 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력한다.
- 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

  1. 사용자한테 숫자 입력받기 
  `Console.readLineAsync` 활용
  2. 입력값 유효성 검사 & 스트라이크, 볼 개수 계산하기
  위에서 만든 3개의 메서드 활용
  3. 결과에 따라 문구 출력하기 
  `Console.print` 활용
  4. 3스트라이크인 경우 게임 재시작/종료 안내
       - 재시작하는 경우 : 새로운 랜덤 숫자 생성
      - 종료하는 경우 : 게임 지속 여부를 false로 설정
      
```javascript
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isContinue) {
      let userInput =
        await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      let isValid = this.validateInput(userInput);

      if (isValid) {
        const INPUT_ARR = userInput.toString().split("").map(Number);
        const STRIKE = this.calcStrike(INPUT_ARR, this.computerInput);
        const BALL = this.calcBall(INPUT_ARR, this.computerInput);

        if (STRIKE === 0 && BALL === 0) {
          MissionUtils.Console.print("낫싱");
        } else if (STRIKE === 3) {
          MissionUtils.Console.print("3스트라이크");
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          const CHOICE = await MissionUtils.Console.readLineAsync("");
          if (CHOICE === "1") {
            this.computerInput = this.randomNumberGenerator();
          } else if (CHOICE === "2") {
            this.isContinue = false;
          } else {
            throw new Error("[ERROR] 잘못 입력하였습니다.");
          }
        } else if (STRIKE > 0 && BALL > 0) {
          MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
        } else if (STRIKE > 0) {
          MissionUtils.Console.print(`${STRIKE}스트라이크`);
        } else if (BALL > 0) {
          MissionUtils.Console.print(`${BALL}볼`);
        }
      }
    }
  }
```

<br><br>

## 📌 전체 코드
>https://github.com/Doozuu/javascript-baseball-6/tree/doozuu

<br><br>

## ❌ 중간에 발생했던 오류
```javascript
const app = new App();
app.play();
```
- 위의 코드를 App.js에 넣었더니 아래처럼 프로그램이 종료가 안되는 문제가 발생했다.
![](https://velog.velcdn.com/images/049494/post/6c8725eb-49cf-4c6e-b548-4d626c3a21f9/image.png)
- 위의 코드를 삭제해서 해결되었다. (테스트할 때 자동으로 실행되는 부분인데 따로 추가했더니 계속 실행되서 그런 것 같다.)

<br><br>

## ♻️ 리팩토링
### 1. 변수명 네이밍 
: 상수명 대문자 변경
#### before
```javascript
const answer = [];
```
#### after
```javascript
const ANSWER = [];
```
<br>

### 2. 메서드 네이밍
`randomNumberGenerator`

>다른 메서드들(validateInput, calcStrike, calcBall)은 모두 동사로 시작하도록 네이밍했기 때문에 네이밍 방식을 통일한다.
`randomNumberGenerator` -> `generateRandomNum`

<br>

### 3. 중복 코드 단축
중복되는 출력 코드를 줄바꿈 `\n` 을 이용해 단축했다.
```javascript
MissionUtils.Console.print("3스트라이크");
MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
```
```javascript
MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
```
<br>

또한, utils를 import하는 부분을 바꾸어 코드를 단축시켰다.
#### Before ) `MissionUtils`를 import할 때 
`MissionUtils.Console.print` 
`MissionUtils.Random.pickNumberInRange`
```javascript
import { MissionUtils } from "@woowacourse/mission-utils";
```
```javascript
MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
```
<br>

#### After ) `Random`, `Console`를 import할 때 
`Console.print` 
`Random.pickNumberInRange`

```javascript
import { Random, Console } from "@woowacourse/mission-utils";
```
```javascript
Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
```
>이렇게 하면 MissionUtils 부분을 생략하고 쓸 수 있다.(코드 단축)

<br>

### 4. 클린코드 규칙 엄수하기
>#### 메서드 길이가 10을 넘어가면 분리하기

play 메서드의 길이가 너무 길어서 이를 분리하기로 했다.
```javascript
async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isContinue) {
      const USERINPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const IS_VALID = this.validateInput(USERINPUT);

      if (IS_VALID) {
        const INPUT_ARR = USERINPUT.toString().split("").map(Number);
        const STRIKE = this.calcStrike(INPUT_ARR, this.computerInput);
        const BALL = this.calcBall(INPUT_ARR, this.computerInput);

        if (STRIKE === 3) {
          Console.print(
            "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          const CHOICE = await Console.readLineAsync("");
          if (CHOICE === "1") {
            this.computerInput = this.generateRandomNum();
          } else if (CHOICE === "2") {
            this.isContinue = false;
          } else {
            throw new Error("[ERROR] 잘못 입력하였습니다.");
          }
        } else if (STRIKE === 0 && BALL === 0) {
          Console.print("낫싱");
        } else if (STRIKE > 0 && BALL > 0) {
          Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
        } else if (STRIKE > 0) {
          Console.print(`${STRIKE}스트라이크`);
        } else if (BALL > 0) {
          Console.print(`${BALL}볼`);
        }
      }
    }
  }
```
결과를 출력하는 `printResult` 메서드와 게임 재시작/종료를 선택하는 `selectOption` 메서드를 만들었다.
```javascript
  async selectOption() {
    Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const CHOICE = await Console.readLineAsync("");
    if (CHOICE === "1") {
      this.computerInput = this.generateRandomNum();
    } else if (CHOICE === "2") {
      this.isContinue = false;
    } else {
      throw new Error("[ERROR] 잘못 입력하였습니다.");
    }
  }

  async printResult(strike, ball) {
    if (strike === 3) {
      await this.selectOption();
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike > 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball > 0) {
      Console.print(`${ball}볼`);
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isContinue) {
      const USERINPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const IS_VALID = this.validateInput(USERINPUT);

      if (IS_VALID) {
        const INPUT_ARR = USERINPUT.toString().split("").map(Number);
        const STRIKE = this.calcStrike(INPUT_ARR, this.computerInput);
        const BALL = this.calcBall(INPUT_ARR, this.computerInput);
        await this.printResult(STRIKE, BALL);
      }
    }
  }
```

[클린코드 참고 블로그](https://nar023.tistory.com/41#article-3--%EB%AA%A8%EB%93%A0-%EC%9B%90%EC%8B%9C%EA%B0%92%EA%B3%BC-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%ED%8F%AC%EC%9E%A5%ED%96%88%EB%8A%94%EA%B0%80?)
[Airbnb 스타일 가이드](https://github.com/airbnb/javascript)

<br><br>

## 👀 느낀 점
- 클래스를 활용해본 경험이 별로 없는데 이번 기회에 활용해볼 수 있어서 색다르고 좋았다.
- 요구사항이 간단한듯 하면서도 생각보다 복잡해서 꼼꼼하게 읽어야 했다.
- 예외처리에 조금 더 시간을 들이기 위해 노력했다.
- 네이밍 규칙을 좀 더 신경써볼 수 있는 기회가 되었다. 
- 평소 const를 거의 사용하지 않고 let을 사용하는데 const를 사용해보려고 노력했다.
- 기능 단위로 커밋하기 위해 노력했고, 평소에도 기능 단위별로 커밋하기 위해 좀 더 신경써야겠다고 느꼈다.
- 스타일 가이드를 참고해서 클린 코드를 작성하기 위해 노력했고, 클린코드와 관련해서 공부를 더 해야겠다고 느꼈다.

<br><br>

## ✌️ 1주차 과제 완료!
![](https://velog.velcdn.com/images/049494/post/21e0ab0b-0305-4fed-94d2-ff6ee87cb3d2/image.png)
