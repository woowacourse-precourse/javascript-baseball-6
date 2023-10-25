# 미션 - 숫자 야구

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만든다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

## 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

## 🚨 과제 제출 전 체크 리스트 - 0점 방지

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

## 🚀 기능 요구 사항

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

## 🎯 프로그래밍 요구 사항

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

## ✏️ 과제 진행 요구 사항

- 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball-6/) 저장소를 Fork & Clone해 시작한다.
- **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.

## 📄 `App.js` 기능 목록

### 1. 게임 시작 메시지 출력
- 게임이 시작되면 콘솔에 게임 시작 메시지를 출력합니다.

    ```javascript
    printStartMessage() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
    ```

### 2. 정답 숫자 설정
- 게임 시작 시 1-9까지의 서로 다른 무작위 숫자 3개를 정답으로 설정합니다.

    ```javascript
    async setUpAnswer() {
        this.answer = [];
        while (this.answer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.answer.includes(number)) {
                this.answer.push(number);
            }
        }
    }
    ```

### 3. 사용자로부터 숫자 입력 받기
- 게임 사용자로부터 3개의 숫자를 입력 받습니다. 유효하지 않은 입력에 대해서는 오류 메시지를 출력합니다.

    ```javascript
    async getUserGuess() {
        const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        if (!/^[1-9]{3}$/.test(input)) {
            throw new Error("[ERROR] 잘못된 입력입니다. 1-9 사이의 서로 다른 숫자 3개를 입력해주세요.");
        }
        return input.split("").map(Number);
    }
    ```

### 4. 입력한 숫자 평가하기
- 사용자가 입력한 숫자를 평가하여 결과(스트라이크, 볼, 또는 낫싱)를 결정합니다.

    ```javascript
    checkGuess(userGuess) {
        let strikes = 0;
        let balls = 0;

        userGuess.forEach((num, index) => {
            if (this.answer.includes(num)) {
                (this.answer[index] === num) ? strikes++ : balls++;
            }
        });

        return {
            message: strikes === 0 && balls === 0 ? "낫싱" : `${balls}볼 ${strikes}스트라이크`,
            strikes
        };
    }
    ```

### 5. 게임 오버 체크
- 3 스트라이크 시 사용자가 게임에서 승리한 것으로 간주하고 게임을 종료합니다.

    ```javascript
    async gameLoop() {
        let result;
        do {
            const userGuess = await this.getUserGuess();
            result = this.checkGuess(userGuess);
            MissionUtils.Console.print(result.message);
        } while (result.strikes < 3);

        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    ```

### 6. 게임 계속 여부 확인
- 게임 종료 후, 사용자가 게임을 계속할지 여부를 확인합니다.

    ```javascript
    async checkContinue() {
        const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ");
        if (input === "1") {
            this.isPlaying = true;
        } else if (input === "2") {
            this.isPlaying = false;
        } else {
            throw new Error("[ERROR] 잘못된 입력입니다. 1 또는 2를 입력해주세요.");
        }
    }
    ```

### 7. 예외 상황 처리
- 게임 중 발생할 수 있는 예외 상황을 처리합니다.

    ```javascript
    // 예외 처리는 각 메서드 (특히 getUserGuess 및 checkContinue) 내에서 이루어집니다.
    // 위의 코드 스니펫에서 예외 처리 로직을 확인할 수 있습니다.
    ```

